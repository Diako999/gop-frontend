import { create } from "zustand"

export const useAppStore = create((set) => ({
  language: "en",
  toggleLanguage: () => set((state) => ({
    language: state.language === "en" ? "ku" : "en"
  })),
}))
