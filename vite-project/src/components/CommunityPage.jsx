import React, { useState } from "react";
import profilePic from "../assets/images/profile-pic.png";
import { FaChevronDown, FaStar } from "react-icons/fa";
import med1 from "../assets/images/med1.png";
import med2 from "../assets/images/med2.png";

function AcharPsicologoPart2() {
  return (
    <div className="flex flex-col pb-8 bg-white border-t-8 border-emerald-400">
      <Header />
      <div className="flex flex-col px-8 mt-10 w-full text-lg font-bold leading-8 text-black max-md:px-5 max-md:mt-8 max-md:max-w-full">
        <SectionTitle title="Encontre seu Psicólogo" subTitle="Comece agora seu caminho para o bem-estar mental online." />
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="flex-grow">
            <ProfileCard
              name="Dr. Marcelo Oliveira"
              rating={4}
              description="Tenho 26 anos, sendo 3 de formação. Atendo pela abordagem Cognitivo-Comportamental, com foco no tratamento de ansiedade, depressão e autoconhecimento, além de possuir experiência com o público LGBTQIAP+."
              approach="Terapia Cognitivo Comportamental - TCC"
              imgSrc={med1}
              availableTimes={[
                { day: "Segunda", times: ["15:00", "16:00"] },
                { day: "Quarta", times: ["14:00", "17:00"] },
                { day: "Quinta", times: ["15:30", "18:00"] },
              ]}
            />
            <ProfileCard
              name="Dra. Mariana Fernandes"
              rating={5}
              description="Sou Psicóloga formada desde 2016, especialista em Terapia Cognitiva Comportamental (TCC), tenho experiências em diversas demandas, tais como ansiedade, depressão, insegurança, autoestima, entre outros..."
              approach="Terapia Cognitivo Comportamental - TCC"
              imgSrc={med2}
              availableTimes={[
                { day: "Segunda", times: ["15:00", "16:00"] },
                { day: "Quarta", times: ["14:00", "17:00"] },
                { day: "Quinta", times: ["15:30", "18:00"] },
              ]}
            />
          </div>
          <div className="w-full lg:w-1/3 lg:ml-8">
            <SearchSection title="Especialidades" options={["Ansiedade", "Depressão", "TDAH", "TOC", "Estresse", "Transtorno Bipolar", "Esquizofrenia", "Autismo", "Fobia", "Transtorno de Personalidade"]} />
            <SearchSection title="Abordagens" options={["Psicanálise", "Humanista", "TCC", "Gestalt", "Sistêmica"]} />
            <SearchSection title="Região" options={["Porto Alegre", "Caxias do Sul", "Pelotas", "Santa Maria", "Gravataí", "Viamão", "Novo Hamburgo", "São Leopoldo", "Rio Grande", "Alvorada"]} />
            <SearchButton />
            <SupportSection />
          </div>
        </div>
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

const ProfileCard = ({ name, rating, description, approach, imgSrc, availableTimes }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col px-6 py-4 mt-8 rounded-2xl border border-emerald-400 max-md:px-4 max-md:mt-6">
      <div className="flex items-center">
        <img loading="lazy" src={imgSrc} className="w-24 h-24 rounded-full" alt="Profile" />
        <div className="ml-4">
          <div className="text-xl font-bold text-emerald-400">{name}</div>
          <div className="flex items-center mt-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={index}
                className={`w-4 h-4 ${index < rating ? "text-emerald-400" : "text-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 text-lg font-semibold text-black">Abordagem: {approach}</div>
      <div className="mt-2 text-base text-black">{description}</div>
      <button 
        className="self-start px-6 py-2 mt-4 text-base leading-7 text-center text-white bg-emerald-400 rounded-2xl"
        onClick={() => setExpanded(!expanded)}
      >
        Saiba Mais
      </button>
      {expanded && <ProfileDetails availableTimes={availableTimes} />}
    </div>
  );
};

const ProfileDetails = ({ availableTimes }) => (
  <div className="flex flex-col px-5 mt-6 text-xl font-bold leading-9 max-w-[474px]">
    <div className="w-full text-emerald-400">
      Datas e horarios disponiveis
    </div>
    {availableTimes.map((schedule, index) => (
      <div className="flex gap-5 mt-4 text-center whitespace-nowrap" key={index}>
        <div className="justify-center px-8 py-4 text-white bg-emerald-400 rounded-2xl">
          {schedule.day}
        </div>
        <div className="flex flex-auto gap-2.5 text-emerald-400">
          {schedule.times.map((time, idx) => (
            <div key={idx} className="justify-center px-12 py-5 bg-white rounded-2xl border-solid border-[3px] border-stone-300">
              {time}
            </div>
          ))}
        </div>
      </div>
    ))}
    <button className="self-end px-6 py-2 mt-8 text-base leading-7 text-center text-white bg-emerald-400 rounded-2xl">
      Entre em Contato
    </button>
  </div>
);

const SearchSection = ({ title, options }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="mt-8">
      <div className="text-xl italic font-normal leading-7 text-gray-600">{title}</div>
      <div className="relative mt-4">
        <div
          className="flex justify-between items-center px-4 py-2 border-2 border-emerald-400 rounded-2xl cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {selectedOption}
          <FaChevronDown className="w-4 h-4 text-gray-500" />
        </div>
        {dropdownOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
            {options.map((option, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  setSelectedOption(option);
                  setDropdownOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const SearchButton = () => (
  <button className="self-start px-6 py-2 mt-8 text-base leading-7 text-center text-white bg-emerald-400 rounded-2xl max-md:px-4 max-md:mt-8">
    Buscar
  </button>
);

const SupportSection = () => (
  <div className="self-end mt-7 mr-20 text-lg font-extrabold leading-7 text-emerald-400 max-md:mr-2">
    Dúvidas?
    <div className="mt-5 text-lg font-semibold leading-7 text-emerald-400 underline">
      Canal de Suporte
    </div>
  </div>
);

export default AcharPsicologoPart2;
