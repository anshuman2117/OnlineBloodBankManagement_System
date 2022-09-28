package com.app.entities;

import java.sql.Time;
import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString

@Entity
@Table(name = "events")
public class Event extends BaseEntity {
    @Column(length = 50)
	private String title;
    
	private String description;
	
	@Column(name = "event_start_date")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate eventStartDate;
	
	@Column(name = "event_end_date")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate eventEndDate;
	
	@Column(name = "event_start_time")
	@DateTimeFormat(pattern = "hh:mm:ss")
	private Time eventStartTime;
	
	@Column(name = "event_end_time")
	@DateTimeFormat(pattern = "hh:mm:ss")
	private Time eventEndTime;
	 
	private String event_poster;
	
	private String venue;
	
	@Column(length = 20)
	private String city;
	
}
