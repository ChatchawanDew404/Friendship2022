const Data = [
    {
        fname:"Chatchawan",
        lname:"Ngernthaworn",
        images:"/friend image2022/chat1.jpg"
    },
    {
        fname:"peechanon",
        lname:"Tipsuk",
        images:"/friend image2022/peecha1.jpg"
    },
    {
        fname:"Pipop",
        lname:"Rachawat",
        images:"/friend image2022/pipop1.jpg"
    },
    {
        fname:"Thanapong",
        lname:"Suksabai",
        images:"/friend image2022/thana1.jpg"
    },
    {
        fname:"Panyapon",
        lname:"Phokhiao",
        images:"/friend image2022/panya1.jpg"
    },
    {
        fname:"Phumpanya",
        lname:"Songpraidech",
        images:"/friend image2022/phum2.jpg"
    },
    {
        fname:"Nanmanus",
        lname:"Imprasert",
        images:"/friend image2022/nanma2.jpg"
    },
    {
        fname:"Bunsita",
        lname:"Nithiwatthanabadee",
        images:"/friend image2022/bunsita2.jpg"
    },
    {
        fname:"Benjamas",
        lname:"Noonil",
        images:"/friend image2022/benja1.jpg"
    },
    {
        fname:"Phetlada",
        lname:"Anothairueangrong",
        images:"/friend image2022/plet1.jpg"
    },
    {
        fname:"Ketsaraphorn",
        lname:"Boonpang",
        images:"/friend image2022/ket2.jpg"
    },
    {
        fname:"Pakjira",
        lname:"Chuthahphoi",
        images:"/friend image2022/pak3.jpg"
    },
    {
        fname:"Saranya",
        lname:"Bangnoi",
        images:"/friend image2022/saran1.jpg"
    },
    {
        fname:"Suchada",
        lname:"Keaklangdon",
        images:"/friend image2022/shucha1.jpg"
    },
   
    {
        fname:"Renuka",
        lname:"Sukpradab",
        images:"/friend image2022/ranu2.jpg"
    },
    {
        fname:"Phattharawaree",
        lname:"Buapheng",
        images:"/friend image2022/patta1.jpg"
    },
    {
        fname:"Muntana",
        lname:"Honggamnoed",
        images:"/friend image2022/muntana2.jpg"
    },
    {
        fname:"Napajaree",
        lname:"Sutaronkron",
        images:"/friend image2022/napa3.jpg"
    },
    {
        fname:"Sirinipa",
        lname:"Khemthong",
        images:"/friend image2022/sirinipa1.jpg"
    },
]



let wrapper = document.querySelector('.swiper-wrapper')

let creates = Data.forEach((item) =>{
    let slide = document.createElement('div')
    slide.classList.add('swiper-slide')

let createData = `
<div class="image-box">
<img src="${item.images}" id="img" alt="">
<div class="circle"><span>.</span></div>
</div>
<div class="name">
<h1 id="fname">${item.fname}</h1>
<h1 id="lname">${item.lname}</h1>
</div>
<div class="content">
<p><i class='bx bxs-quote-left'></i> Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Sed nesciunt totam, adipisci deleniti animi natus debitis ratione dignissimos eos
    quaerat</p>
</div>
<div class="social">
<i class='bx bxl-facebook' ></i>
<i class='bx bxl-instagram' ></i>
<i class='bx bxl-twitter' ></i>
</div>
`

slide.innerHTML = createData
wrapper.append(slide)
})





