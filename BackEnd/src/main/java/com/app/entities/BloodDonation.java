package com.app.entities;

import java.time.LocalDate;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

/*
+------------------+-------------------------------------------------+------+-----+---------+----------------+
| Field            | Type                                            | Null | Key | Default | Extra          |
+------------------+-------------------------------------------------+------+-----+---------+----------------+
| id               | int                                             | NO   | PRI | NULL    | auto_increment |
| user_id          | int                                             | NO   | MUL | NULL    |                |
| blood_sample_id  | varchar(20)                                     | NO   |     | NULL    |                |
| blood_group      | enum('O+','O-','AB+','AB-','A+','A-','B+','B-') | NO   |     | NULL    |                |
| Bag_size         | int                                             | NO   |     | NULL    |                |
| bag_quantity     | int                                             | NO   |     | NULL    |                |
| date_of donation | date                                            | NO   |     | NULL    |                |
| Creation_date    | date                                            | NO   |     | NULL    |                |
+------------------+-------------------------------------------------+------+-----+---------+----------------+
*/
@Slf4j
@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@Table(name = "blood_donations")
public class BloodDonation extends BaseEntity {
	
	@ManyToOne   // one user can donate many times
	@JoinColumn(name = "user_id")
	private User user;
	
	@Column(name = "blood_sample_id",length = 50,unique = true)
	private String bloodSampleId;
	
	@Column(name = "blood_group",length = 15)
	@Enumerated(EnumType.STRING)
	private BloodGroup bloodGroup;
	
	@Column(name = "bag_size")
	private int bagSize;
	
	@Column(name = "bag_quantity")
	private int bagQuantity;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Column(name = "donation_date")
	private LocalDate dateOfDonation;
	
	

	public BloodDonation(User user, BloodGroup bloodGroup, int bagSize, int bagQuantity
			) {
		super();
		log.info("in the parameterise ctor of blood doantion ");
		this.user = user;
		this.bloodSampleId = bloodGroup.toString()+""+user.getId();
		this.bloodGroup = bloodGroup;
		this.bagSize = bagSize;
		this.bagQuantity = bagQuantity;
		this.dateOfDonation = LocalDate.now();
		
	}

	
	
	
}
