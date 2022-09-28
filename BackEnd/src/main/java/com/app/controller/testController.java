//package com.app.controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.app.dao.IIdentityProofDao;
//import com.app.entities.Appointment;
//import com.app.entities.DocumentType;
//import com.app.entities.User;
//import com.app.service.AppointmentService.IAppointmentService;
//import com.app.service.IdentityproofService.IIdentityProofService;
//import com.app.service.UserService.IUserService;
//
//@RestController
//@RequestMapping("/test")
//public class testController {
//
//	@Autowired
//	private IIdentityProofService identityProofService;
//	
//	@Autowired
//	private IUserService iUserService;
//	
//	@Autowired
//	private IIdentityProofDao identityProofDao;
//	
//	@Autowired
//	private IIdentityProofDao iIdentityProofDao;
//
////	@GetMapping("/{uniqueIdNumber}")
////	public ResponseEntity<?> listAllIdentity(@PathVariable String uniqueIdNumber) {
////		return new ResponseEntity<>(identityProofDao.findByUniqueIdNumber(uniqueIdNumber), HttpStatus.OK);
////	}
//	
//	@GetMapping("/{id}")
//	public ResponseEntity<?> method1(@PathVariable Long id) {
//		return new ResponseEntity<>(identityProofDao.findByUserId(id), HttpStatus.OK);
//	}
//
////	@GetMapping("/{id}")
////	public ResponseEntity<?> listAllIdentityById(@PathVariable Long id) {
////		User user=iUserService.getUser(id);
//////		                  user.getId();
////		
////		return new ResponseEntity<>(identityProofService.getIdentityProofByUserId(user.getId()), HttpStatus.OK);
////	}
//	
//	
////	@GetMapping("/1")
////	public ResponseEntity<?> listAllIdentityById(@RequestParam DocumentType documentType) {
////		User user=iUserService.getUser(id);
////		                  user.getId();
//		
////		return new ResponseEntity<>(identityProofService.getAllByDocType(documentType), HttpStatus.OK);
////	}
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//
////	@Autowired
////	private IAppointmentService appointmentService;
////	
////	@PutMapping
////	public ResponseEntity<?> resolvePendingSts(@RequestParam String status,@RequestBody Appointment appointment) {
////		System.out.println("status:-> "+status+" appointment-> "+appointment.toString());
////		appointmentService.updateAppointmentsStatus(status, appointment);
////		return new ResponseEntity<>(appointmentService.appointmentById(appointment.getId()),HttpStatus.ACCEPTED);
////	}
////	@GetMapping
////	public ResponseEntity<?> getAllAppointments(){
////		List<Appointment> list = appointmentService.getAllAppointment();
////		return new ResponseEntity<>( list,HttpStatus.OK);
////	}
////	
////	@GetMapping("/{id}")
////	public ResponseEntity<?> getAllAppointmentsById(@PathVariable Long id){
//////		Appointment list = appointmentService.appointmentById(id);
////		return new ResponseEntity<>( appointmentService.appointmentById(id),HttpStatus.OK);
////	}
//
////	@PutMapping("/ab")
////	public ResponseEntity<?> resolvePending(@RequestParam String name,@RequestParam Long age,@RequestBody Object obj) {
////		
////		return new ResponseEntity<>("hello "+name+ "obje-> "+obj,HttpStatus.ACCEPTED);
////	}
//}
