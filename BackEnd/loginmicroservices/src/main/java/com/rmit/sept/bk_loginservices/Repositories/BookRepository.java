package com.rmit.sept.bk_loginservices.Repositories;

import com.rmit.sept.bk_loginservices.model.Book;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface BookRepository extends CrudRepository<Book, Long>{
    @Override

    Iterable<Book> findAllById(Iterable<Long> iterable);
    Iterable<Book> findAll();
    List<Book> findByISBNOrTitleOrAuthorOrCategoryIgnoreCaseContaining(String ISBN, String title, String Author, String Category);
    List<Book> findByRating(int rating);
    List<Book> findByPriceLessThanEqual(int price);
}
