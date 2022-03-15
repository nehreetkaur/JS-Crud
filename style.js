let addBtn= document.getElementById("add_btn");
addBtn.addEventListener("click",addChapter);

let uiElem=document.getElementById("parentList");
function addChapter(e){
//console.log(e)
if(uiElem.children[0].className=="empty"){
    uiElem.children[0].remove();
}
let currentBtn=e.currentTarget;
let currentInput=currentBtn.previousElementSibling
let value=currentInput.value;



let newli=document.createElement('li');
//newli.classList.add('list-group-item');
newli.className="list-group-item d-flex justify-content-between"
newli.innerHTML=`<h3 class="flex-grow-1"> ${value}</h3>
<button class="btn btn-warning mx-5  onClick="editText(this)">Edit</button>
<button class="btn btn-danger" onClick="removeText(this)">Remove</button>`

uiElem.append(newli)

}

function removeText(currElem){

    currElem.parentElement.remove();
    let uiElem=document.getElementById("parentList");
    if(uiElem.children.length <=0){
        let msg=document.createElement("h3");
        msg.classList.add("empty")
        msg.textContent="Please new Text to make a list";
        uiElem.append(msg);
    }
}

function editText(elem){
    if(elem.textContent=="Done"){
        elem.textContent="Edit"
        let currentElemText=elem.previousElementSibling.value;
        let currHeading=document.createElement('h3');
        currHeading.className="flex-grow-1";
        currHeading.textContent=currentElemText;
        elem.parentElement.replaceChild(currHeading,elem.previousElementSibling)
    }
    else{
        elem.textContent="Done";
    let currentElemText=elem.previousElementSibling.textContent;
    let inputElem=document.createElement('input');
    inputElem.type="text"
    inputElem.className="form-control"
    inputElem.placeholder="text"
    inputElem.value=currentElemText;
    elem.parentElement.replaceChild(inputElem,elem.previousElementSibling)
    }
}