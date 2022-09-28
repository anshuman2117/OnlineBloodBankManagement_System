package com.app.controller;

import java.util.List;

import javax.validation.Valid;

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

import com.app.dto.AddUserByAdminDTO;
import com.app.dto.AppointmentDTO;
import com.app.dto.BloodDonationDTO;
import com.app.dto.UpdateAppointmentDTO;
import com.app.dto.UserDTO;
import com.app.entities.Appointment;
import com.app.entities.BloodDonation;
import com.app.entities.BloodInventory;
import com.app.entities.Event;
import com.app.entities.IdentityProof;
import com.app.entities.Status;
import com.app.entities.User;
import com.app.service.AppointmentService.IAppointmentService;
import com.app.service.BloodDonationService.IBloodDonationService;
import com.app.service.BloodInventoryService.IBloodInventoryService;
import com.app.service.EventService.IEventService;
import com.app.service.IdentityproofService.IIdentityProofService;
import com.app.service.UserService.IUserService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin("http://localhost:3000")
@Slf4j
public class AdminController {
// dep:  for  user service i/f
	@Autowired
	private IUserService userService;
//   dep:  identity proof service i/f
	@Autowired
	private IIdentityProofService idproofService;
//	dep: blood donation service i/f
	@Autowired
	private IBloodDonationService donationService;
//    dep: blood inventory service i/f
	@Autowired
	private IBloodInventoryService inventoryService;
//	dep:  appointment service i/f
	@Autowired
	private IAppointmentService appointmentService;
//	dep:	event service i/f
	@Autowired
	private IEventService  eventService;

	
	
	
	
	// Admin will create an user with verified status
	@PostMapping("/user/add_donor_user")
	public ResponseEntity<User> addUser(@RequestBody AddUserByAdminDTO userdto) {
		log.info("---user dto---" + userdto);
		return new ResponseEntity<>(userService.addUserByAdmin(userdto), HttpStatus.CREATED);
	}

	
	
	
//	admin will create blood donation of a user
	@PostMapping("/blooddonation/createBloodDonation/{id}")
	public ResponseEntity<?> createBloodDonation(@PathVariable Long id, @RequestBody BloodDonationDTO blood) {
    log.info("request for create blood donation of "+id+" req body "+blood);
		return new ResponseEntity<>(donationService.createBloodDonation(id, blood), HttpStatus.OK);
	}

	
	
	// controller to get all the pending appointments scheduled by users
	@GetMapping("/appointment/pending")
	public ResponseEntity<?> listPendingAppointments() {
		List<AppointmentDTO > allAppointment = appointmentService.pendingAppointments();
		log.info("request for list of all appointment");
		if (!allAppointment.isEmpty())
			return new ResponseEntity<>(allAppointment, HttpStatus.OK);
		else {
		log.info("no appointment found");
		return new ResponseEntity<>("no appointments", HttpStatus.NOT_FOUND);
		}
	}

	
	
	// controller to get list of all appointments(history and pending)
			@GetMapping("/appointment/list_all_appointment")
			public ResponseEntity<?> listAllAppointments() {
				log.info("--------getting req. for listing all appointment ----------");
				List<AppointmentDTO> allAppointment = appointmentService.getAllAppointment();
				if (!allAppointment.isEmpty())
					return new ResponseEntity<>(allAppointment, HttpStatus.OK);
				return new ResponseEntity<>("no appointments", HttpStatus.OK);

			}
	
	
	
	
//			 controller to modify the status of the appointments
			@PutMapping("/appointment/updateAppointmentsts")
			public ResponseEntity<?> resolvePendingSts( @RequestBody UpdateAppointmentDTO appointment) {
				log.info(" appointment-> " + appointment.toString());
				
				if(appointmentService.updateAppointmentsStatus( appointment))
				return new ResponseEntity<>(
						/* appointmentService.appointmentById(appointment.getId()) */new String("appointment status updated"),
						HttpStatus.ACCEPTED);
				else
					return new ResponseEntity<>(new String("could not be updated"),HttpStatus.BAD_REQUEST);
			}
			
			
			
	//will give list of all pending  id proof status
	    @GetMapping("/identityproof/pendingIdStatus")
	    public ResponseEntity<?> getPendingIdStatus() {
	  	return new ResponseEntity<>(idproofService.listPendingStatus(), HttpStatus.OK);
	     }
  
	
	
	// will update the identity  verification status
	
	@PutMapping("/identityproof/updateIdVerification/{id}")
	public ResponseEntity<?> updateIdVerificationStatus(@PathVariable Long id,
			@RequestParam String status /* @RequestBody IdentityProof id */ ) {
		return ResponseEntity.ok(idproofService.updateIdStatus(Status.valueOf(status), id));
	}

	
	// controller ot create a event
	@PostMapping("/event/createEvent")
	public ResponseEntity<?> createEvents(@RequestBody Event event){
		Event returnEvent=eventService.createEvent(event);
		if(returnEvent!=null)
			return new ResponseEntity<>("event created successfully",HttpStatus.OK);
		else
			return new ResponseEntity<>(" event could not be created something bad happed!!!",HttpStatus.FORBIDDEN);
	}
	
	
	
