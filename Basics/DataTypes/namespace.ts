namespace user {
  export class user1 {
    login(): string {
      return "user loggedIn successfully";
    }
  };
  export class user2{
    logout():string{
        return "user logout successfull."
    }
  }
  export function register():string{
    return "new account created successfully."
  }
}

var userdetailswithauth = new user.user1();
console.log(userdetailswithauth.login());
