package com.rmit.sept.bk_loginservices.Repositories;

import com.rmit.sept.bk_loginservices.model.Book;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface BookRepository extends CrudRepository<Book, Long>{
    @Override
    Iterable<Book> findAllById(Iterable<Long> iterable);
    List<Book> findByISBNOrTitleOrAuthorIgnoreCaseContaining(String search);
    List<Book> findByRating(int rating);
    List<Book> findByPriceLessThanEqual(int price);
}
