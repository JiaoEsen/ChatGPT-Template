import 'vue'
declare module 'vue' {
    import { defineComponent } from 'vue'
    const Component: ReturnType<typeof defineComponent>
    export default Component
}

declare module '@kangc/v-md-editor/lib/preview';
declare module '@kangc/v-md-editor/lib/theme/github.js';