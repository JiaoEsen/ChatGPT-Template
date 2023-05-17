import lottie from 'lottie-web'
 
export const jsonAnimation = (dom: string = '', jsonFile: any) => {
  lottie.loadAnimation({
    container: document.querySelector(dom) as Element,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: jsonFile
  })
}