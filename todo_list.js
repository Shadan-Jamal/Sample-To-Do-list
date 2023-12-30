const input=document.querySelector(".input-box");  //queryselector is used to select an html element
const button=document.querySelector(".add-button");  //queryselector is used to select and html element
const todolist=document.querySelector(".todo-list");  //queryselector is used to select and html element

button.addEventListener("click",addtodo);

todolist.addEventListener("click",deletetodo);

function addtodo(eve_nt){   /*generating elements dynamically by users*/
    eve_nt.preventDefault();

    const tododiv=document.createElement("div"); //will be appended to todolist in line 22
    tododiv.classList.add("todo-container");  
     //class list is a property of the div which holds multiple classes

    //all the three following divs will be pushed to tododiv
    const todoitem=document.createElement("li");
    todoitem.classList.add("todo-item");
    todoitem.innerText = input.value;  //read as a string
    tododiv.appendChild(todoitem);

    const deletebutton=document.createElement("button");
    deletebutton.classList.add("delete-btn");
    deletebutton.innerHTML = '<i class="bi bi-trash2"></i>';  //read as an HTML element
    tododiv.appendChild(deletebutton);

    const completebutton=document.createElement("button");
    completebutton.classList.add("complete-btn");
    completebutton.innerHTML = '<i class="bi bi-check2-square"></i>';
    tododiv.appendChild(completebutton);
    
    todolist.appendChild(tododiv);
    input.value = "";   //to make the textbox empty after entering a list item

}

// === is a comparison operator for JS, used to check both the data type and value

function deletetodo(eve_nt){
    console.log(eve_nt.target);
    //grabs whatever element we click, check in the console using inspect
    const item = eve_nt.target;

    if(item.classList[0]==="delete-btn"){   //to delete a list item after pressing delete button
        const delItem=item.parentElement;
        console.log(delItem);
        delItem.remove();
    }

    if(item.classList[0]==="complete-btn"){
        const compItem=item.parentElement;
        compItem.classList.toggle("Completed")
    }
}
