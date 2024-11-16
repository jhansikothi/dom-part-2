let z=document.getElementById("hello")
z.style.backgroundColor="pink"
let pchildelement=document.createElement("div")
pchildelement.textContent="hello how are you? "
z.appendChild(pchildelement)
let butterflyimage=document.createElement("img")
butterflyimage.width="200"
butterflyimage.style.backgroundColor="blue"
butterflyimage.style.padding="10px"
butterflyimage.src="https://www.shutterstock.com/image-photo/photo-day-2024-beautiful-butterfly-600nw-2496391053.jpg"
z.append(pchildelement,butterflyimage)


let m=document.getElementById("hii")
m.style.backgroundColor="orange"
let text2=document.createElement("div")
text2.textContent="hello how are you? "
m.appendChild(text2)
let image2=document.createElement("img")
image2.width="200"
image2.style.backgroundColor="blue"
image2.style.padding="10px"
image2.src="https://www.shutterstock.com/image-photo/photo-day-2024-beautiful-butterfly-600nw-2496391053.jpg"
m.append(text2,image2)
m.replaceChild(image2,text2)

let image3=document.createElement("img")
image3.width="200"
image3.style.backgroundColor="black"
image3.src="https://media.gettyimages.com/id/1796422349/photo/mumbai-india-virat-kohli-of-india-celebrates-after-scoring-a-century-overtaking-sachin.jpg?s=612x612&w=gi&k=20&c=3pJUnj2m008TbdqOAICIP4A054v1RcX_l2ibKKC30Yk="
m.replaceChild(image3,image2)

const clonedelem=m.cloneNode(true)
document.body.append(clonedelem)

let image4=document.createElement("img")
image4.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjcXFgH2uoR2cWU0bQHDUXoTka86Y5jeM4Gg&sco")
image4.setAttribute("width","300")
image4.style.backgroundColor="red"
image4.style.padding="30px"
console.log(image4.getAttribute("width"));
document.body.appendChild(image4)

let divtag=document.createElement("div")
divtag.className="container"
divtag.classList.add("jhansi")
divtag.classList.add("ravi")
divtag.classList.add("ram")
console.log(divtag)
divtag.classList.remove("jhansi")
divtag.classList.remove("ravi","ramesh")

image4.addEventListener("click",function(){
    alert("image is clicked")
image4.style.borderRadius="50%"
})

let div=document.querySelector(".one")
console.log(div.firstChild);
console.log(div.firstElementChild);
console.log(div.lastChild)
console.log(div.lastElementChild)