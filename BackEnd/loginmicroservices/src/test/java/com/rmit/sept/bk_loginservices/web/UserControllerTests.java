package com.rmit.sept.bk_loginservices.web;

import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

 
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import com.rmit.sept.bk_loginservices.model.User;

@RunWith(SpringRunner.class)
@WebMvcTest(value = UserController.class)

public class UserControllerTests {
    
    @Autowired
	private MockMvc mockMvc;

	@MockBean
	private UserController userController;
    
    User mockCourse = new User((long)1,"snehadebsikdar@gmail.com","sneha debsikdar","hello1234","hello1234","owner");

}
