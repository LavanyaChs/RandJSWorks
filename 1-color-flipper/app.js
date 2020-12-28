//live-server --port=3000
const colors = ["green","skyblue","brown","violet","gold","antiquewhite","cyan", "red", "rgba(133,122,200)","orange","blue","yellow","pink"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener('click',()=>{
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent = colors[randomNumber];
})
getRandomNumber =()=>Math.floor(Math.random()*colors.length);