let addBtn= document.getElementById("add_btn");
addBtn.addEventListener("click",addChapter);
function addChapter(e){
//console.log(e)
let currentBtn=e.currentTarget;
let currentInput=currentBtn.previousElementSibling
console.log(currentInput.value)
}