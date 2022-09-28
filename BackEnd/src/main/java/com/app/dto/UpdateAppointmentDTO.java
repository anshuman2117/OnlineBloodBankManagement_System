package com.app.dto;

import javax.validation.constraints.NotEmpty;

import com.app.entities.Status;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UpdateAppointmentDTO {
	
	@NotEmpty
private Long id;
	
	@NotEmpty
private Status status;
	
	
}
