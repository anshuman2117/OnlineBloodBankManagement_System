package com.app.dto;



import com.app.entities.User;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AddressDTO {

	@JsonProperty(access = Access.READ_ONLY)
	private User user;
	
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	
	private String city;
	
	private String state;
	
	private int pincode;
	
	private String address;
	
	
	
}
