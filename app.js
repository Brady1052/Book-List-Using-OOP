// Book Construtor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor
function UI() {};

//Add book to list
UI.prototype.addBookToList = function(book){
const list = document.getElementById('book-list');
//Create tr Element
const row = document.createElement('tr');
console.log(row)
// Insert Cols
row.innerHTML =`
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href="#" class="delete">X<a></td>
`;

list.appendChild(row);
console.log(row)
};

//Clear Fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
};

//Event Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
    //Get Form Values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value
    console.log(title, author, isbn)
    //Instantiate Book
    const book = new Book (title, author, isbn);
    
    //Instantiate UI
    const ui = new UI();

    //Validate
    if(title === '' || author === '' || isbn === ''){
        alert('Failed')
    }else {
          //Add book to list
    ui.addBookToList(book)

    //Clear Fields
    ui.clearFields();
    }


    //Add book to list
    ui.addBookToList(book)

    //Clear Fields
    ui.clearFields();
    
    
    
    e.preventDefault();
});


    
    