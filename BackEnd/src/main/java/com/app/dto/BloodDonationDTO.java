package com.app.dto;

import java.time.LocalDate;

import javax.validation.constraints.NotEmpty;

import com.app.entities.BloodGroup;
import com.app.entities.User;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
public class BloodDonationDTO {

	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	
	@JsonProperty(access = Access.READ_ONLY)
	private String bloodSampleId;
	
	@NotEmpty
	private BloodGroup bloodGroup;
	
	@NotEmpty
	private int bagSize;
	
	private int bagQuantity;
	
	@JsonProperty(access = Access.READ_ONLY)
	private LocalDate dateOfDonation;
	
	@JsonProperty(access = Access.READ_ONLY)
	private LocalDate creationDate;
	
	@JsonProperty(access = Access.READ_ONLY)
	private User user;
	
}
