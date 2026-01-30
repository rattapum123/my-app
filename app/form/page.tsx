'use client';
import { useState } from 'react';

function FormPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email && password) {
            console.log('Email:', email);
            console.log('Password:', password);
            setSubmitted(true);
            // Reset form
            setEmail('');
            setPassword('');
            setTimeout(() => setSubmitted(false), 3000);
        }
    };

    return (
        <div className="h-screen">
            <div className="p-5">
                <h1 className="text-3xl text-center">ลงทะเบียนเข้าสู่ระบบ</h1>
                <p className="text-center">กรุณากรอกข้อมูลของคุณ</p>
            </div>
            <div className="flex justify-center">
                <form onSubmit={handleSubmit}>
                    <h2>กรุณาระบุ E-MAIL</h2>
                    <input 
                        type="email" 
                        placeholder="Type here" 
                        className="input" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <h2>กรุณาระบุ รหัสผ่าน</h2>
                    <input 
                        type="password" 
                        placeholder="Type here" 
                        className="input" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <br />
                    <br />
                    <button type="submit" className="btn btn-soft btn-primary">ลงทะเบียน</button>
                    {submitted && <p className="text-center text-green-600 mt-4">ลงทะเบียนสำเร็จ!</p>}
                </form>
            </div>
        </div>
    );
}

export default FormPage;