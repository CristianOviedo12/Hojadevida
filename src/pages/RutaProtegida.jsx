import React from "react";
import { Navigate } from "react-router-dom";

const RutaProtegida = ({component : Component, isAuthenticated, ...rest }) => {
    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/sesion"/>
}

export default RutaProtegida;