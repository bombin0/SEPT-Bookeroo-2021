package com.rmit.sept.bk_loginservices.services;

import com.rmit.sept.bk_loginservices.Repositories.UserRepository;
import com.rmit.sept.bk_loginservices.exceptions.UsernameAlreadyExistsException;
import com.rmit.sept.bk_loginservices.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User saveUser (User newUser){

      /*  newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
        //Username has to be unique (exception)
        // Make sure that password and confirmPassword match
        // We don't persist or show the confirmPassword
        return userRepository.save(newUser);
       */
        try{
            if (newUser.getStatus().equals("pending") || newUser.getStatus().equals("block")){
                newUser.setOptional(bCryptPasswordEncoder.encode(newUser.getPassword()));
                newUser.setPassword("xxxx");
            } else {
                newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
                newUser.setOptional(newUser.getOptional());
            }
        
            //Username has to be unique (exception)
            newUser.setUsername(newUser.getUsername());
            newUser.setStatus(newUser.getStatus());
            newUser.setUserType(newUser.getUserType());
            newUser.setFullName(newUser.getFullName());
            newUser.setABN(newUser.getABN());
            newUser.setPhone(newUser.getPhone());
            newUser.setAdrress(newUser.getAddress());
            
            // Make sure that password and confirmPassword match
            // We don't persist or show the confirmPassword
            newUser.setConfirmPassword("");
            return userRepository.save(newUser);

        }catch (Exception e){
            throw new UsernameAlreadyExistsException("Username '"+newUser.getUsername()+"' already exists");
        }
    }

    public List<User> getUserRequests (){
        return userRepository.findByUserTypeAndStatus("shopOwner", "pending");
    }

    public User approvePendingUsers(String ID){
        User user = userRepository.findByUsername(ID);;
        user.setStatus("active");
        user.setPassword(user.getOptional());
        user.setOptional("");
        User newUser = userRepository.save(user);
        return newUser;
    }

    public void rejectPendingUser(String ID){
        User user = userRepository.findByUsername(ID);;
        userRepository.delete(user);
    }

    public User searchUser (String ID){
        return userRepository.findByUsername(ID);
    }

    public void blockUser (String ID){
        User user = userRepository.findByUsername(ID);
        user.setStatus("block");
        user.setOptional(user.getPassword());
        user.setPassword("xxx");
        userRepository.save(user);
    }

    public void unblockUser (String ID){
        User user = userRepository.findByUsername(ID);
        user.setStatus("active");
        user.setPassword(user.getOptional());
        user.setOptional("");
        userRepository.save(user);
    }

    public void editUser (User user){
        user.setABN(user.getABN());
        user.setFullName(user.getFullName());
        user.setAdrress(user.getAddress());
        user.setPhone(user.getPhone());
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }
}
