package com.rmit.sept.bk_loginservices.web;

import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.rmit.sept.bk_loginservices.services.BookService;
import com.rmit.sept.bk_loginservices.exceptions.IncorrectBookDetailException;
import com.rmit.sept.bk_loginservices.model.Book;
import org.springframework.test.annotation.Rollback;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.Assert.*;

/**
 * This class tests for book related functions that are defined in the book service class.
 */
@SpringBootTest
public class BookControllerTests {

    @Autowired
	private BookService bookService;

    /*
    * Tests for a save book of a book with correct details
    */
    @Test
	@Rollback(value = true)
    public void saveBookCorrectDetails() {
        bookService.deleteAll();
        Book book = new Book("It Ends With Us", "Colleen Hoover", "Teen", 7, 5, "zara@zara.com", "ABC123");
        bookService.saveBook(book);
        assertEquals(1, bookService.getAllBooks().size());
    }

    /*
    * Tests for a save book of a book with isbn that already exists for another book
    */
    @Test
	@Rollback(value = true)
    public void saveBookWithPreexistingISBN() throws IncorrectBookDetailException{
        bookService.deleteAll();
        Book book = new Book("It Ends With Us", "Colleen Hoover", "Teen", 7, 5, "zara@zara.com", "ABC123");
        bookService.saveBook(book);
        Book book1 = new Book("It Ends With Us", "Colleen Hoover", "Teen", 7, 5, "zara@zara.com", "ABC123");
        Assertions.assertThrows(IncorrectBookDetailException.class, () -> {
            bookService.saveBook(book1);
        });
    }

    /*
    * Tests for the retrive all books function in book service
    */
    @Test
	@Rollback(value = true)
    public void retrieveAllBooks() {
        bookService.deleteAll();
        Book book1 = new Book("It Ends With Us", "Colleen Hoover", "Teen", 7, 5, "zara@zara.com", "ABC123");
        bookService.saveBook(book1);
        assertEquals(1, bookService.getAllBooks().size());
        Book book2 = new Book("The Girl on the Train", "Paula Hawkins", "Psychological Thriller", 10, 5, "sneha@sneha.com", "DEF123");
        bookService.saveBook(book2);
        assertEquals(2, bookService.getAllBooks().size());
        Book book3 = new Book("Sharp Objects", "Gillian Flynn", "Thriller", 6, 5, "zara@zara.com", "GHI123");
        bookService.saveBook(book3);
        assertEquals(3, bookService.getAllBooks().size());
    }

    /*
    * Tests for retrieve books function when there is no book in the db
    */
    @Test
	@Rollback(value = true)
    public void retrieveAllBooksWhenDBIsEmpty() {
        bookService.deleteAll();
        assertEquals(0, bookService.getAllBooks().size());
    }

    /*
    * Tests for retrieve books function with the filter of top rated books (books with rating = 5)
    */
    @Test
	@Rollback(value = true)
    public void retrieveAllBooks_TopRated() {
        bookService.deleteAll();
        Book book1 = new Book("It Ends With Us", "Colleen Hoover", "Teen", 7, 4, "zara@zara.com", "ABC123");
        bookService.saveBook(book1);
        Book book2 = new Book("The Girl on the Train", "Paula Hawkins", "Psychological Thriller", 10, 5, "sneha@sneha.com", "DEF123");
        bookService.saveBook(book2);
        Book book3 = new Book("Sharp Objects", "Gillian Flynn", "Thriller", 6, 5, "zara@zara.com", "GHI123");
        bookService.saveBook(book3);
        assertEquals(2, bookService.topRatingBooks().size());
    }

    /*
    * Tests for retrieve books function with the filter of cheap books (books with price less or equal to 20)
    */
    @Test
	@Rollback(value = true)
    public void retrieveAllBooks_LessThan20Dollars() {
        bookService.deleteAll();
        Book book = new Book("Harry Potter", "J. K. Rowling", "Fiction", 25, 5, "vin@vin.com", "GIH123");
        bookService.saveBook(book);
        Book book1 = new Book("It Ends With Us", "Colleen Hoover", "Teen", 7, 4, "zara@zara.com", "ABC123");
        bookService.saveBook(book1);
        Book book2 = new Book("The Girl on the Train", "Paula Hawkins", "Psychological Thriller", 10, 5, "sneha@sneha.com", "DEF123");
        bookService.saveBook(book2);
        Book book3 = new Book("Sharp Objects", "Gillian Flynn", "Thriller", 6, 5, "zara@zara.com", "GHI123");
        bookService.saveBook(book3);
        Book book4 = new Book("The Kite Runner", "Khaled Hosseini", "Drama", 40, 5, "sneha@sneha.com", "HIK123");
        bookService.saveBook(book4);
        assertEquals(3, bookService.bestPriceBooks().size());
    }

