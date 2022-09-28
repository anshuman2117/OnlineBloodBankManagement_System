package com.app.dto;

import java.time.LocalDate;


import com.app.entities.BloodGroup;
import com.app.entities.Center;
import com.app.entities.Gender;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SaveAppointmentDTO {

	
	private String name;
	
	private Gender gender;
	
	private Integer age;
	
	private String doctorName;
	
	private String description;
	
	private LocalDate appointmentScheduleDate;
	
	private Center center;
	
	private int bagSize;
	
	private int bagQuantity;
	
	private BloodGroup bloodGroup;
	
	
	
}
