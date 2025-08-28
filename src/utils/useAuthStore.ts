import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IAuthState {
  theme: "light" | "dark" | null;
  setTheme: (theme: "light" | "dark") => void;
}

export const useAuthStore = create<IAuthState>()(
  persist(
    (set) => ({
      theme: null as "light" | "dark" | null,
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "auth-storage", // Key for local storage
      partialize: (state) => ({
        theme: state.theme,
      }), // Specify which parts of state to persist
    }
  )
);
