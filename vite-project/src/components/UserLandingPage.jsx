import React from "react";
import logo from "../assets/images/logo.png"; // Adjust this path if needed
import profilePic from "../assets/images/profile-pic.png"; // Adjust this path if needed

function UserLandingPage() {
  return (
    <div className="flex flex-col pb-20 bg-white">
      <header className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
        <div className="flex items-center gap-4">
          <img
            loading="lazy"
            src={profilePic}
            className="w-14 h-14 rounded-full"
            alt="User"
          />
          <div>
            <div className="font-medium text-neutral-800">Eduarda Alencar</div>
            <div className="text-sm font-bold text-neutral-700">Paciente</div>
          </div>
        </div>
        <nav className="flex gap-8 text-lg font-medium">
          <a href="#" className="text-emerald-400 font-extrabold">Página Inicial</a>
          <a href="#">Encontre seu psicólogo</a>
          <a href="#">Comunidade</a>
          <a href="#">Artigos</a>
        </nav>
      </header>

      <div className="flex justify-center mt-6 px-8 max-w-screen-xl mx-auto">
        <div className="flex flex-col w-2/3 pr-8">
          <div className="flex items-center bg-gradient-to-b from-[#338AA6] to-[#3ABAA9] text-white rounded-xl p-8 shadow-lg">
            <img
              loading="lazy"
              src={logo}
              className="w-16 h-16 mr-6"
              alt="Logo"
            />
            <div>
              <h1 className="text-3xl font-extrabold">Psicou</h1>
              <p className="text-lg">Seja bem vindo de volta!</p>
            </div>
          </div>

          <div className="bg-white border border-emerald-400 rounded-xl mt-6 p-8 shadow-md">
            <h2 className="text-2xl font-bold text-cyan-700">COMO FUNCIONA?</h2>
            <p className="mt-4 text-lg">
              Acesse a aba <span className="font-extrabold text-cyan-600">"Encontre seu Psicólogo"</span> para escolher o profissional que melhor atenda às suas necessidades. Você pode selecionar seu psicólogo preferido com base na disponibilidade de horários e dias da semana. Escolha entre as opções de chamada de voz, vídeo ou chat para a sua consulta.
            </p>

            <h2 className="text-2xl font-bold text-cyan-700 mt-10">ABA COMUNIDADE</h2>
            <p className="mt-4 text-lg">
              A aba <span className="font-bold text-cyan-700">"Comunidade"</span> do Psicou é um espaço acolhedor onde você pode participar de fóruns de discussão, grupos de suporte sobre saúde mental. Acesse recursos educacionais, participe de sessões e construa conexões significativas com outros membros da comunidade, tudo moderado para garantir um ambiente respeitoso e positivo.
            </p>
          </div>
        </div>

        <aside className="w-1/3 pl-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-extrabold text-emerald-400">FIQUE DE OLHO NAS SUAS CONSULTAS</h2>
            <div className="mt-6">
              <div className="text-lg font-black">May 2023</div>
              <div className="flex justify-between mt-2">
                <button>&lt;</button>
                <button>&gt;</button>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center mt-4 text-sm font-semibold text-black">
                <div>Mo</div>
                <div>Tu</div>
                <div>We</div>
                <div>Th</div>
                <div>Fr</div>
                <div>Sa</div>
                <div>Su</div>
                {/* Add the rest of the days */}
                {[...Array(31)].map((_, i) => (
                  <div key={i} className={`p-2 rounded-full ${i + 1 === 18 ? 'bg-emerald-400 text-white' : 'bg-gray-100'}`}>
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 text-emerald-400">
            <h2 className="text-xl font-extrabold">Dúvidas?</h2>
            <a href="#" className="text-lg font-semibold underline mt-2 block">Canal de Suporte</a>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default UserLandingPage;