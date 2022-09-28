package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.UserLogInDTO;
import com.app.entities.Event;
import com.app.entities.User;
import com.app.service.EventService.IEventService;
import com.app.service.UserService.IUserService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/bloodbank")
@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
public class HomeController {
	
	@Autowired
	private IUserService iUserService;
	
	@Autowired
	private IEventService eventService;
	
	
	
	
	
	public HomeController() {
		System.out.println("in ctor of " + getClass());
	}
	
	
// users will get all upcoming events on home page
	@GetMapping("/home")
	public ResponseEntity<?> showHomePage() {
		log.info("in home page  of home controller ");
		List<Event> upcomingEvents = eventService.listUpcomingEvents();
		for (Event event : upcomingEvents) {
			System.out.println(" events--> "+event);
		}
		return new ResponseEntity<>(upcomingEvents,HttpStatus.OK);
	}
	
	@GetMapping(value="/event/{id}/image",produces = {MediaType.IMAGE_JPEG_VALUE,MediaType.IMAGE_PNG_VALUE})
	public ResponseEntity<?> restoreImage(@PathVariable Long id){
		log.info("getting req. for event image download  ");
		System.out.println("request for image of events");
		byte[] restoreImage = eventService.restoreImage(id);
		return new ResponseEntity<>(restoreImage,HttpStatus.OK);
	}
	
	
	
	// add req method to to download image for specific request
	
		@GetMapping(value="/{id}/image",produces = {MediaType.IMAGE_JPEG_VALUE,MediaType.IMAGE_PNG_VALUE})
		public ResponseEntity<?> restoreImag2User(@PathVariable Long id){
			byte[] restoreImage =  iUserService.restoreImage(id);
			return new ResponseEntity<>(restoreImage,HttpStatus.OK);
		}
	
		
		// add a method to upload a image on server side
		@PostMapping("/{id}/image")
		public  ResponseEntity<User> uploadImage(@PathVariable Long id,@RequestParam MultipartFile imageFile ){
		
			return new  ResponseEntity<>(iUserService.storeImage(id, imageFile),HttpStatus.OK);
		}
	
	
	@GetMapping("/login")
	public ResponseEntity<?> userLogin(@RequestBody UserLogInDTO dto) {
		System.out.println(" user_email "+dto.getEmail()+" pass "+dto.getPassword());
		User user=iUserService.getByEmailAndPassword(dto.getEmail(), dto.getPassword());
		if(user!=null)
		return new ResponseEntity<User>(user,HttpStatus.ACCEPTED);
		else
		return new ResponseEntity<>("user_email or password invalid",HttpStatus.NOT_FOUND);
	
	}
}