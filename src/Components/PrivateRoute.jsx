import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if (loading) return <div className="min-h-screen w-full flex items-center justify-center"><span className="loading loading-infinity loading-lg  "></span></div>
    if(user) return children
    return <Navigate to='/login' state={location.pathname} replace={true}></Navigate>
};

export default PrivateRoute;