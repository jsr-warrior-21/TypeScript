import React from "react";
import Login from "./Login";
import type { profileProps } from "./Profile";

type privateProps = {
    isLoggedIn:boolean,
    Component:React.ComponentType<profileProps>;
}


const Private = ({isLoggedIn,Component}:privateProps) => {
    if(isLoggedIn){
        return <Component name = "AM"/>
    }else{
        return <Login/>
    }
}
export default Private;