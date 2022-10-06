import React from 'react';

function SignIn(){
    return (
        <div id= "signin-form">
            <h3>Log in or register here</h3>
        <form>
    {/* <!-- Email input --> */}
        <div className="form-outline mb-4">
        <input placeholder='Enter email address here' type="email" id="form2Example1" className="form-control" />
        <label  className="form-label">Email</label>
    </div>

    {/* <!-- Password input --> */}
    <div className="form-outline mb-4">
        <input placeholder='Enter password' type="password" id="form2Example2" className="form-control" />
        <label className="form-label">Password</label>
    </div>

    {/* <!-- 2 column grid layout for inline styling --> */}
    <div className="row mb-4">
        <div className="col d-flex justify-content-center">
         {/* <!-- Checkbox --> */}
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
            <label className="form-check-label"> remember me </label>
        </div>
    </div>

    <div className="col">
      {/* <!-- Simple link --> */}
        <a href="#!">Forgot password?</a>
    </div>
    </div>

  {/* <!-- Submit button --> */}
    <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

    {/* <!-- Register buttons --> */}
    <div className="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
        <p>or sign up with:</p>
        <button type="button" className="btn btn-link btn-floating mx-1">
            <a href="#" class="fa fa-facebook"></a>
        </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
        <i className="fab fa-google"></i>
    </button>
    <button type="button" className="btn btn-link btn-floating mx-1">
        <i className="fab fa-github"></i>
    </button>
    </div>
</form>
</div>
    )
}
export default SignIn;