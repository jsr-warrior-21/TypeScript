import { useState } from "react";

const Auth = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const handleLogin = () => {
    setIsLoggedin(true);
  };
  const handleLogout = () => {
    setIsLoggedin(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>LoggedIn</button>
      <br />
      <button onClick={handleLogout}>Logout</button>
      <br />
      <h3>User is {isLoggedin ? "loggedIn" : "loggedOut"}</h3>
    </div>
  );
};

export default Auth;
