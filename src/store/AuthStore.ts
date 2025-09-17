import { create } from 'zustand';

type AuthState = {
  user: null | { email: string; role: string; name: string };
  login: (email: string, role?: string, name?: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (email, role = 'user',name='user') =>
    set({ user: { email, role, name } }),
  logout: () => set({ user: null }),
}));
