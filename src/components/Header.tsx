import { useEffect } from "react"
import { useAppStore } from "../store/useAppStore"
import { useTranslation } from "react-i18next"

function Header() {
    const { language, toggleLanguage } = useAppStore()
    const {theme, toggleTheme} = useAppStore()
    const { t, i18n } = useTranslation()

    useEffect(()=>{
        i18n.changeLanguage(language)
    },[language])
  return (
    <div className={`${theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-800 text-white'}`}>

    <header className="p-4 shadow-sm  sticky top-0 z-20 ">
      <div className={`max-w-5xl mx-auto flex items-center justify-between `}>
        <h1 className="font-bold text-xl">GOP</h1>

        <nav className="flex gap-4 items-center ">
          <span className="hover:underline cursor-pointer">
            {t("shop")}
          </span>

          <button
            onClick={toggleLanguage}
            className="ml-2 px-3 py-2 border rounded"
          >
            {language === "en" ? "KU" : "EN"}
          </button>
           <button
                onClick={toggleTheme}
                className={`ml-2 px-2 py-1 border rounded ${theme === 'light' ? 'bg-white text-gray-900 hover:bg-gray-50 border-gray-300' : 'bg-gray-800 text-white hover:bg-gray-700 border-gray-600'}`}
                >
                {theme === "light" ? "Dark" : "Light"}
           </button>
        </nav>
      </div>
    </header>
    </div>
  )
}

export default Header