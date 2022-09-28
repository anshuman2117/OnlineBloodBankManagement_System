package com.app.controller;

import java.util.List;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.custom_excpetions.ResourceNotFoundException;
import com.app.dto.UserDTO;
import com.app.entities.BloodDonation;
import com.app.entities.IdentityProof;
import com.app.entities.Status;
import com.app.entities.User;
import com.app.service.ImageHandlingService;
import com.app.service.BloodDonationService.IBloodDonationService;
import com.app.service.IdentityproofService.IIdentityProofService;
import com.app.service.IdentityproofService.IdentityProofServiceImpl;
import com.app.service.UserService.IUserService;

import lombok.extern.slf4j.Slf4j;
@Slf4j
@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	
	@Autowired
	private IUserService userService;
	
	@Autowired
	private IIdentityProofService identityProofService;
	
	@Autowired
	private IBloodDonationService bloodDonationService;
	
	@Autowired
	private ModelMapper modelMapper;
	
	
	//constructor of user controller
	public UserController() {
		log.info("in constructor of " + getClass());
	}
	
	
	
	//Get user by UserId
	@GetMapping("/{id}")
	public ResponseEntity<?> getUser(@PathVariable Long id) {
		try {
			IdentityProof identityProofByUserId = identityProofService.getIdentityProofByUserId(id);
//			User userReturn = userService.getUser(id);
//			UserDTO user=modelMapper.map(userReturn, UserDTO.class);
//			IdentityProof identityProofByUserId = identityProofService.getIdentityProofByUserId(id);
//			user.setDocumentType(identityProofByUserId.getDocumentType());
//			user.setUniqueIdNumber(identityProofByUserId.getUniqueIdNumber());
//			user.setStatus(identityProofByUserId.getStatus());
			
			log.info("get user by user id "+identityProofByUserId);
			if(identityProofByUserId!=null)
			return ResponseEntity.ok(identityProofByUserId);
			else throw new ResourceNotFoundException("user does not exist by id "+id);
		} catch (RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
	
	//Add user
	@PostMapping("/register")
	public ResponseEntity<?> addUser(@RequestBody UserDTO userDto){
		log.info("incoming user req. "+userDto);
		UserDTO userDtoReturn=userService.addUser(userDto);   // persisting user data
		log.info("returning user req user req. "+userDtoReturn);
		   if(userDtoReturn==null)
		return new ResponseEntity<>(new String("user already exists"), HttpStatus.CONFLICT);
		   else
		   return new ResponseEntity<>(userDtoReturn, HttpStatus.OK);
	}
	
	//Update user details
	@PutMapping("/update/{id}")
	public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody UserDTO identityProof1) {
		identityProof1.setId(id);
		User user=modelMapper.map(identityProof1, User.class);
		IdentityProof identityProof=modelMapper.map(identityProof1, IdentityProof.class);
		User updatedUser = userService.updateUser(id,user);
		identityProof.setUser(updatedUser);
		return new ResponseEntity<>(identityProofService.saveIdentityProof(id,identityProof),HttpStatus.OK);
	}
	
	
	
	
	
	// add a method to upload a image on server side
	@PostMapping("/{id}/image")
	public  ResponseEntity<User> uploadImage(@PathVariable Long id,@RequestParam MultipartFile imageFile ){
	
		return new  ResponseEntity<>(userService.storeImage(id, imageFile),HttpStatus.OK);
	}
	
	
	// add req method to to download image for specific request
	
	@GetMapping(value="/{id}/image",produces = {MediaType.IMAGE_JPEG_VALUE,MediaType.IMAGE_PNG_VALUE})
	public ResponseEntity<?> restoreImage(@PathVariable Long id){
		byte[] restoreImage = userService.restoreImage(id);
		return new ResponseEntity<>(restoreImage,HttpStatus.OK);
	}

	
	
	
	
	@GetMapping("/bloodDonation/{id}")
	public ResponseEntity<?> getBloodDonationById(@PathVariable Long id){
		List<BloodDonation> allDonationByUser = bloodDonationService.getAllDonationByUser(id);
		if(allDonationByUser!=null)
		return new ResponseEntity<>(allDonationByUser,HttpStatus.OK);
		else
			return new ResponseEntity<>("no blood donation",HttpStatus.OK);
	}
	
	
	
	
	/*----------------------------------------------------------------------------------------------*/
	/*______________________________________________________________________________________________*/
	
	
	
	
//	{future scope---> which will be done by admin}
	
//	//delete user
//		@DeleteMapping("/{userid}")
//		public ResponseEntity<?> deleteUser(@PathVariable Long userid) {
//			try {
//				identityProofService.deleteIdentityProof(userid);
//				String string = userService.deleteUser(userid);
//				return ResponseEntity.ok(string);
//			} catch (RuntimeException e) {
//				return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
//			}
//		}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}

