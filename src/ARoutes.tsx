import React from "react";
import { Route, Routes, Navigate, BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import { ApplicationProvider } from "../resources/providers/ApplicationProvider.tsx";
import Menu from "./pages/loggedIn/Menu.tsx";


const ARoutes: React.FC = () => {
  // const appContext = useContext(ApplicationContext);

    return <ApplicationProvider>
              <Router>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/learn/*' element={<Menu />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
              </Router>
            </ApplicationProvider>
}

export default ARoutes;