package com.rmit.sept.bk_loginservices.web;

import com.rmit.sept.bk_loginservices.services.BookService;
import com.rmit.sept.bk_loginservices.model.Book;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/books")
public class BookController {
    
    @Autowired
    private BookService bookService;

    @PostMapping("/save")
    public ResponseEntity<Book> createNewBook(@RequestBody Book book){
        System.out.println(book.getAuthor());
        Book newBook = bookService.saveBook(book);
        return new ResponseEntity<Book>(newBook, HttpStatus.CREATED);
    }

    @GetMapping("/searchbook")
    public List<Book> searchBook(@RequestBody String search){
       return bookService.bookSearch(search);
    }

    @GetMapping("/topRatingBooks")
    public List<Book> topRatedBooks(){
        return bookService.topRatingBooks();
    }

    @GetMapping("/bestPriceBooks")
    public List<Book> bestPriceBooks(){
        return bookService.bestPriceBooks();
    }
}
