package com.rmit.sept.bk_loginservices.web;

import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.rmit.sept.bk_loginservices.services.UserService;
import com.rmit.sept.bk_loginservices.exceptions.UsernameAlreadyExistsException;
import com.rmit.sept.bk_loginservices.model.User;
import org.springframework.test.annotation.Rollback;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.Assert.*;

/**
 * This class tests for user related functions that are defined in the user service class.
 */

@SpringBootTest
public class UserControllerTests {

	@Autowired
	private UserService userService;

	
	/*Test for customer registration with the correct details.*/
	@Test
	@Rollback(value = true)
    public void correctCustomerRegistration() {
		User user = new User();
		user.setFullName("ABC");
		user.setUsername("abc@abc.com");
		user.setPassword("password");
		user.setConfirmPassword("password");
		user.setUserType("customer");
		user.setStatus("active");
		userService.saveUser(user);
		assertFalse(userService.saveUser(user).equals(null));
    }

	/*
	Test for customer registration when the customer registers with a username that already exists.
	Should throw a UsernameAlreadyExistsException
	*/
	@Test
	@Rollback(value = true)
    public void usernameExistsRegistration() throws UsernameAlreadyExistsException{
		User user1 = new User((long)1, "zara@zara.com", "Zara Noor", "password", "password", "customer", "active");
		userService.saveUser(user1);
		User user2 = new User((long)2, "zara@zara.com", "Zara N", "pass123", "pass123", "customer", "active");
		Assertions.assertThrows(UsernameAlreadyExistsException.class, () -> {
            userService.saveUser(user2);
        });
    }

	/*
	API TESTING: DO NOT UNCOMMENT
	
	@Test
	@Rollback(value = true)
    public void passwordMismatchRegistration() {
		User user = new User((long)1, "zara@zara.com", "Zara Noor", "passw1", "passw2", "customer", "active");
		userService.saveUser(user);
    }
	*/

	/*
	Test for customer registration when customer tries to register with an username that is not an email.
	This should throw an UsernameAlreadyExistsException because by default any issues with the
	username would throw this exception.
	*/
	@Test
	@Rollback(value = true)
    public void incorrectIDRegistration() throws UsernameAlreadyExistsException{
		User user = new User((long)1, "deb", "Sneha", "password", "password", "customer", "active");
		Assertions.assertThrows(UsernameAlreadyExistsException.class, () -> {
            userService.saveUser(user);
        });
    }

	/*
	Test for shop owner registration with correct details.
	Since the shopOwner cannot login until it is approved, it's password is temporarily changed to "xxxx"
	This test checks for that password change once a shop owner registers.
	*/
	@Test
	@Rollback(value = true)
    public void shopownerRegistrationAccountStatus() {
		User user = new User((long)1, "zara@zara.com", "Zara Noor", "password", "password", "shopOwner", "pending");
		user.setABN("123ABC123");
		userService.saveUser(user);
		User searchUser = userService.searchUser("zara@zara.com");
		assertTrue(searchUser.getPassword().equals("xxxx"));
    }

	/*
	Test for retrieving the list of pending users in the database
	*/
	@Test
	@Rollback(value = true)
    public void retrievePendingUsers() {
		User user = new User((long)1, "zara@zara.com", "Zara Noor", "password", "password", "shopOwner", "pending");
		user.setABN("123ABC123");
		userService.saveUser(user);
		assertEquals(1, userService.getUserRequests().size());
    }

	/*
	Test for admin approving pending users
	*/
	@Test
	@Rollback(value = true)
    public void approveUsersByAdmin() {
		User user = new User((long)1, "deb@deb.com", "Sneha", "password", "password", "shopOwner", "pending");
		user.setABN("123ABC123");
		userService.saveUser(user);
		assertEquals("pending", userService.searchUser("deb@deb.com").getStatus());
		userService.approvePendingUsers("deb@deb.com");
		assertEquals("active", userService.searchUser("deb@deb.com").getStatus());
    }

