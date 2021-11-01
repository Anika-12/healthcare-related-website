import React from "react";
import useFirebase from "./../../Hooks/useFirebase";

const Login = () => {
  const { loginWithGoogle, user } = useFirebase();

  return (
    <div className="mt-5">
      <h1>Login Here{user.email}</h1>
      <form>
      <input type="email" name="" id="" placeholder="Input your Email" />
      <br />
      <input className="mt-2" type="pass"name="" id="" placeholder="Input your Password" />
      <br /> <br/>
      <input type ="submit" value="submit"/>
      </form>
      <button onClick={loginWithGoogle} className=" mt-5">
        Sign in With Google
      </button>
    </div>
  );
};

export default Login;
