import React from "react";
import docPic from "../assets/images/med1.png";
import { Link } from "react-router-dom";

const ConfirmationScreen = () => {
  return (
    <div className="flex flex-col items-center pb-20 bg-white min-h-screen">
      <Header />
      <ConfirmationMessage />
      <DoctorCard />
      <ReturnButton />
    </div>
  );
};

const Header = () => (
  <header className="flex justify-between items-center py-3 px-6 bg-white shadow-md w-full">
    <div className="flex gap-2.5 items-center">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/de2c6e30ab8dea8f30e724eaf46bd74a55639aeda9046592cd38bcbf0776b24b?"
        className="shrink-0 w-14 h-14 rounded-full"
        alt="User"
      />
      <div className="flex flex-col px-5 my-auto">
        <div className="font-medium text-neutral-800">Eduarda Alencar</div>
        <div className="mt-1 text-sm font-bold text-neutral-700">Paciente</div>
      </div>
    </div>
    <nav className="flex gap-6 text-md font-medium">
      <NavLink text="Página Inicial" />
      <NavLink text="Encontre seu psicólogo" />
      <NavLink text="Comunidade" />
      <NavLink text="Minhas Consultas" active />
    </nav>
  </header>
);

const UserProfile = ({ name, role, profilePic }) => (
  <div className="flex items-center gap-3">
    <img loading="lazy" src={profilePic} className="w-12 h-12 rounded-full" alt="User" />
    <div>
      <div className="font-medium text-neutral-800">{name}</div>
      <div className="text-sm font-bold text-neutral-700">{role}</div>
    </div>
  </div>
);

const NavLink = ({ text, active }) => (
  <a href="#" className={`flex-auto ${active ? "text-emerald-400 font-extrabold" : "text-black"}`}>
    {text}
  </a>
);

const ConfirmationMessage = () => (
  <div className="flex flex-col items-center mt-52 max-md:mt-10 max-md:max-w-full">
    <h1 className="text-6xl font-bold text-emerald-400 max-md:text-4xl">Consulta Confirmada</h1>
    <p className="mt-8 text-2xl font-medium text-emerald-400">Você marcou sua consulta com o doutor:</p>
  </div>
);

const DoctorCard = () => (
  <div className="flex flex-col items-center mt-14 max-w-[1697px] w-full border border-emerald-400 p-6 rounded-xl">
    <img loading="lazy" src={docPic} className="w-24 h-24 rounded-full" alt="Doctor" />
    <div className="flex flex-col items-center mt-4">
      <h2 className="text-2xl font-bold text-emerald-400">Dr. Marcelo Oliveira</h2>
      <p className="text-base font-semibold text-neutral-700">Psicólogo - Online</p>
    </div>
  </div>
);

const ReturnButton = () => (
  <Link to="user-page" className="mt-20 px-16 py-4 text-xl font-bold text-white bg-emerald-400 rounded-3xl max-md:px-5 max-md:mt-10">
    Voltar a Página Inicial
  </Link>
);

export default ConfirmationScreen;
