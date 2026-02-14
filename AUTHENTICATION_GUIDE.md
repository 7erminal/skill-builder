# Authentication Integration Guide

## Overview

This guide explains how to integrate your Go `ValidateCustomerCredentialsToken` endpoint with your React + TypeScript application, including token management and expiry handling.

---

## 1. Setup

### Environment Variables

Create a `.env` file in your React project:

```env
REACT_APP_API_URL=http://localhost:8080
```

### Install Dependencies

```bash
npm install axios
```

---

## 2. How It Works

### Login Flow

```
User enters credentials
         ↓
authService.login(username, password)
         ↓
POST /validate-customer-credentials/token
         ↓
Backend returns tokens + expiry times
         ↓
Tokens stored in localStorage
         ↓
User redirected to /learn/home
```

### Token Expiry Flow

```
useTokenExpiry() hook runs (checks every 30 seconds)
         ↓
Is access token expired? → If YES, try to refresh
         ↓
Is refresh token expired? → If YES, logout and redirect to /login
         ↓
Continue checking...
```

### Automatic Token Refresh

```
API request made
         ↓
401 Unauthorized response?
         ↓
Automatically refresh access token
         ↓
Retry original request
         ↓
If refresh fails → Logout user
```

---

## 3. Using the Authentication Service

### Basic Login

```typescript
import { authService } from './services/authService';

// Login user
const response = await authService.login({
  username: 'john_doe',
  password: 'password123'
});

if (response.StatusCode === 200) {
  // Login successful, tokens stored automatically
  // User automatically redirected by useLogin hook
}
```

### Check Token Expiry

```typescript
// Check if access token has expired
if (authService.isAccessTokenExpired()) {
  console.log('Access token expired');
}

// Check if refresh token has expired
if (authService.isRefreshTokenExpired()) {
  console.log('Refresh token expired, user must login again');
}

// Get time remaining (in seconds)
const accessTokenTimeLeft = authService.getAccessTokenTimeRemaining();
console.log(`Access token expires in ${accessTokenTimeLeft} seconds`);

const refreshTokenTimeLeft = authService.getRefreshTokenTimeRemaining();
console.log(`Refresh token expires in ${refreshTokenTimeLeft} seconds`);
```

### Check Authentication Status

```typescript
// Check if user is authenticated
if (authService.isAuthenticated()) {
  console.log('User is authenticated');
} else {
  console.log('User is not authenticated');
}

// Get tokens
const accessToken = authService.getAccessToken();
const refreshToken = authService.getRefreshToken();

// Logout
authService.logout();
```

---

## 4. Using React Hooks

### useLogin - For Login Pages

```typescript
import { useLogin } from './hooks/useAuth';

const LoginPage = () => {
  const { login, loading, error } = useLogin();

  const handleLogin = async (username: string, password: string) => {
    await login(username, password);
    // Automatically redirected on success
  };

  return (
    <>
      {error && <p className="text-red-600">{error}</p>}
      <button onClick={() => handleLogin('user', 'pass')} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </>
  );
};
```

### useTokenExpiry - For Token Monitoring

```typescript
import { useTokenExpiry } from './hooks/useAuth';

const Dashboard = () => {
  const { isAccessTokenExpired, isRefreshTokenExpired, timeRemaining } = useTokenExpiry();

  return (
    <>
      <p>Access token expires in: {timeRemaining.accessToken}s</p>
      <p>Refresh token expires in: {timeRemaining.refreshToken}s</p>
      {isAccessTokenExpired && <p>Access token expired!</p>}
      {isRefreshTokenExpired && <p>Please login again</p>}
    </>
  );
};
```

### useAuth - For Current Auth State

```typescript
import { useAuth } from './hooks/useAuth';

const Header = () => {
  const { isAuthenticated, accessToken, logout } = useAuth();

  return (
    <>
      {isAuthenticated && (
        <>
          <span>Logged in</span>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </>
  );
};
```

### useAuthGuard - For Protecting Routes

```typescript
import { useAuthGuard } from './hooks/useAuth';

const ProtectedPage = () => {
  const { isAuthenticated } = useAuthGuard();

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return <div>This page is protected</div>;
};
```

---

## 5. Protected Routes

### Using ProtectedRoute Component

```typescript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

function App() {
  useTokenExpiry(); // Monitor token expiry globally

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/learn/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 6. Token Storage & Security

### Where Tokens Are Stored

- **Storage Method**: `localStorage`
- **Key**: `auth_tokens`
- **Content**:
  ```json
  {
    "accessToken": "eyJhbGc...",
    "refreshToken": "eyJhbGc...",
    "accessTokenExpiresAt": 1707559800000,
    "refreshTokenExpiresAt": 1708164600000,
    "userType": "CUSTOMER"
  }
