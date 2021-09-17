import axios from "axios";

const BOOK_API_BASE_URL = "http://localhost:8080/api/books";

class bookService {
    getBookById(bookId){
        return axios.get(BOOK_API_BASE_URL + '/updateBook/' + bookId)
    }

    updateBook(book, bookId){
        return axios.put(BOOK_API_BASE_URL + '/updateBook/' + bookId, book);
    }

    updateBookShop(book, bookId){
        return axios.put(BOOK_API_BASE_URL + '/updateBookShop/' + bookId, book);
    }


    deleteBook(bookId){
        return axios.delete(BOOK_API_BASE_URL + '/deleteBook/' + bookId);
    }
}

export default new bookService;