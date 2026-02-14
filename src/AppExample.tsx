// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useTokenExpiry } from './hooks/useAuth';
// import LoginPage from './pages/LoginPage';
// import HomePage from './pages/HomePage'; // Your protected page
// import ProtectedRoute from './components/ProtectedRoute';

// const App: React.FC = () => {
//   // This hook will check token expiry every 30 seconds and auto-logout if needed
//   useTokenExpiry();

//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
//         <Route
//           path="/learn/home"
//           element={
//             <ProtectedRoute>
//               <HomePage />
//             </ProtectedRoute>
//           }
//         />
//         {/* Add more protected routes as needed */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;
