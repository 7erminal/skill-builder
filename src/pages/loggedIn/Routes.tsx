import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import ApplicationContext from "../../../resources/providers/ApplicationContext";
import HomePage from "./Home";
import LoadingOverlay from "../../components/LoadingOverlay";
// import ActivityTracker from "./resources/ActivityTracker.tsx";
// import ApplicationContext from './resources/contexts/ApplicationContext';
// import NotififcationModal from "./components/NotificationModal.tsx";
// import Loading from "./widgets/Loading.tsx";



const CustomRoutes: React.FC = () => {
    const applicationContext = useContext(ApplicationContext);

    return <>
            <Routes>
                {/* <Route path="*" element={<NotFoundPage />} /> */}
                {/* <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} /> */}
                <Route path='/home' element={<HomePage />} />
                {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
            </Routes>
            {/* <Invoice showModal={showInvoice} handleClose={handleShowInvoiceModalClose} invoice={selectedInvoice} />
            <NotififcationModal notificationProps={appContext!.notificationProps!} />
            <Loading show={systemContext?.loading} handleClose={appContext!.handleLoadingClose} /> */}
            {applicationContext?.loading ? <LoadingOverlay /> : null}
        </>
            
}

export default CustomRoutes;