	/*
	Test for when an admin tries to approve a user that has already been approved. 
	No changes are made to the user details.
	*/
	@Test
	@Rollback(value = true)
    public void approveAnApprovedUser() {
		User user = new User((long)1, "deb@deb.com", "Sneha", "password", "password", "shopOwner", "active");
		user.setABN("123ABC123");
		userService.saveUser(user);
		assertEquals("active", userService.searchUser("deb@deb.com").getStatus());
		assertEquals(null, userService.searchUser("deb@deb.com").getOptional());
		userService.approvePendingUsers("deb@deb.com");
		assertEquals("active", userService.searchUser("deb@deb.com").getStatus());
		assertEquals(null, userService.searchUser("deb@deb.com").getOptional());
    }

	/*
	Test for rejecting a shopowner's request. Checks if the shopowner is removed from the database
	once the admin has rejected it's request.
	*/
	@Test
	@Rollback(value = true)
    public void rejectUsersByAdmin() {
		User user = new User((long)1, "pat@pat.com", "Patrick", "password", "password", "shopOwner", "pending");
		user.setABN("123ABC123");
		userService.saveUser(user);
		User user1 = new User((long)2, "vin@vin.com", "Vincent", "password", "password", "shopOwner", "pending");
		user1.setABN("123AC123");
		userService.saveUser(user1);
		assertEquals(2, userService.getUserRequests().size());
		userService.rejectPendingUser("vin@vin.com");
		assertEquals(1, userService.getUserRequests().size());
    }

	/*
	Test for searching a non-existent user. No user value is passed.
	*/
	@Test
	@Rollback(value = true)
    public void nonexistentUserSearch() {
		User user = userService.searchUser("arjun@arjun.com");
		assertEquals(null, user);
    }

    /*
	Test for blocking an active user.
	*/
	@Test
	@Rollback(value = true)
    public void blockUserByAdmin() {
		User user = new User((long)1, "pat@pat.com", "Patrick", "password", "password", "customer", "active");
		userService.saveUser(user);
		assertEquals("active", userService.searchUser("pat@pat.com").getStatus());
		userService.blockUser("pat@pat.com");
		assertEquals("block", userService.searchUser("pat@pat.com").getStatus());
    }

	/*
	Test for blocking a user that is already blocked.
	*/
	@Test
	@Rollback(value = true)
    public void blockUserThatIsAlreadyBlocked() {
		User user = new User((long)1, "vin@vin.com", "Vincent", "password", "password", "customer", "block");
		userService.saveUser(user);
		userService.blockUser("vin@vin.com");
		assertEquals("block", userService.searchUser("vin@vin.com").getStatus());
    }

	/*
	Test for unblocking a user that is blocked.
	*/
	@Test
	@Rollback(value = true)
    public void unblockUserByAdmin() {
		User user = new User((long)1, "arj@arj.com", "Arjun", "password", "password", "customer", "block");
		userService.saveUser(user);
		assertEquals("block", userService.searchUser("arj@arj.com").getStatus());
		userService.unblockUser("arj@arj.com");
		assertEquals("active", userService.searchUser("arj@arj.com").getStatus());
    }

	/*
	Test for unblocking a user that is active.
	*/
	@Test
	@Rollback(value = true)
    public void unblockUserThatIsNotBlocked() {
		User user = new User((long)1, "arj@arj.com", "Arjun", "password", "password", "customer", "active");
		userService.saveUser(user);
		userService.unblockUser("arj@arj.com");
		assertEquals("active", userService.searchUser("arj@arj.com").getStatus());
    }


	/*
	Test for blocking/unblocking a user that does not exist.
	*/
	@Test
	@Rollback(value = true)
    public void BlockAndUnblockUserThatDoesNotExist() throws NullPointerException{
		Assertions.assertThrows(NullPointerException.class, () -> {
            userService.blockUser("zar@zar.com");
        });
		Assertions.assertThrows(NullPointerException.class, () -> {
            userService.unblockUser("zar@zar.com");
        });	
    }

	/*
	Test for editting a user.
	*/
	@Test
	@Rollback(value = true)
    public void editUser() {
		User user1 = new User((long)1, "zara@zara.com", "Zara Noor", "password", "password", "customer", "active");
		userService.saveUser(user1);
		User editDetail = new User((long)1, "zara@zara.com", "NEW", "password", "password", "customer", "active");
		userService.editUser("zara@zara.com", editDetail);
		assertEquals("NEW", userService.searchUser("zara@zara.com").getFullName());
    }
}
