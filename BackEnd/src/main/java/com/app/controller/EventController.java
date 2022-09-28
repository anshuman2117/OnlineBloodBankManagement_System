package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Event;
import com.app.service.EventService.IEventService;

@RestController
@RequestMapping("/api/events")
@CrossOrigin("http://localhost:3000")
public class EventController {

	@Autowired
	private IEventService  eventService;
	
	
	public EventController(){
		System.out.println(" in the controller of-> "+getClass());
	}
	

	@GetMapping("/upcoming_events")
	public ResponseEntity<?> displayAllUpcomingEvents(){
		
		List<Event> event = eventService.listUpcomingEvents();
		if(event!=null)
		return new ResponseEntity<List<Event>>(event,HttpStatus.ACCEPTED);
		else
		return new ResponseEntity<>("no event found",HttpStatus.NOT_FOUND);
		}
	
//	@PostMapping("/createEvent")
//	public ResponseEntity<?> createEvents(@RequestBody Event event){
//		Event returnEvent=eventService.createEvent(event);
//		if(returnEvent!=null)
//			return new ResponseEntity<Event>(returnEvent,HttpStatus.CREATED);
//		else
//			return new ResponseEntity<>(" event could not be created ",HttpStatus.FORBIDDEN);
//	}
	
	
//	@PutMapping("/createEvent/{id}")
//	public ResponseEntity<?> updateEvents(@RequestBody Event event){
//		Event returnEvent=eventService.updateEvent(event);
//		if(returnEvent!=null)
//			return new ResponseEntity<Event>(returnEvent,HttpStatus.CREATED);
//		else
//			return new ResponseEntity<>(" event could not be created ",HttpStatus.FORBIDDEN);
//	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteEvent(@PathVariable Long id) {
		eventService.deleteEvent(id);
		return new ResponseEntity<>("event deleted successfully ",HttpStatus.OK);
	}
	
	
	
	
	
	
	
	/*_________________________________________________________________________________*/
	/* ------------------------------------------------------------------------------ */	
	//controller to enlist all the events(can be used for history)->(future scope)
	
	
}
