package com.rmit.sept.bk_loginservices.web;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

 
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import com.rmit.sept.bk_loginservices.model.User;
import com.rmit.sept.bk_loginservices.services.UserService;

@RunWith(SpringRunner.class)
@WebMvcTest(value = UserController.class)
@WithMockUser
public class UserControllerTests {
    
    @Autowired
	private MockMvc mockMvc;

	@MockBean
	private UserService userService;

	String exampleCourseJson = "{\"id\":\"1\",\"username\":\"snehadebsikdar@gmail.com\",\"fullname\":\"sneha debsikdar\",\"password\":\"hello123\",\"confirmPassword\":\"hello123\",\"userType\":\"public user\"}";
    

	@Test

	public void adminUserRequests() throws Exception{
		List<User> users = new ArrayList<User>();
		users.add(new User((long)1, "snehadebsikdar@gmail.com", "sneha debsikdar", "hello123", "hello123", "public user"));
		// users.add(new User((long)2, "nehadebsikdar@gmail.com", "neha debsikdar", "hello123", "hello123", "public user"));
		Mockito.when(userService.getUserRequests()).thenReturn(users);

		RequestBuilder requestBuilder = MockMvcRequestBuilders.get(
				"/api/users/userRequests").accept(
				MediaType.APPLICATION_JSON);

		MvcResult result = mockMvc.perform(requestBuilder).andReturn();
        
		System.out.println(result.getResponse());
		String expected = "{id:1,username:snehadebsikdar@gmail.com,fullname:sneha debsikdar, password:hello123, confirmPassword:hello123, userType:public user}";
		JSONAssert.assertEquals(expected, result.getResponse()
				.getContentAsString(), false);
	}

    @Test 

	public void saveBook() throws Exception{

		User mockUser = new User((long)1, "snehadebsikdar@gmail.com", "sneha debsikdar", "hello123", "hello123", "public user");

		Mockito.when(
			userService.saveUser(Mockito.any(User.class))).thenReturn(mockUser);

			RequestBuilder requestBuilder = MockMvcRequestBuilders
			.post("/api/users/register")
			.accept(MediaType.APPLICATION_JSON).content(exampleCourseJson)
			.contentType(MediaType.APPLICATION_JSON);

		MvcResult result = mockMvc.perform(requestBuilder).andReturn();

		MockHttpServletResponse response = result.getResponse();

		assertEquals(HttpStatus.CREATED.value(), response.getStatus());

		assertEquals("http://localhost:8080/api/users/register",
				response.getHeader(HttpHeaders.LOCATION));



	}
}

