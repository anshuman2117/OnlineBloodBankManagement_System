package com.app.dto;

import java.time.LocalDate;

import javax.validation.constraints.FutureOrPresent;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.NumberFormat;

import com.app.entities.BloodGroup;
import com.app.entities.Center;
import com.app.entities.Gender;
import com.app.entities.Patient;
import com.app.entities.Status;
import com.app.entities.User;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AppointmentDTO {

//	
	private User user;
	
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;//user
	
	@FutureOrPresent
	private LocalDate appointmentScheduleDate;
	
	@NotNull
	private Center center;
	
	@NotEmpty
	private int bagSize;
	
	@NotEmpty
	private int bagQuantity;
	
	@JsonProperty(access = Access.READ_ONLY)
	private Status status;
	
	private BloodGroup bloodGroup;
	
	
	private Patient patient;

	
	
	
//	private 
}
