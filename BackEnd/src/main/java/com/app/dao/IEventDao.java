package com.app.dao;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Center;
import com.app.entities.Event;

public interface IEventDao extends JpaRepository<Event, Long> {

	@Query(value = "select e from Event e where e.eventStartDate>=?1")
	List<Event> findFutureEvents(LocalDate date);
	
	List<Event> findByCity(String center);
	
}
