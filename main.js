let bodyarea=document.getElementById('bodyarea');
let colorinput=document.getElementById('colorinput');
let Colorvaluepara=document.getElementById('Colorvaluepara');
let clickbtn=document.getElementById('clickbtn');

clickbtn.addEventListener("click",function(){
    Colorvaluepara.innerHTML=colorinput.value;
    bodyarea.style.backgroundColor=colorinput.value;
})