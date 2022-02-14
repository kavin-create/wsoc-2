import React from "react";
import "./Logins.css";
function Login(){
    return (
        <div className="col-mid-2">
        <h1 class="Name-2">Login</h1>
        <a href="/accounts/google/login/?process=login"><button class="button" type="button" name="button">Sign in with google <i class="fab fa-google"></i></button></a>
        </div>
    )
}

export default Login;