import { useContext } from "react";
import  {UserContext}  from "./UserContext";

export const User = () => {
    const UserContext = useContext(UserContext);
    const handleLogin = () => {
            if(UserContext){
                UserContext.setUser({
                    name:"Arvind",
                    email:"arvind21@gmail.com"
                })
            }
    };
    const handleLogout = () => {
        if(UserContext){
            UserContext.setUser(null);
        }
    };

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <br />
        <button onClick={handleLogout}>Logout</button>
        <h3>User email is {UserContext?.user?.name}</h3>
        <h3>User name is{UserContext?.user?.email} </h3>
    </div>
  )
}
