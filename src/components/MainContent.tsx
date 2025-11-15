import { useTranslation } from "react-i18next"

export default function MainContent() {
  const { t } = useTranslation()

  return (
    <main className="max-w-5xl mx-auto p-4 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">{t("welcome")}</h1>

      <p className="mb-6 text-center">
        Mobile-first, multilingual marketplace for Kurdish fabrics.
      </p>
    </main>
  )
}
