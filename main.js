const btn = document.getElementById('changebg');
const sentence = document.getElementById("colorcode");
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let color = 5;
btn.addEventListener("click", () =>{
    for(let i=0; i < 6; i++){
        color = color + hex[Math.trunc(Math.random() * hex.length)];
    }
    sentence.textContent = `Color Code is : #${color}`;
    document.body.style.backgroundColor = `#${color}`;
    color = '';
});