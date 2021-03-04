//Get all inputs
function myFunction(){
    let ul = document.getElementById("list");
    let addList = document.getElementById("addlist");
    let li = document.createElement('li');
    li.setAttribute("id", addList.value);
    li.setAttribute("onclick","remove(this)");

    li.appendChild(document.createTextNode(addList.value));
    ul.appendChild(li);
}

function remove(element) {
    element.style.setProperty("text-decoration", "line-through");
    setTimeout(function() {element.remove()}, 1000);
    
}
