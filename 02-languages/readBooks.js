const isBookRead = (books, titleToSearch) => {
    // Implementation here
    
    const book = books.find(element => element.title == titleToSearch);
    if(book?.isRead){
      return book.isRead;
    }else{
      return false;
    }

  }
  
  // Ejemplo:
  var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];
  
  console.log(bookRead(books, "Devastación")); // true
  console.log(bookRead(books, "Canción de hielo y fuego")); // false
  console.log(bookRead(books, "Los Pilares de la Tierra")); // false
