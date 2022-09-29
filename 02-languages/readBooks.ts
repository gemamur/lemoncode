type Book = {
    title: string;
    isRead: boolean;
}
const bookRead = (books:Book[], titleToSearch:string):boolean => {
    // Implementation here
    let isread:boolean = true;
    const book = books.find(element => element.title == titleToSearch);
    book?.title ? isread = book.isRead : isread = false;
    return isread;
  }
  
  // Ejemplo:
  var books:Book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];
  
  console.log(bookRead(books, "Devastación")); // true
  console.log(bookRead(books, "Canción de hielo y fuego")); // false
  console.log(bookRead(books, "Los Pilares de la Tierra")); // false