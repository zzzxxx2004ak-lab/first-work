function openMenu(id){

document.querySelectorAll(".menu").forEach(m=>{
m.style.display = "none";
});

let el = document.getElementById(id);
if(el){
el.style.display = "block";
window.scrollTo(0,0);
}

}

function back(){
document.querySelectorAll(".menu").forEach(m=>{
m.style.display = "none";
});
}