import { useState } from "react"

type AuthUser = {
    name:string,
    email:string
}


const User = () => {
    const [user,setUser] = useState<AuthUser|null>(null); // here we have specified type of user can be null either AuthUser
     const loginHandler = () => {
            setUser({
                name:'arvind',
                email:"arvind21@gmail.com"
            });
     }
     const logoutHanlder = () =>{
        setUser(null);
     }
  return (
    <div>
        <button onClick={loginHandler}>Login</button>
        <br />
        <button onClick={logoutHanlder}>Logout</button>
        <br />
        <h3>User name is {user?.name} </h3>
        <h3>User email is {user?.email}</h3>
         {/* for removing this question mark you can write upper useState line like this --  const [user,setUser] = useState<AuthUser>({} as AuthUser); */}
    </div>
  )
}

export default User