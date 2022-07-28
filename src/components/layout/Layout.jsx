import React from "react";
import "./style.css";
//props
const Layout = ({ children }) => {
    //props.children 
    return <div className="layout">{children}</div>;
};

export default Layout;
