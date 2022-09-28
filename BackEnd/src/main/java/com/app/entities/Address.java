package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/*+-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| id          | int          | NO   | PRI | NULL    | auto_increment |
| entity_type | enum('')     | NO   |     | NULL    |                |
| entity_id   | int          | NO   |     | NULL    |                |
| city        | varchar(20)  | NO   |     | NULL    |                |
| state       | varchar(20)  | NO   |     | NULL    |                |
| pincode     | int          | NO   |     | NULL    |                |
| address     | varchar(255) | NO   |     | NULL    |                |
| is_default  | tinyint      | NO   |     | NULL    |                |
+-------------+--------------+------+-----+---------+----------------+
*/
@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@Table(name = "addresses")
@DynamicInsert
@DynamicUpdate
public class Address extends BaseEntity {
		
	
	@ManyToOne /* (fetch = FetchType.LAZY ) */
	@JoinColumn(name = "user_id")
	private User user;
	
	@Column(length = 20)
	private String city;
	
	
	@Column(length = 20)
	private String state;
	

	private int pincode;
	
	@Column(name = "address")
	private String address;
	
	

	public Address( User user, String city, String state, int pincode,
			String address) {
		super();
		//this.user_id = user_id;
		
		this.user=user;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
		this.address = address;
		
	}
	
	
	
}
