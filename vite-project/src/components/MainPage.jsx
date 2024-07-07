import React from "react";
import picture from "../assets/images/main-photo.png";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="px-8 py-7 bg-[linear-gradient(180deg,#338AA6_0%,#3ABAA9_41%)] max-md:px-3">
      <div className="flex gap-3 max-md:flex-col">
        <section className="flex flex-col max-w-4xl mr-auto max-md:w-full pl-12">
          <div className="flex flex-col my-auto font-medium leading-[150%] max-md:mt-5">
            <div className="flex gap-4 items-start px-5 text-5xl font-medium tracking-tight text-white leading-[79.5px] max-md:flex-wrap max-md:text-4xl">
              <img
                loading="lazy"
                src={logo}
                className="shrink-0 self-start aspect-[1.1] fill-white w-[82px] mt-5"
              />
              <div className="flex-auto self-end mt-7 mb-8 max-md:max-w-full max-md:text-4xl">
                <span className="font-extrabold">Psicou</span>, seu Amigoterapia.
              </div>
            </div>
            <p className="mt-4 pb-12 text-lg tracking-tight leading-7 text-justify text-white max-md:mt-5">
              Juntos, conectamos pessoas a psicólogos por meio de atendimento
              online, oferecendo suporte emocional e psicológico completamente
              gratuito. Nosso compromisso é facilitar o acesso rápido e fácil a
              cuidados essenciais, promovendo bem-estar e saúde mental para
              todos.
            </p>
            <div className="flex gap-3 mt-8 text-lg font-bold text-center max-md:flex-wrap max-md:mt-5">
              <Link to="/login" className="px-24 py-3 mr-4 text-cyan-700 bg-white rounded-full w-fit max-md:px-3">
                Login
              </Link>
              <Link to="/register" className="px-20 py-3 text-white bg-cyan-700 rounded-full w-fit max-md:px-3">
                Cadastrar
              </Link>
            </div>
            <div className="mt-6 text-lg font-extrabold tracking-tight text-white underline max-md:mt-5 pt-4">
              <span className="font-medium">É um profissional ou empresa? Faça seu</span>
              <a href="#" className="underline"> login.</a>
            </div>
          </div>
        </section>
        <section className="flex flex-col w-5/12 max-md:w-full max-md:mt-5">
          <img
            loading="lazy"
            src={picture}
            alt="Main"
            className="grow w-full shadow-sm aspect-[0.88] ml-auto"
          />
        </section>
      </div>
    </div>
  );
}

export default MainPage;
