let imgs = document.querySelectorAll('.success .row .mini-img img')
let showImg = document.querySelector('#showImg')
console.log(showImg)




imgs.forEach(img =>{
    img.addEventListener('click', (event)=>{
        let imgSrc = event.target.src
        
        showImg.src = imgSrc
    })
})