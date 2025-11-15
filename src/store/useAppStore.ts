import { create } from "zustand"

interface AppState {
  language:"en"|"ku",
  theme : "dark" | "light",
  toggleLanguage: () => void,
  toggleTheme : () => void
}

export const useAppStore = create<AppState>((set)=>({
  language: "en" ,
  theme : 'dark',
  toggleLanguage : ()=>
    set((state) => ({
    language : state.language === 'en' ? 'ku' : 'en'
  })),
  toggleTheme : ()=>
    set((state)=>({
      theme : state.theme === 'dark' ? 'light' : 'dark'
    }))
  

}))
