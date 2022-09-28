package com.app.service.EventService;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.entities.Center;
import com.app.entities.Event;
import com.app.entities.User;
import com.app.service.ImageHandlingService;

public interface IEventService  {

	// to give the all  events(completed/scheduled)
	List<Event> listAllEvent();
	
//	to give all the upcoming/scheduled events
	List<Event> listUpcomingEvents();
	
	List<Event> listEventsByCenter(Center center);
	
	Event  createEvent(Event event);
	
	Event updateEvent(Event event);
	
	 void deleteEvent(Long id);
	 
	 // method to store the image
	 Event storeImage(Long id, MultipartFile imageFile);
	 
	 // method to restore the image
	 byte[] restoreImage(Long id);
	
}
