const box = document.querySelector('.box')

const createRipple =(e)=>{
    let ripple =document.createElement('span')
    let x = e.clientX
    let y=e.clientY
    ripple.style.left = x+'px'
    ripple.style.top = y+'px'
    box.appendChild(ripple)
    console.log(x,y)
    setTimeout(() => {
        ripple.remove()
    },5000)
}
box.addEventListener('click',createRipple)