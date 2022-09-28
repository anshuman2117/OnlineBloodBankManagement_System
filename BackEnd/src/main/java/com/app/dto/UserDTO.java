package com.app.dto;

import javax.validation.constraints.Digits;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.UniqueElements;
import org.springframework.format.annotation.NumberFormat;

import com.app.entities.DocumentType;
import com.app.entities.Gender;
import com.app.entities.Role;
import com.app.entities.Status;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class UserDTO {

	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	
	@NotBlank(message = "First name must be supplied")
	private String firstName;
	
	private String lastName;
	
	@NotBlank
	@Email(message = "Invalid Email")
	private String email;
	
	@JsonProperty(access = Access.WRITE_ONLY) // for de-serial only
	private String password;
	
	@Digits(message = "Number should contain 10 digits.", fraction = 0, integer = 10)
	private String contactNo;
	
	@NumberFormat
	private Long age;
	
	@NotBlank
	private Gender gender;
	
	@JsonProperty(access = Access.READ_ONLY)
	private String image;//serialisation only
	
	private DocumentType documentType;
	
	@UniqueElements
	private String uniqueIdNumber;
	
	@JsonProperty(access = Access.READ_ONLY)
	Status status ;
	
	@JsonProperty(access = Access.READ_ONLY)
	private Role role;
	
	public UserDTO(){
		this.status=Status.PENDING;
//		System.out.println("------testing flow---(in dto no--)--> "+status);
	}

	
	
	
}
