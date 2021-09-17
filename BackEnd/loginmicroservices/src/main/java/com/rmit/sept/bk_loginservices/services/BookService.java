package com.rmit.sept.bk_loginservices.services;

import com.rmit.sept.bk_loginservices.model.Book;
import com.rmit.sept.bk_loginservices.Repositories.BookRepository;
import com.rmit.sept.bk_loginservices.exceptions.IncorrectBookDetailException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public Book saveBook(Book newBook) {
        try {
            newBook.setAuthor(newBook.getAuthor());
            newBook.setTitle(newBook.getTitle());
            newBook.setCategory(newBook.getCategory());
            newBook.setContents(newBook.getContents());
            newBook.setDescription(newBook.getDescription());
            newBook.setPrice(newBook.getPrice());
            newBook.setRating(newBook.getRating());
            newBook.setCoverArt(newBook.getCoverArt());
            newBook.setOwner(newBook.getOwner());

            return bookRepository.save(newBook);
        } catch (Exception e) {
            throw new IncorrectBookDetailException("Incorrect Details");
        }
    }

    
    public List<Book> bookSearch (String search){
        return bookRepository.findByISBNOrTitleOrAuthorOrCategoryContaining(search, search, search, search);
    }

    public List<Book> getAllBooks (){
        return (List<Book>)bookRepository.findAll();
    } 

    public List<Book> topRatingBooks (){
        return bookRepository.findByRating(5);
    }

    public List<Book> bestPriceBooks (){
        return bookRepository.findByPriceLessThanEqual(20);
    }

     
    public List<Book> getBooksOfShopOwner (String id){
        return bookRepository.findByOwner(id);
    }

    public void deleteAll() {
        bookRepository.deleteAll();
    }

    public Object findById(Long id) {
        return null;
    }

}
