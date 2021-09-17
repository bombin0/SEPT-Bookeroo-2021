package com.rmit.sept.bk_loginservices.model;

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
    private String owner;
    
    

    @Lob
    private byte[] coverArt;
    @Lob
    private byte[] contents;
    @Column(unique = true)
    private String ISBN;
    private String category;

    private Date create_At;
    private Date update_At;

    public Book(){
    }

    public Book(String title, String author, String category, float price, int rating, String owner, String ISBN){
        this.title = title;
        this.author = author;
        this.price = price;
        this.rating = rating;
        this.owner = owner;
        this.category = category;
        this.ISBN = ISBN;
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

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public byte[] getCoverArt() {
        return this.coverArt;
    }

    public void setCoverArt(byte[] coverArt) {
        this.coverArt = coverArt;
    }

    public byte[] getContents() {
        return this.contents;
    }

    public void setContents(byte[] contents) {
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

    public void setCategory(String category) {
        this.category = category;
    }

    public String getCategory() {
        return this.category;
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
