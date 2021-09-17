package com.rmit.sept.bk_loginservices.web;

import com.rmit.sept.bk_loginservices.services.BookService;
import com.rmit.sept.bk_loginservices.Repositories.BookRepository;
import com.rmit.sept.bk_loginservices.exceptions.ResourceNotFoundException;
import com.rmit.sept.bk_loginservices.model.Book;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/books")
public class BookController {
    
    @Autowired
    private BookService bookService;
    @Autowired
    private BookRepository bookRepository;

    @PostMapping("/save")
    public ResponseEntity<Book> createNewBook(@RequestBody Book book){
        Book newBook = bookService.saveBook(book);
        return new ResponseEntity<Book>(newBook, HttpStatus.CREATED);
    }

    @GetMapping("/searchbook/{search}")
    public List<Book> searchBook(@PathVariable String search){
       return bookService.bookSearch(search);
    }

    @GetMapping("/allBooks")
    public Iterable<Book> allBooks(){
       return bookService.getAllBooks();
    }

    @GetMapping("/topRatingBooks")
    public List<Book> topRatedBooks(){
        return bookService.topRatingBooks();
    }

    @GetMapping("/bestPriceBooks")
    public List<Book> bestPriceBooks(){
        return bookService.bestPriceBooks();
    }

    // @GetMapping("/updatePrice/{price, isbn}")
    // public int updatePrice(@PathVariable float price, @PathVariable String ISBN){
    //     return bookService.updatePrice(price, ISBN);
    // }    


    // get book by id
    @GetMapping("/getId/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id) {
        Book book = bookRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Book does not exist with ID: " + id));
        return ResponseEntity.ok(book);
    }

    // update book
    @PutMapping("/updateBook/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable Long id, @RequestBody Book bookInfo){
        Book book = bookRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Book does not exist with ID: " + id));
        if (bookInfo.getAuthor() != ""){
            book.setAuthor(bookInfo.getAuthor());
        }
        if (bookInfo.getTitle() != ""){
            book.setTitle(bookInfo.getTitle());
        }
        if (bookInfo.getISBN() != ""){
            book.setISBN(bookInfo.getISBN());
        }
        if (bookInfo.getDescription() != ""){
            book.setDescription(bookInfo.getDescription());
        }
        if (bookInfo.getCategory() != ""){
            book.setCategory(bookInfo.getCategory());
        }
        if (bookInfo.getPrice() != 0){
            book.setPrice(bookInfo.getPrice());
        }
        
        Book updatedBook = bookRepository.save(book);
        return ResponseEntity.ok(updatedBook);
    }

    // delete book
    @DeleteMapping("/deleteBook/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteBook(@PathVariable Long id){
        Book book = bookRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Book does not exist with ID: " + id));
        bookRepository.delete(book);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    // update book from shop page
    @PutMapping("/updateBookShop/{id}")
    public ResponseEntity<Book> updateBookShop(@PathVariable Long id, @RequestBody Book bookInfo){
        Book book = bookRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Book does not exist with ID: " + id));
        if (bookInfo.getAuthor() != ""){
            book.setAuthor(bookInfo.getAuthor());
        }
        if (bookInfo.getTitle() != ""){
            book.setTitle(bookInfo.getTitle());
        }
        if (bookInfo.getISBN() != ""){
            book.setISBN(bookInfo.getISBN());
        }
        if (bookInfo.getDescription() != ""){
            book.setDescription(bookInfo.getDescription());
        }
        if (bookInfo.getCategory() != ""){
            book.setCategory(bookInfo.getCategory());
        }
        if (bookInfo.getPrice() != 0){
            book.setPrice(bookInfo.getPrice());
        }
        
        Book updatedBook = bookRepository.save(book);
        return ResponseEntity.ok(updatedBook);
    }
}
