let addBtn= document.getElementById("add_btn");
addBtn.addEventListener("click",addChapter);
function addChapter(e){
//console.log(e)
let currentBtn=e.currentTarget;
let currentInput=currentBtn.previousElementSibling
console.log(currentInput.value);
let newli=document.createElement('li');
newli.classList.add('list-group-item');
newli.textContent=currentInput.value;
let uiElem=document.getElementById("parentList");
uiElem.append(newli)

}