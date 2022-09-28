package com.app.service.EventService;

import java.io.File;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.app.custom_excpetions.ResourceNotFoundException;
import com.app.dao.IEventDao;
import com.app.entities.Center;
import com.app.entities.Event;
import com.app.entities.User;
import com.app.service.ImageHandlingService;

import lombok.extern.slf4j.Slf4j;

@Service
@Transactional
@Slf4j
public class EventServiceImpl implements IEventService {

	@Autowired
	private IEventDao eventDao;

	@Value("${file.upload.location2}")
	private String baseFolder;
	
	
	@Autowired
	private ImageHandlingService imageHandlingService;
	
	
	
	
	// to list all the event from start to end
	@Override
	public List<Event> listAllEvent() {
		
		return eventDao.findAll();
	}

	// to list the upcoming  events
	@Override
	public List<Event> listUpcomingEvents() {
		return eventDao.findFutureEvents(LocalDate.now());
	}

	@Override
	public List<Event> listEventsByCenter(Center center) {
		
		return eventDao.findByCity(center.name());
	}

	@Override
	public Event createEvent(Event event) {
		// TODO Auto-generated method stub
		return eventDao.save(event);
	}

	@Override
	public Event updateEvent(Event event) {
		return eventDao.save(event);
	}

	@Override
	public void deleteEvent(Long id) {
		eventDao.deleteById(id);
		
	}

	@Override
	public Event storeImage(Long id, MultipartFile imageFile) {
		Event findById = eventDao.findById(id).orElseThrow(() -> new RuntimeException("------user not found-----"));
		String completePath = baseFolder + File.separator + findById.getTitle() + findById.getId()+".jpeg";
		log.info("full path of image..."+completePath);
		log.info("----get title----> "+findById.getTitle());
		log.info("----get id----> "+findById.getId());
		log.info("----get image content type----> "+imageFile.getContentType());
		imageHandlingService.uploadImage(completePath, imageFile);
		findById.setEvent_poster(completePath);
		
		return eventDao.save(findById);
	}

	@Override
	public byte[] restoreImage(Long id) {
		
		Event findById = eventDao.findById(id).orElseThrow(()->new ResourceNotFoundException("user does not exist!! "));
		
		return imageHandlingService.downlaodImage(findById.getEvent_poster());
	}

	
}
