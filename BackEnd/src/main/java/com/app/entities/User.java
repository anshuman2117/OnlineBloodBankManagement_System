package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.validator.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString

@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")

//@DynamicInsert
//@DynamicUpdate
public class User extends BaseEntity {
	
	@Column(length = 25,name="first_name")
	private String firstName;
	
	@Column(length = 25,name = "last_name")
	private String lastName;
	
	@Column(length = 30, unique = true)
	private String email;
	
	@Column(length = 20)
	private String password;
	
	@Column(name = "contact_number",length = 15)
	private String contactNo;
	
	private Integer age;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "Gender",length = 10)
	private Gender gender;
	
	@Column(name = "profile_image")
	private String image;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 30)
	
	private Role role=Role.ROLE_USER;
	
//	public User() {
//		this.role=Role.USER;
//	}
	
}
