import { useState, useEffect } from 'react'
import { useAppStore } from "./store/useAppStore"
import { useTranslation } from "react-i18next"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {
  const { language, toggleLanguage } = useAppStore()
  const { t, i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language, i18n])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">{t("welcome")}</h1>
      <button
        onClick={toggleLanguage}
        className="px-4 py-2 border rounded bg-gray shadow"
      >
        Switch to {language === "en" ? "Kurdish" : "English"}
      </button>
    </div>
  );
}

export default App;
