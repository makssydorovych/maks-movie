import Input from "@/components/input";
import {useCallback, useState} from "react";
import axios from "axios";

const Auth = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useState('login')
    const toggleAuth = useCallback(() => {
        setAuth((currentAuth) => currentAuth === 'login' ? 'register' : 'login')
    }, [])
    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password
            })
        } catch (error) {
            console.log(error);
        }
    }, [])
    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.jpg" alt="Logo" className="h-12"/>
                </nav>
                <div className="flex justify-center">
                    <div
                        className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl  mb-8 font-semibold">
                            {auth === 'login' ? 'Sign in' : 'Create an account'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {auth === 'register' && (
                                <Input
                                    label="Username"
                                    onChange={(e) => setName(e.target.value)}
                                    id="email"
                                    value={name}
                                />)}
                            <Input
                                label="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                type="email"
                                value={email}
                            />
                            <Input
                                label="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                type="password"
                                value={password}
                            />
                            <button
                                className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                                {auth === 'login' ? 'Login' : 'Sign up'}
                            </button>
                            <p className="text-neutral-500 mt-12">
                                {auth === 'login' ? 'First time here?' : 'Already have an account?'}
                                <span onClick={toggleAuth} className="text-white ml-1 hover:underline cursor-pointer">
                                    {auth === 'login' ? 'Register account' : 'Login'}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Auth;