const article = document.querySelector('article')
const header = document.querySelector('header')
const nav_links = document.querySelector('.nav-links')
const article_h1 = document.querySelector('article h1')
const pixel_number = document.querySelector('.pixel_number')
const close_icon = document.querySelector('.close-icon')
const open_icon = document.querySelector('.open-icon')
const header_position = document.querySelector('.header_position')
const color_text = Array.from(document.querySelectorAll('.color_text'))
const moviing = document.querySelector('.moviing')

const hideMenu = () => {
    nav_links.style.cssText = `right:-200px;`
}
close_icon.addEventListener('click',hideMenu)

const showMenu = () => {
    nav_links.style.cssText = `right:0;`
}
open_icon.addEventListener('click',showMenu)


// color_text.forEach(color_loop=>{
//     const pixells = window.scrollY;
//     if(pixells > 400){
//         color_loop.style.cssText = `color:white`
//     }
// })
// document.addEventListener('scroll',color_loop)


const Scroll_header = ()=>{
    const pixells = window.scrollY
    pixel_number.innerHTML = pixells;
    if(pixells > 10){
        moviing.style.cssText =`position:absolute;top:-50%`
    }
    else{
         mov_res.style.cssText =`position:absolute;top:15%;left:0;width:100%;height:70px;padding-top:40px;`
    }
    if(pixells > 5){
        header_position.style.cssText = `position:fixed;width:100%;z-index:2;`
        color_text.forEach( color_loop=>{
            const pixells = window.scrollY;
            if(pixells > 400){
                color_loop.style.cssText = `color:white;text-transform:capitalize;`

            }
            else{
                color_loop.style.cssText = `color:black`
            }
        })
    }
    if(pixells > 400){
        article.style.cssText = `display:none`
        header.style.cssText = `position:fixed;top:0;border-bottom:none;background-color:blue;`
        pixel_number.classList.add('border_style')
        // color_text.style.cssText = `color:white`
    }
    else{
        article.style.cssText =`display:flex;`
        header.style.cssText = `position:unset;top:0;`
        pixel_number.classList.remove('border_style')
    }
}
document.addEventListener('scroll',Scroll_header)

