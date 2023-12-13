import React from 'react';
import { GoogleOAuthProvider, GoogleLogin, useGoogleOneTapLogin } from '@react-oauth/google';

const LoginWithGoogle = () => {
  const handleLoginSuccess = credentialResponse => {
    // Handle successful login
    console.log(credentialResponse);
    // Implement any further logic here after successful login
  };

  const handleLoginError = () => {
    // Handle login failure
    console.log('Login Failed');
  };

  // Handle one-tap login
  useGoogleOneTapLogin({
    onSuccess: handleLoginSuccess,
    onError: handleLoginError,
  });

  return (
    <GoogleOAuthProvider clientId="<your_client_id>">
      <div>
        <h1>Welcome to Your App!</h1>
        {/* Google login button */}
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginWithGoogle;
