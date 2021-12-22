import React, {useState} from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';

export default function Login() {

    const clientId = "233198973854-8h50d7jg7quhc9b38moqendjcq6pjtu0.apps.googleusercontent.com";
    const [showLoginButton, setShowLoginButton] = useState(true);
    const [showLogoutButton, setShowLogoutButton] = useState(false);

    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowLoginButton(false);
        setShowLogoutButton(true);
    }

    const onFailureSuccess = (res) => {
        console.log('Login Failed:', res);
    }

    const onSignoutSuccess = () => {
        alert("You have been sign out sucessfully");
        setShowLoginButton(true)
        setShowLogoutButton(false)
    }

    return (
        <div>
            {showLoginButton ? 
                <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onLoginSuccess}
                onFailure={onFailureSuccess}
                cookiePolicy={'single_host_origin'}
                /> : null 
            }
            
            {showLogoutButton ?
                <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
    )
}
