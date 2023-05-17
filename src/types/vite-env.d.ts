/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
declare module '@kangc/v-md-editor/lib/preview';
declare module '@kangc/v-md-editor/lib/theme/github.js';