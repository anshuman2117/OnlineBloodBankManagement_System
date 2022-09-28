package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.IUserDao;
import com.app.dto.AuthRequest;
import com.app.dto.AuthResp;
import com.app.dto.UserDTO;
import com.app.jwt_utils.JwtUtils;
import com.app.service.UserService.IUserService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
@Slf4j
public class SignInSignUpController {
//dep : JWT utils : for generating JWT
	@Autowired
	private JwtUtils utils;
	// dep : Auth mgr
	@Autowired
	private AuthenticationManager manager;
	
	@Autowired
	private IUserService userService;

	// add a method to authenticate user . Incase of success --send back token , o.w
	// send back err mesg
	@PostMapping("/signin")
	public ResponseEntity<?> validateUserCreateToken(@RequestBody @Valid AuthRequest request) {
		// store incoming user details(not yet validated) into Authentication object
		// Authentication i/f ---> imple by UserNamePasswordAuthToken
		if(request==null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("empty data sent ");
		}
		UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(request.getEmail(),
				request.getPassword());
		log.info("auth token " + authToken);
		try {
			// authenticate the credentials
			Authentication authenticatedDetails = manager.authenticate(authToken);
			UserDTO userDTO = userService.getByEmailId(authenticatedDetails.getName());
			
			
			// => auth succcess
//			return ResponseEntity.ok(new AuthResp("Auth successful!", utils.generateJwtToken(authenticatedDetails),userDTO));
			return ResponseEntity.status(HttpStatus.OK).body(new AuthResp("Login successfull", utils.generateJwtToken(authenticatedDetails),userDTO));
		} catch (BadCredentialsException e) { // lab work : replace this by a method in global exc handler
			// send back err resp code
			System.out.println("err "+e);
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new AuthResp("Email Id or Password not matched  try again!!!!", null,null));
		}

	}
	
	
	
	// for signup
	
	
	
}
