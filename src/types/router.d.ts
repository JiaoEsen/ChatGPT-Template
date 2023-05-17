import 'vue-router';

declare module 'vue-router' {
    interface RouteMeta {
        noCache?: boolean; // 是否需要缓存 keep-alive
    }
}