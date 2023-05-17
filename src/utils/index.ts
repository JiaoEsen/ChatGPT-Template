/**
 * 获取本地图
 * @param name // 文件名 如 doc.png
 * @returns {*|string}
 */
export const getAssetsImages = (name: string) => {
    return new URL(`/src/assets/images/${name}`, import.meta.url).href;
}
