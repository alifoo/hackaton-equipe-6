import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import cpfIcon from "../assets/images/cpf-icon.png";
import { useAuth } from '../context/AuthContext';
import { login } from '../services/authService.jsx';
import logo from "../assets/images/logo.png";

import GoogleLoginButton from './Auth/GoogleLoginButton.jsx';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login: authLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      authLogin(data.token);
      navigate('/user-page');  // Redirect to user page after login
    } catch (error) {
      console.error('Failed to login', error);
    }
  };


    return (
        <div className="min-h-screen flex">
          <div
              className="flex flex-col justify-center items-center w-1/2 bg-gradient-to-b from-[#338AA6] to-[#3ABAA9] text-white p-16">
            <div
                className="flex gap-4 items-start px-5 text-5xl font-medium tracking-tight text-white leading-[79.5px] max-md:flex-wrap max-md:text-4xl">
              <img
                  loading="lazy"
                  src={logo}
                  className="shrink-0 self-start aspect-[1.1] fill-white w-[82px] mt-5"
                  alt="Logo"
              />
              <div className="flex-auto self-end mt-7 mb-8 max-md:max-w-full max-md:text-4xl">
                <span className="font-extrabold">Psicou</span>, seu Amigoterapia.
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-1/2 p-16 bg-neutral-100">
            <form onSubmit={handleSubmit}>
              <h2 className="text-4xl font-bold tracking-tight text-center text-cyan-600">

                Faça seu <span className="text-cyan-600">Login</span>
              </h2>
              <GoogleLoginButton onSuccess={(token) => {
                authLogin(token);
                navigate('/user-page');
              }}/>
              <div className="w-full max-w-md mt-10">
                <div className="flex items-center px-6 py-4 bg-stone-300 rounded-full mb-6">
                  <img
                      loading="lazy"
                      src={cpfIcon}
                      className="w-6 h-6 object-cover"
                      alt="CPF Icon"
                  />
                  <input
                      type="email"
                      placeholder="Insira seu Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-auto text-lg italic bg-transparent outline-none ml-4"
                  />
                </div>
                <div className="flex items-center px-6 py-4 bg-stone-300 rounded-full mb-6">
                  <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e3a309b16aa0de57f7cef2a010319dd981b45942cae5919181e0d85543fa26d?"
                      className="w-6 h-6 object-cover"
                      alt="Password Icon"
                  />
                  <input
                      type="password"
                      placeholder="Insira sua senha..."
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="flex-auto text-lg italic bg-transparent outline-none ml-4"
                  />
                </div>
                <button type="submit"
                        className="w-full px-8 py-4 text-xl font-bold text-white bg-cyan-600 rounded-full shadow-md">
                  Logar
                </button>
                <div className="mt-8 text-center">
                  <a href="#" className="block text-lg font-medium text-black underline">
                    Esqueci minha senha
                  </a>
                  <Link to="/register" className="block text-lg font-medium text-black underline mt-2">
                    Ainda não sou cadastrado
                  </Link>
                </div>
              </div>
            </form>
          </div>
</div>
)
  ;
}

export default LoginScreen;