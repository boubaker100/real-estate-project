'use client';
import { useRouter } from 'next/navigation';


export function useAuth() {
const router = useRouter();
const login = (token: string) => {
localStorage.setItem('admin_token', token);
router.push('/admin');
};
const logout = () => {
localStorage.removeItem('admin_token');
router.push('/admin/login');
};
const isAuthed = () => !!(typeof window !== 'undefined' && localStorage.getItem('admin_token'));
return { login, logout, isAuthed };
}