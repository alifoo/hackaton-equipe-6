import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import profilePic from "../assets/images/profile-pic.png";

function AcharPsicologo() {
  return (
    <div className="flex flex-col pb-8 bg-white border-t-8 border-emerald-400">
      <Header />
      <div className="flex flex-col px-8 mt-10 w-full text-lg font-bold leading-8 text-neutral-600 max-md:px-5 max-md:mt-8 max-md:max-w-full">
        <SectionTitle title="Encontre seu Psicólogo" subTitle="Comece agora seu caminho para o bem-estar mental online." />
        <SearchSection title="Especialidades" options={["Ansiedade", "Depressão", "Transtorno Bipolar", "Esquizofrenia", "TOC", "TDAH", "Transtorno de Pânico", "Fobias", "Transtorno Alimentar", "Transtorno de Estresse Pós-Traumático"]} />
        <SearchSection title="Abordagens" options={["Psicanálise", "Terapia Cognitivo-Comportamental", "Terapia Humanista", "Terapia Comportamental", "Terapia Sistêmica"]} />
        <SearchSection title="Região" options={["Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas", "Santa Maria", "Gravataí", "Viamão", "Novo Hamburgo", "São Leopoldo", "Rio Grande"]} />
        <SearchButton />
        <SupportSection />
      </div>
    </div>
  );
}

const Header = () => (
  <header className="flex justify-between items-center py-3 px-6 bg-white shadow-md">
    <UserProfile
      name="Eduarda Alencar"
      role="Paciente"
      profilePic={profilePic}
    />
    <nav className="flex gap-6 text-md font-medium">
      <NavLink text="Página Inicial" />
      <NavLink text="Encontre seu psicólogo" active />
      <NavLink text="Comunidade" />
      <NavLink text="Minhas Consultas" />
    </nav>
  </header>
);

const UserProfile = ({ name, role, profilePic }) => (
  <div className="flex items-center gap-3">
    <img
      loading="lazy"
      src={profilePic}
      className="w-12 h-12 rounded-full"
      alt="User"
    />
    <div>
      <div className="font-medium text-neutral-800">{name}</div>
      <div className="text-sm font-bold text-neutral-700">{role}</div>
    </div>
  </div>
);

const NavLink = ({ text, active }) => (
  <a href="#" className={`flex-auto ${active ? "text-emerald-400 font-extrabold" : ""}`}>{text}</a>
);

const SectionTitle = ({ title, subTitle }) => (
  <div>
    <div className="text-4xl leading-8 text-emerald-400 max-md:max-w-full max-md:text-3xl">{title}</div>
    <div className="mt-2 max-md:max-w-full">{subTitle}</div>
  </div>
);

const SearchSection = ({ title, options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="mt-12">
      <div className="text-2xl leading-8 text-gray-600 italic font-normal max-md:max-w-full">{title}</div>
      <div className="relative mt-5 max-w-full">
        <div
          className="flex items-center justify-between px-6 py-4 rounded-2xl border-2 border-emerald-400 cursor-pointer"
          onClick={toggleDropdown}
        >
          <span>{selectedOption}</span>
          <FaChevronDown />
        </div>
        {isOpen && (
          <ul className="absolute left-0 w-full mt-1 bg-white border-2 border-emerald-400 rounded-2xl max-h-48 overflow-auto z-10">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-6 py-2 cursor-pointer hover:bg-emerald-400 hover:text-white"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const SearchButton = () => (
  <button className="self-start px-8 py-3 mt-8 text-xl leading-8 text-center text-white bg-emerald-400 rounded-2xl max-md:px-4 max-md:mt-8">
    Buscar
  </button>
);

const SupportSection = () => (
  <div className="self-end mt-7 mr-20 text-lg font-extrabold leading-8 text-emerald-400 max-md:mr-2">
    Dúvidas?
    <div className="mt-5 text-lg font-semibold leading-8 text-emerald-400 underline">
      Canal de Suporte
    </div>
  </div>
);

export default AcharPsicologo;
