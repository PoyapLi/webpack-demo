import x from "./x.js"
import png from './assets/1.png'

const div =  document.getElementById('app1')
div.innerHTML = `<img src="${png}">`


// 实现懒加载
const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
    const promise = import('./lazy.js')
    // promise.then 前面写成功做什么，后面写失败做什么
    promise.then((module)=>{
        const fn = module.default
        fn()
    },()=>{
        console.log('模块加载错误');
    })
}

div.appendChild(button)