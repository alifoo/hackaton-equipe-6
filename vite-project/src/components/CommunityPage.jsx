import React from "react";
import profilePic from "../assets/images/profile-pic.png";
import post from "../assets/images/post.png";

function CommunityPage() {
  return (
    <div className="flex flex-col pb-12 bg-white border-t-8 border-emerald-400">
      <Header />
      <div className="flex justify-center mt-6 px-8 max-w-screen-xl mx-auto">
        <RecentPosts />
        <MainContent />
      </div>
    </div>
  );
}

const Header = () => (
  <header className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
    <UserProfile
      name="Eduarda Alencar"
      role="Paciente"
      profilePic={profilePic}
    />
    <nav className="flex gap-8 text-lg font-medium">
      <NavLink text="Página Inicial" />
      <NavLink text="Encontre seu psicólogo" />
      <NavLink text="Comunidade" active />
      <NavLink text="Artigos" />
    </nav>
  </header>
);

const UserProfile = ({ name, role, profilePic }) => (
  <div className="flex items-center gap-4">
    <img
      loading="lazy"
      src={profilePic}
      className="w-14 h-14 rounded-full"
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

const RecentPosts = () => (
  <aside className="flex flex-col w-1/4 pr-8">
    <div className="flex flex-col bg-neutral-100 rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-bold leading-9 text-center">Postagens recentes</h2>
      {[
        {
          name: "Luana Silva",
          title: "Enfrentando a Solidão: Construindo Conexões Significativas",
          description: "Como vocês enfrentam a solidão? Quais estratégias ajudam a construir conexões?",
          profilePic: "https://cdn.builder.io/api/v1/image/assets/TEMP/e5f9b81fe33a17c4c63a48ab534113a2cfb198bdfe46f557de7bf31795ad6346?"
        },
        {
          name: "Julia Araújo",
          title: "Autoestima: Estratégias para se Sentir Melhor Consigo Mesmo",
          description: "O que vocês fazem para melhorar a autoestima? Alguma dica para se sentir mais confiante?",
          profilePic: "https://cdn.builder.io/api/v1/image/assets/TEMP/813f0360a01afc313a3bcd135ca1f25bb1af2586740d9cebea6d3efed3c9bb16?"
        },
        {
          name: "Gabriel Nunes",
          title: "Técnicas de Relaxamento para um Sono Melhor",
          description: "Alguém tem dicas de relaxamento para melhorar o sono? O que funciona para vocês?",
          profilePic: "https://cdn.builder.io/api/v1/image/assets/TEMP/76ed099c98625c32ac4fbf79fee4a82db60aad56b5601b433fbb967f1b3f1c6c?"
        },
        {
          name: "Felipe Cardoso",
          title: "A Importância da Terapia na Jornada de Autocuidado",
          description: "Como a terapia ajudou vocês no autocuidado? Compartilhem suas experiências!",
          profilePic: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb5dadfda0ddf48965d3f2cb86900aa5f4bc7dbbd79c9dc3e2ca183cffb7b671?"
        },
        {
          name: "Camila Santos",
          title: "Como Lidar com o Burnout no Trabalho?",
          description: "Quem já enfrentou burnout no trabalho? Como vocês lidaram com isso?",
          profilePic: "https://cdn.builder.io/api/v1/image/assets/TEMP/1163a4e8acc4d71d2802e5a31ececc90f3e16a06f9436c52760bdc1ba82d62fa?"
        },
      ].map((post, index) => (
        <Post key={index} {...post} />
      ))}
      <button className="mt-6 px-4 py-2 text-base font-bold text-white bg-cyan-600 rounded-full shadow-sm">
        Criar postagem
      </button>
      <button className="mt-4 px-4 py-2 text-base font-bold text-white bg-emerald-400 rounded-full shadow-sm">
        Conversar com um profissional
      </button>
    </div>
  </aside>
);

const Post = ({ name, title, description, profilePic }) => (
  <div className="flex flex-col mt-6">
    <div className="flex gap-2 items-start">
      <img
        loading="lazy"
        src={profilePic}
        className="w-10 h-10 rounded-full"
        alt="Profile"
      />
      <div className="flex flex-col">
        <div className="text-base font-medium text-neutral-800">{name}</div>
        <div className="mt-2 text-sm font-bold text-neutral-700">{title}</div>
        <div className="mt-2 text-sm text-neutral-700">{description}</div>
      </div>
    </div>
  </div>
);

const MainContent = () => (
  <main className="flex flex-col w-3/4 pl-8">
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <UserProfile
        name="João Fernando"
        role="Paciente"
        profilePic="https://cdn.builder.io/api/v1/image/assets/TEMP/795d36726574827c1f5712d2ec9d7da968deed47852c17469ed2b8043a2a7364?"
      />
      <h3 className="mt-4 text-3xl font-semibold text-neutral-700">
        Alguém aqui pratica atenção plena? Como isso ajuda vocês a reduzir o estresse?
      </h3>
      <img
        loading="lazy"
        src={post}
        className="w-full mt-4 rounded-lg"
        alt="Main Content"
      />
    </div>
    <div className="flex mt-4 gap-4">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f62001e9bfe569a13e69f7b027e5bf11faabeef7ad5624f8e809f687d6d9071f?" alt="Like" className="w-20 h-20" />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/040963e987cf9674ce01c46659691dbb5032d6abae7a2bf20852a59d56cb2bc9?" alt="Comment" className="w-20 h-20" />
    </div>
    <CommentInput />
    <Comments />
  </main>
);

const Comments = () => (
  <div className="flex flex-col mt-5 gap-5">
    <Comment
      name="Ana Maria"
      time="12 minutos atrás"
      profilePic="https://cdn.builder.io/api/v1/image/assets/TEMP/1cee1759cf4c677b80c2b8cf9ab19e1257980fa88292644cff03ed8632d7da7c?"
      comment="Sim, eu pratico atenção plena todos os dias! Me ajuda muito a me concentrar no presente e a não me preocupar tanto com o futuro. Sinto que meu nível de estresse diminuiu bastante."
    />
    <Comment
      name="Carlos Silva"
      time="34 minutos atrás"
      profilePic="https://cdn.builder.io/api/v1/image/assets/TEMP/e86eca839b44f2af708dbdb41c6dee1a29776807294e37eade2dfe6f9af23a6b?"
      comment="Comecei a praticar recentemente e já noto uma grande diferença. Me sinto mais calmo e menos ansioso. Acho que a chave é a consistência!"
    />
  </div>
);

const Comment = ({ name, time, profilePic, comment }) => (
  <div className="flex flex-col">
    <div className="flex items-center gap-4">
      <img
        loading="lazy"
        src={profilePic}
        className="w-10 h-10 rounded-full"
        alt="Profile"
      />
      <div className="text-sm text-neutral-800">
        <span className="font-medium">{name}</span> - {time}
      </div>
    </div>
    <p className="mt-2 text-sm text-neutral-700">{comment}</p>
  </div>
);

const CommentInput = () => (
  <div className="flex items-center gap-4 mt-6">
    <input
      type="text"
      placeholder="Digite um comentário..."
      className="flex-auto p-4 text-xl border-2 border-emerald-400 rounded-full outline-none"
    />
    <button className="shrink-0 w-10 h-10 text-white rounded-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c6f968c156a8074157778e8d9e635a720700a31672e6a8c6668dd7d139cbae7?"
        alt="Send"
      />
    </button>
  </div>
);

export default CommunityPage;
