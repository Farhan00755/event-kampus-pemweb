import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LogIn() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState({ text: '', type: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formData;

        if (isLogin) {
            // Proses login
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                // Simpan data user yang login
                localStorage.setItem('currentUser', JSON.stringify(user));
                setMessage({ text: 'Login berhasil!', type: 'success' });
                navigate('/'); // Redirect ke halaman utama
            } else {
                setMessage({ text: 'Email atau password salah!', type: 'error' });
            }
        } else {
            // Proses registrasi
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            
            if (users.some(u => u.email === email)) {
                setMessage({ text: 'Email sudah terdaftar!', type: 'error' });
                return;
            }

            const newUser = { 
                id: Date.now(), 
                email, 
                password, 
                createdAt: new Date().toISOString() 
            };
            
            localStorage.setItem('users', JSON.stringify([...users, newUser]));
            setMessage({ text: 'Registrasi berhasil! Silakan login.', type: 'success' });
            setIsLogin(true);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-xl shadow-2xl">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                        {isLogin ? 'Masuk ke Akun Anda' : 'Register akun Anda'}
                    </h2>
                </div>
                
                {message.text && (
                    <div className={`rounded-md p-4 ${message.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                        {message.text}
                    </div>
                )}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <input
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Alamat Email"
                            />
                        </div>
                        <div>
                            <input
                                name="password"
                                type="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Kata Sandi"
                                minLength="6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                        >
                            {isLogin ? 'Masuk' : 'Daftar'}
                        </button>
                    </div>
                </form>

                <div className="text-center">
                    <button
                        onClick={() => {
                            setIsLogin(!isLogin);
                            setMessage({ text: '', type: '' });
                        }}
                        className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                    >
                        {isLogin 
                            ? 'Belum punya akun? Register disini' 
                            : 'Sudah punya akun? Masuk disini'}
                    </button>
                </div>
            </div>
        </div>
    );
}