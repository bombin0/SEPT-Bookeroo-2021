package com.rmit.sept.bk_loginservices.model;

import java.sql.Blob;
import javax.persistence.*;
import java.util.Date;


@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String author;
    private String description;
    private float price;
    private int rating;
    private Blob coverArt;
    private String contents;
    private String ISBN;

    private Date create_At;
    private Date update_At;

    public Book(){
    }


    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return this.author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public float getPrice() {
        return this.price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public int getRating() {
        return this.rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public Blob getCoverArt() {
        return this.coverArt;
    }

    public void setCoverArt(Blob coverArt) {
        this.coverArt = coverArt;
    }

    public String getContents() {
        return this.contents;
    }

    public void setContents(String contents) {
        this.contents = contents;
    }

    public String getISBN() {
        return this.ISBN;
    }

    public void setISBN(String ISBN) {
        this.ISBN = ISBN;
    }
    
    public Date getCreate_At() {
        return create_At;
    }


    public void setCreate_At(Date create_At) {
        this.create_At = create_At;
    }


    public Date getUpdate_At() {
        return update_At;
    }


    public void setUpdate_At(Date update_At) {
        this.update_At = update_At;
    }


    @PrePersist
    protected void onCreate(){
        this.create_At = new Date();
    }

    @PreUpdate
    protected void onUpdate(){
        this.update_At = new Date();
    }


}
