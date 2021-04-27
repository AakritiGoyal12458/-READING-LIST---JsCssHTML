function createBook(title, author ,isbn ){
return {title: title, author:author , isbn:isbn};

}
 function clearInputFields(){

    title.value = "";
    author.value = "";
    isbn.value = "";
    
 }
function addBookToTable(book){
const list = document.getElementById("book-list");

const row = document.createElement("tr");


row.innerHTML = `<td>${book.title}</td>
                 <td>${book.author} </td>
                 <td>${book.isbn}</td>
                 <td><a href="#" class="btn btn-danger btn-sm delete" style="background-color: red !important;" id="delete">X</a></td>`;

list.appendChild(row);

}
 
 const title = document.getElementById("title");
 const author = document.getElementById("author");
 const isbn = document.getElementById("isbn");

 const form = document.getElementById("book-form");


form.addEventListener("submit",function(event){
event.preventDefault();



if(title.value === "" || author.value === "" ||isbn.value === ""  ) {
alert("PLEASE FILL EVERYTHING BEFORE SUBMITTING");
} else {
 const data = createBook (title.value, author.value , isbn.value )
 console.log(data);
 addBookToTable(data);
 addBooksLS(data)
}

clearInputFields();

 });


 document.getElementById("book-list").addEventListener("click",function(e){
   if (e.target.id === "delete"){

      e.target.parentElement.parentElement.remove();

removeBookLS(e.target.parentElement.previousElementSibling.textContent);

   }
 } );



 document.addEventListener("DOMContentLoaded", displayBooks);

function displayBooks(){

const books = getBooksLS();
for (let i=0; i < books.length ; i++){
   addBookToTable(books[i]);
}

}




 function getBooksLS(){
    let books;
    if(localStorage.getItem("books") === null){
      books = [];
   } else {
    books = JSON.parse(localStorage.getItem("books"));
   }
   return books;
   
 }

function addBooksLS(book){

   const books = getBooksLS();
    // books = [];

books.push(book);
localStorage.setItem("books",JSON.stringify(books));

}


function removeBookLS(isbn) {

const books = getBooksLS();

for ( let i=0; i< books.length ; i++){
if (books[i].isbn === isbn){
   books.splice(i,1);

}

} 
 localStorage.setItem("books",JSON.stringify(books));

}