```

### Security Notes

1. **HTTPS Only**: Always use HTTPS in production
2. **HttpOnly Cookies**: Consider using HttpOnly cookies instead of localStorage for production
3. **Token Refresh**: Access tokens are short-lived (15 minutes) and refreshed automatically
4. **Logout**: Always clear tokens on logout

---

## 7. API Request Handling

### Automatic Token Attachment

All API requests automatically include the access token:

```typescript
// This request automatically includes:
// Authorization: Bearer {accessToken}
const response = await authService.api.get('/some-endpoint');
```

### Automatic Token Refresh

If a request returns 401, the service automatically:

1. Attempts to refresh the access token using the refresh token
2. Retries the original request with the new token
3. If refresh fails, logs out the user

```typescript
// If this returns 401:
const response = await authService.api.get('/protected-endpoint');
// Automatically refreshes token and retries
// If refresh fails, user is logged out
```

---

## 8. Example: Complete Authentication Flow

```typescript
// 1. User logs in
const LoginPage = () => {
  const { login, loading, error } = useLogin();

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      login(username, password);
    }}>
      {error && <p>{error}</p>}
      <input value={username} onChange={setUsername} />
      <input type="password" value={password} onChange={setPassword} />
      <button disabled={loading}>Login</button>
    </form>
  );
};

// 2. On successful login, user is redirected
// 3. useTokenExpiry() hook checks tokens every 30 seconds
// 4. If access token expires, it's automatically refreshed
// 5. If refresh token expires, user is logged out and redirected to /login

// 6. Protected pages are wrapped in ProtectedRoute
const HomePage = () => {
  useTokenExpiry(); // Monitor tokens

  return <div>Welcome to home page</div>;
};
```

---

## 9. Token Expiry Timing

### Access Token
- **Expiry**: 15 minutes (900 seconds)
- **Checked Every**: 30 seconds (auto-refresh at 1 minute remaining)
- **Behavior**: Automatically refreshed before expiry

### Refresh Token
- **Expiry**: 7 days
- **Checked Every**: 30 seconds
- **Behavior**: User logged out if expired

---

## 10. Debugging Token Issues

### Display Token Status

```typescript
import TokenStatus from './components/TokenStatus';

function App() {
  return (
    <>
      <TokenStatus /> {/* Shows token status in development */}
      <Routes>
        {/* ... */}
      </Routes>
    </>
  );
}
```

### Console Logging

```typescript
// Check current tokens
console.log(authService.getStoredTokens());

// Check expiry status
console.log({
  isAccessTokenExpired: authService.isAccessTokenExpired(),
  isRefreshTokenExpired: authService.isRefreshTokenExpired(),
  accessTokenTimeRemaining: authService.getAccessTokenTimeRemaining(),
  refreshTokenTimeRemaining: authService.getRefreshTokenTimeRemaining(),
});
```

---

## 11. Common Issues & Solutions

### Issue: User keeps getting logged out

**Solution**: Check if `REACT_APP_API_URL` environment variable is correct and backend is running.

### Issue: Access token not refreshing

**Solution**: Ensure refresh token is valid and backend `/refresh/customer/token` endpoint is working.

### Issue: CORS errors

**Solution**: Configure CORS on your Go backend:

```go
// In your Beego router setup
beego.InsertFilter("*", beego.BeforeRouter, cors.Allow(&cors.Options{
    AllowAllOrigins: true,
    AllowMethods:    []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
    AllowHeaders:    []string{"Content-Type", "Authorization"},
}))
```

### Issue: Tokens not persisting after refresh

**Solution**: Check browser localStorage is enabled and not blocked.

---

## 12. File Structure

```
src/
├── services/
│   └── authService.ts          # Main authentication service
├── hooks/
│   └── useAuth.ts              # React hooks for authentication
├── components/
│   ├── ProtectedRoute.tsx       # Protected route wrapper
│   └── TokenStatus.tsx          # Token status display
├── pages/
│   ├── LoginPage.tsx            # Updated login page
│   └── HomePage.tsx             # Your protected page
└── App.tsx                      # Main app with useTokenExpiry()
```

---

## Summary

- **Login**: Use `useLogin()` hook or `authService.login()`
- **Check Token Expiry**: Use `useTokenExpiry()` hook or direct service methods
- **Automatic Refresh**: Access token auto-refreshes, just add `useTokenExpiry()` in your App
- **Logout**: Automatic on refresh token expiry, manual via `authService.logout()`
- **Protected Routes**: Wrap with `<ProtectedRoute>` component
