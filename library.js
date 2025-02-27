const entry = document.querySelector(".newBook");
const addBook = document.querySelector(".addBook");

function entryInfo(){
  const inputInfo = document.querySelector("#newBookForm");
  inputInfo.style.display = "block";
}

entry.addEventListener("click", entryInfo);

addBook.addEventListener("click", function(event){
      event.preventDefault();
})

let library = [];

function createCard(Title, Author, numberPages, status){
    const cardContainer = document.querySelector(".cards");
    cardContainer.classList.add("infoCardContain");
    const card = document.createElement("div");
    card.classList.add("infoCard");
    const headTitle = document.createElement("h3");
    headTitle.style.display = "inline-block";
    headTitle.textContent = Title;
    card.appendChild(headTitle);

    const writerName = document.createElement("p");
    writerName.textContent = Author;
    card.appendChild(writerName);

    const pages = document.createElement("p");
    pages.textContent = numberPages;
    card.appendChild(pages);

    const statusRead = document.createElement("p");
    statusRead.textContent = status;
    card.appendChild(statusRead);

    cardContainer.appendChild(card);
}
let i = 0;

function clearInputs(inputs){
    for(let input of inputs){
          if(input.type === "checkbox"){
            input.checked = false;
          }
          else if(input.type === "submit"){
            continue;
          }
          else{
            input.value = "";
          }
    }
}
function saveEntry(){
    let inputs = document.querySelectorAll("input");
    let bookTitle = inputs[0].value
    let numPages = inputs[1].value;
    let author = inputs[2].value;
    let isRead = inputs[3].checked;
    let status = "Not Read";
    if(isRead){
        status = "Read";
    }
    for(let i =0; i<3; i++){
        if(inputs[i].value === ""){
            alert("Add proper info geez");
            clearInputs(inputs);
            inputs[0].focus();
            return;
        }
    }
    let book = {
        Title: bookTitle,
        Number: numPages,
        Author: author,
        Status: status,
    }
    book.serialNumber = ++i;
    library.push(book);
    console.log(library);
    createCard(book.Title, book.Author, book.Number, book.Status);
    clearInputs(inputs);
    inputs[0].focus();
}

addBook.addEventListener("click", saveEntry);

