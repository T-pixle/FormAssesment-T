let todo = "";
const todoField = document.querySelector("#todoField");
const sectionTag = document.querySelector("section");

document.querySelector("form").addEventListener("submit", function(event){
    console.log("submit")
    event.preventDefault();
    todo = todoField.value;
    var paragraph = document.createElement("li")
    paragraph.innerText = todo
    sectionTag.appendChild(paragraph);
});
