package com.rmit.sept.bk_loginservices.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.Date;
import java.util.Collection;


@Entity
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Email(message = "Username needs to be an email")
    @NotBlank(message = "username is required")
    @Column(unique = true)
    private String username;
    @NotBlank(message = "Please enter your full name")
    private String fullName;
    @NotBlank(message = "Password field is required")
    private String password;
    @Transient
    private String confirmPassword;
    private Date create_At;
    private Date update_At;
    private String userType;
    private String status;
    private String address;
    private String phone;
    private String abn;
    private String optional;

    //OneToMany with Project

    public User() {
    }

    public User(Long id, String username, String fullname, String password, String confirmPassword, String userType, String status){
        this.id=id;
        this.username = username;
        this.fullName = fullname;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.userType = userType;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
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

    public void setUserType(String userType){
        this.userType = userType;

    }

    public String getUserType(){
        return this.userType;

    }

    public String getStatus(){
        return this.status;

    }

    public void setStatus(String status){
        this.status = status;

    }

    public void setPhone (String phone){
        this.phone = phone;
    }

    public String getPhone (){
        return this.phone;
    } 

    public void setAdrress (String address){
        this.address = address;
    }

    public String getAddress (){
        return this.address;
    } 

    public void setABN (String abn){
        this.abn = abn;
    }

    public String getABN (){
        return this.abn;
    } 

    public void setOptional (String optional){
        this.optional = optional;
    }

    public String getOptional (){
        return this.optional;
    } 

    /*
    UserDetails interface methods
     */

    @Override
    @JsonIgnore
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isEnabled() {
        return true;
    }
}