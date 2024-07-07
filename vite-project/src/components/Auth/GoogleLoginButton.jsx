import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const GoogleLoginButton = ({ onSuccess }) => {
    const navigate = useNavigate();

    const handleSuccess = (response) => {
        const token = response.credential;
        fetch(`${import.meta.env.VITE_API_URL}/auth/google`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    onSuccess(data.token);
                    navigate('/user-page');
                } else {
                    console.error('Failed to login with Google', data);
                }
            })
            .catch((error) => console.error('Failed to login with Google', error));
    };

    const handleFailure = (error) => {
        console.error('Google Login Failed', error);
    };

    return (
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
            <GoogleLogin
                onSuccess={handleSuccess}
                onError={handleFailure}
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleLoginButton;