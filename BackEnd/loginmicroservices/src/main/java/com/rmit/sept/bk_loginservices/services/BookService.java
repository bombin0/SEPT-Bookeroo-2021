package com.rmit.sept.bk_loginservices.services;

import com.rmit.sept.bk_loginservices.model.Book;
import com.rmit.sept.bk_loginservices.Repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public Book saveBook(Book newBook){
        
            newBook.setAuthor(newBook.getAuthor());
            newBook.setTitle(newBook.getTitle());
            newBook.setContents(newBook.getContents());
            newBook.setDescription(newBook.getDescription());
            newBook.setPrice(newBook.getPrice());
            newBook.setRating(newBook.getRating());
            newBook.setCoverArt(newBook.getCoverArt());

            return bookRepository.save(newBook);

    }
}
