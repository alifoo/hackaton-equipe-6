import React, {useState} from 'react';
import logo from "../assets/images/logo.png";
import {useNavigate} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';
import {register} from '../services/authService';

function RegisterScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [sexo, setSexo] = useState('Não informado');
    const [cpf, setCpf] = useState('');
    const [nascimento, setNascimento] = useState('');
    const {login: authLogin} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const data = await register({ name, email, password, sexo, cpf, nascimento });
            authLogin(data.token);
            navigate('/login');
        } catch (error) {
            console.error('Failed to register', error);
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
                <h2 className="text-4xl font-bold tracking-tight text-center text-cyan-600">
                    Registre-se!
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="w-full max-w-md mt-10 space-y-6">
                        <InputField
                            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/40dccfcec2b3dd9ba37386e199f8164591eba435c6ad5be2c36169eae9a65592?"
                            placeholder="Nome completo"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Não Binario">Não Binario</option>
                            <option value="Não informado">Não informado</option>
                        </select>
                        <InputField
                            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9f29ab093e2717f4fe7308daa150aa35ba9f25d66ec0e8566216772568a3bf75?"
                            placeholder="Número de CPF"
                            type="text"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                        />
                        <InputField
                            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/147fffa88d99bafcdce9b3b338e4112d4df637bd4a3673e60d9c32832dfff8ee?"
                            placeholder="Insira seu email..."
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <InputField
                            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c22cfd7c78bb30c74e1278c5afe055a82692f2dc6877b5c86a48364df97b02bc?"
                            placeholder="Senha"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <InputField
                            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e7763f0ce2614aaeee44787b2b3cac8a3b10dc88de325b154ad47de51e479a9d?"
                            placeholder="Confirme sua senha"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button
                            className="w-full px-8 py-4 text-xl font-bold text-white bg-cyan-600 rounded-full shadow-md">
                            Confirmar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

const InputField = ({iconSrc, placeholder, value, onChange, type}) => (
    <div className="flex items-center bg-zinc-300 rounded-full px-6 py-4">
        <img src={iconSrc} alt="" className="w-6 h-6"/>
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="flex-auto text-lg italic bg-transparent outline-none ml-4"
        />
    </div>
);

export default RegisterScreen;
