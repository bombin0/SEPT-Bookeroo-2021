package com.rmit.sept.bk_loginservices.services;

import com.rmit.sept.bk_loginservices.model.Book;
import com.rmit.sept.bk_loginservices.Repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public Book saveBook(Book newBook) {

        newBook.setAuthor(newBook.getAuthor());
        newBook.setTitle(newBook.getTitle());
        newBook.setCategory(newBook.getCategory());
        newBook.setContents(newBook.getContents());
        newBook.setDescription(newBook.getDescription());
        newBook.setPrice(newBook.getPrice());
        newBook.setRating(newBook.getRating());
        newBook.setCoverArt(newBook.getCoverArt());

        return bookRepository.save(newBook);
    }

    
    public List<Book> bookSearch (String search){
        return bookRepository.findByISBNOrTitleOrAuthorOrCategoryIgnoreCaseContaining(search, search, search, search);
    }

    public List<Book> topRatingBooks (){
        return bookRepository.findByRating(5);
    }

    public List<Book> bestPriceBooks (){
        return bookRepository.findByPriceLessThanEqual(30);
    }

    public Object findById(Long id) {
        return null;
    }

}
