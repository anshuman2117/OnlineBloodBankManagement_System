package com.app.entities;


import java.time.LocalDate;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@Table(name = "appointments")
public class Appointment extends BaseEntity{

	@ManyToOne(fetch = FetchType.LAZY)      // one user can have many appointments
	@JoinColumn(name = "user_id")
	private User user;  
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Column(name = "appointment_creation_date")
	private LocalDate appointmentCreationDate;
	
	@Column(name = "appointment_schedule_date")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate appointmentScheduleDate;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 15)
	private Center center;
	
	@Column(name = "bag_size")
	private int bagSize;
	
	@Column(name = "bag_quantity")
	private int bagQuantity;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 15)
	private Status status;
	
	@ManyToOne
	@JoinColumn(name = "patient_id")
	private Patient patient;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 10)
	private BloodGroup bloodGroup;

	public Appointment( LocalDate appointmentScheduleDate, Center center,
			int bagSize, int bagQuantity,Patient patient,BloodGroup bloodGroup) {
		super();
//		this.user = user;
		this.appointmentCreationDate =LocalDate.now();
		this.appointmentScheduleDate = appointmentScheduleDate;
		this.center = center;
		this.bagSize = bagSize;
		this.bagQuantity = bagQuantity;
		this.status = Status.PENDING;
		this.patient=patient;
		this.bloodGroup=bloodGroup;
		
	}
	
	
}
	

