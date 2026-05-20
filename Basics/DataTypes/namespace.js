"use strict";
var user;
(function (user) {
    class user1 {
        login() {
            return "user loggedIn successfully";
        }
    }
    user.user1 = user1;
    ;
    class user2 {
        logout() {
            return "user logout successfull.";
        }
    }
    user.user2 = user2;
    function register() {
        return "new account created successfully.";
    }
    user.register = register;
})(user || (user = {}));
var userdetailswithauth = new user.user1();
console.log(userdetailswithauth.login());
