var bookIsRead = function (books, titleToSearch) {
    
    var isread = true;
    var book = books.find(function (element) { return element.title == titleToSearch; });
    (book === null || book === void 0 ? void 0 : book.title) ? isread = book.isRead : isread = false;
    return isread;
};
// Ejemplo:
var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
console.log(bookIsRead(books, "Devastación")); // true
console.log(bookIsRead(books, "Canción de hielo y fuego")); // false
console.log(bookIsRead(books, "Los Pilares de la Tierra")); // false
