/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL?: string
  // dodaj tukaj svoje spremenljivke, npr:
  // readonly VITE_SOMETHING: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
