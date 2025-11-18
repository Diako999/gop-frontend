import { create } from "zustand"

interface AppState {
  language:"en"|"fa",
  theme : "dark" | "light",
  toggleLanguage: () => void,
  toggleTheme : () => void
}

export const useAppStore = create<AppState>((set)=>({
  language: "en" ,
  theme : 'dark',
  toggleLanguage : ()=>
    set((state) => ({
    language : state.language === 'en' ? 'fa' : 'en'
  })),
  toggleTheme : ()=>
    set((state)=>({
      theme : state.theme === 'dark' ? 'light' : 'dark'
    }))
  

}))