	// controller to update an event
	@PutMapping("/event/createEvent")
	public ResponseEntity<?> updateEvents(@RequestBody Event event){
		Event returnEvent=eventService.updateEvent(event);
		if(returnEvent!=null)
			return new ResponseEntity<Event>(returnEvent,HttpStatus.OK);
		else
			return new ResponseEntity<>(" event could not be created ",HttpStatus.FORBIDDEN);
	}
	
	
	// controller to enlist all the upcoming events
	@GetMapping("/event/upcoming_events")
	public ResponseEntity<?> displayAllUpcomingEvents(){
		
		List<Event> event = eventService.listUpcomingEvents();
		if(event!=null)
		return new ResponseEntity<List<Event>>(event,HttpStatus.ACCEPTED);
		else
		return new ResponseEntity<>("no event found",HttpStatus.NOT_FOUND);
		}
	
	
	
	    @DeleteMapping("/event/delete/{id}")
	    public ResponseEntity<?> deleteEvent(@PathVariable Long id) {
	     	eventService.deleteEvent(id);
		  return new ResponseEntity<>("event deleted successfully ",HttpStatus.OK);
	    }
	
	    
	    
	    
	    
	    
	 // add a method to upload a event image on server side
		@PostMapping("/event/{id}/image")
		public  ResponseEntity<?> uploadImage(@PathVariable Long id,@RequestParam MultipartFile imageFile ){
		log.info("getting req. for event image upload  ");
			return new  ResponseEntity<>(eventService.storeImage(id, imageFile),HttpStatus.CREATED);
		}
		
		
//		// add req method to to download event image for specific request
//		
//		@GetMapping(value="/event/{id}/image",produces = {MediaType.IMAGE_JPEG_VALUE,MediaType.IMAGE_PNG_VALUE})
//		public ResponseEntity<?> restoreImage(@PathVariable Long id){
//			log.info("getting req. for event image download  ");
//			
//			byte[] restoreImage = eventService.restoreImage(id);
//			return new ResponseEntity<>(restoreImage,HttpStatus.OK);
//		}
	    
	    
	    
	
	
	
	
	@GetMapping("/blooddonation/getAllDonation")
	public ResponseEntity<List<BloodDonation>> getAllDonation() {
		List<BloodDonation> donation = donationService.getAllDonation();
		return new ResponseEntity<>(donation, HttpStatus.OK);
	}

	
	
	
	
	
	// add blood in blood inventory
	@PutMapping("/bloodinventory/addblood")
	public ResponseEntity<?> addBloodStock(@RequestBody BloodInventory inventory) {
		BloodInventory addBloodInventory = inventoryService.addBloodInventory(inventory);
		if(addBloodInventory!=null)
		return new ResponseEntity<>(new String("blood stock updated in bloodbank") , HttpStatus.OK);
		else
			return new ResponseEntity<>(new String("blood stock can't be updated in bloodbank") , HttpStatus.BAD_REQUEST
					);
		
	}

	
	
	
	
	
	// get blood stock blood inventory
	@GetMapping("/bloodinventory/getblood")
	public ResponseEntity<?> getBloodStock() {

		return new ResponseEntity<>(inventoryService.getBloodStock(), HttpStatus.OK);
	}

	
	
	
//Get all users{task of admin}
	
	@GetMapping("/users/listOfAll")
	public ResponseEntity<?> getAllUsers(){
		List<IdentityProof> users = userService.getAllUsers();
		if (users.isEmpty()) 
			return new ResponseEntity<>("user list is empty", HttpStatus.OK);
		return new ResponseEntity<>(users,HttpStatus.OK);
	}
	

	
	
	/*_________________________________________________________________________________________*/
	/*-----------------------------------------------------------------------------------------*/
	
	
	
	
	
	
	
	
	
	
	
//	{future scope}
	// get blood donation details by sample id
//	@GetMapping("/getby_sampleId/{sampleId}")
//	public ResponseEntity<?> getDonationBySampleId(@PathVariable String sampleId){
//		
//		
//		return ResponseEntity.ok(donationService.fetchBySampleId(sampleId));
//	}



	
	
//	 request for getting all the event (can be used as history)
	
	
//	@GetMapping("/all_events")
//	public ResponseEntity<?>  displayAllEvent(){
//		List<Event> event = eventService.listAllEvent();
//		if(event!=null)
//		return new ResponseEntity<List<Event>>(event,HttpStatus.ACCEPTED);
//		else
//		return new ResponseEntity<>("no event found",HttpStatus.NOT_FOUND);
//		}
	
	
}