    /*
    * Tests search functionality by ISBN
    */
    @Test
	@Rollback(value = true)
    public void FindByISBN() {
        bookService.deleteAll();
        Book book = new Book("Harry Potter", "J. K. Rowling", "Fiction", 25, 5, "vin@vin.com", "GIH123");
        bookService.saveBook(book);
        Book book1 = new Book("It Ends With Us", "Colleen Hoover", "Teen", 7, 4, "zara@zara.com", "ABC123");
        bookService.saveBook(book1);
        Book book2 = new Book("The Girl on the Train", "Paula Hawkins", "Psychological Thriller", 10, 5, "sneha@sneha.com", "DEF123");
        bookService.saveBook(book2);
        assertEquals(1, bookService.bookSearch("ABC123").size());
    }

     /*
    * Tests search functionality by Author
    */
    @Test
	@Rollback(value = true)
    public void FindByAuthor() {
        bookService.deleteAll();
        Book book = new Book("Harry Potter1", "J. K. Rowling", "Fiction", 25, 5, "vin@vin.com", "GIH123");
        bookService.saveBook(book);
        Book book1 = new Book("It Ends With Us", "Colleen Hoover", "Teen", 7, 4, "zara@zara.com", "ABC123");
        bookService.saveBook(book1);
        Book book2 = new Book("Harry Potter2", "J. K. Rowling", "Fiction", 20, 5, "sneha@sneha.com", "DEF123");
        bookService.saveBook(book2);
        assertEquals(2, bookService.bookSearch("J. K. Rowling").size());
    }

    /*
    * Tests search functionality by title
    */
    @Test
	@Rollback(value = true)
    public void FindByTitle() {
        bookService.deleteAll();
        Book book = new Book("Harry Potter1", "J. K. Rowling", "Fiction", 25, 5, "vin@vin.com", "GIH123");
        bookService.saveBook(book);
        Book book1 = new Book("It Ends With Us", "Colleen Hoover", "Teen", 7, 4, "zara@zara.com", "ABC123");
        bookService.saveBook(book1);
        assertEquals(1, bookService.bookSearch("It Ends With Us").size());
    }

    /*
    * Tests search functionality by category
    */
    @Test
	@Rollback(value = true)
    public void FindByCategory() {
        bookService.deleteAll();
        Book book = new Book("Harry Potter1", "J. K. Rowling", "Fiction", 25, 5, "vin@vin.com", "GIH123");
        bookService.saveBook(book);
        Book book1 = new Book("The Girl on the Train", "Paula Hawkins", "Thriller", 10, 5, "sneha@sneha.com", "DEF123");
        bookService.saveBook(book1);
        Book book2 = new Book("Sharp Objects", "Gillian Flynn", "Thriller", 6, 5, "zara@zara.com", "GHI123");
        bookService.saveBook(book2);
        assertEquals(2, bookService.bookSearch("Thriller").size());
    }

    /*
    * Tests search functionality by a filter that does not exist for any book or attribute
    */
    @Test
	@Rollback(value = true)
    public void FindNonExistentSearch() {
        bookService.deleteAll();
        assertEquals(0, bookService.bookSearch("Thriller").size());
    }

    /*
    * Tests search functionality when multiple attributes in multiple books have that filter value
    */
    @Test
	@Rollback(value = true)
    public void MultipleAttributeSearch() {
        bookService.deleteAll();
        Book book = new Book("Gillian", "J. K. Rowling", "Fiction", 25, 5, "vin@vin.com", "GIH123");
        bookService.saveBook(book);
        Book book1 = new Book("It Ends With Us", "Colleen Hoover", "Teen", 7, 4, "zara@zara.com", "ABC123");
        bookService.saveBook(book1);
        Book book2 = new Book("The Girl on the Train", "Paula Hawkins", "Gillian", 10, 5, "sneha@sneha.com", "DEF123");
        bookService.saveBook(book2);
        Book book3 = new Book("Sharp Objects", "Gillian", "Thriller", 6, 5, "zara@zara.com", "GHI123");
        bookService.saveBook(book3);
        Book book4 = new Book("The Kite Runner", "Khaled Hosseini", "Drama", 40, 5, "sneha@sneha.com", "HIK123");
        bookService.saveBook(book4);
        assertEquals(3, bookService.bookSearch("Gillian").size());
    }

    /*
    * Tests search by owner functionality
    */
    @Test
	@Rollback(value = true)
    public void FindByOwner() {
        bookService.deleteAll();
        Book book = new Book("Harry Potter1", "J. K. Rowling", "Fiction", 25, 5, "sneha@sneha.com", "GIH123");
        bookService.saveBook(book);
        Book book1 = new Book("The Girl on the Train", "Paula Hawkins", "Thriller", 10, 5, "sneha@sneha.com", "DEF123");
        bookService.saveBook(book1);
        Book book2 = new Book("Sharp Objects", "Gillian Flynn", "Thriller", 6, 5, "zara@zara.com", "GHI123");
        bookService.saveBook(book2);
        assertEquals(2, bookService.getBooksOfShopOwner("sneha@sneha.com").size());
    }
    
}
