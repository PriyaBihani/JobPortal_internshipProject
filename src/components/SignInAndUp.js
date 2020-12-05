import React, { useEffect } from 'react'
import $ from 'jquery'

const SignIn = () => {
    useEffect(() => {
      	$(".btn").click(function() {
            $(".form-signin").toggleClass("form-signin-left");
            $(".form-signup").toggleClass("form-signup-left");
            $(".frame").toggleClass("frame-long");
            $(".signup-inactive").toggleClass("signup-active");
            $(".signin-active").toggleClass("signin-inactive");
            $(".forgot").toggleClass("forgot-left");   
            $(this).removeClass("idle").addClass("active");
        });
    }, [])
    return (
        <div className="container signupandsignin">
            <div class="frame">
                <div class="nav"> 
                    <ul class="links">
                        <li class="signin-active"><a class="btn">Sign in</a></li>
                        <li class="signup-inactive"><a class="btn">Sign up </a></li>
                    </ul>
                </div>

                <div ng-app ng-init="checked = false">
                    <form class="form-signin" action="" method="post" name="form">
                        <label for="username">Username</label>
                        <input class="form-styling" type="text" name="username" placeholder=""/>
                        <label for="password">Password</label>
                        <input class="form-styling" type="text" name="password" placeholder=""/>
                        <input type="checkbox" id="checkbox"/>
                        <label for="checkbox" ><span class="ui"></span>Keep me signed in</label>
                            <div class="btn-animate">
                                <a class="btn-signin">Sign in</a>
                            </div>
                    </form>
                    
                    <form class="form-signup" action="" method="post" name="form">
                        <label for="fullname">Full name</label>
                        <input class="form-styling" type="text" name="fullname" placeholder=""/>
                        <label for="email">Email</label>
                        <input class="form-styling" type="text" name="email" placeholder=""/>
                        <label for="password">Password</label>
                        <input class="form-styling" type="text" name="password" placeholder=""/>
                        <label for="confirmpassword">Confirm password</label>
                        <input class="form-styling" type="text" name="confirmpassword" placeholder=""/>
                        <a ng-click="checked = !checked" class="btn-signup">Sign Up</a>
                    </form>
                    <div class="forgot">
                        <a href="#">Forgot your password?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
