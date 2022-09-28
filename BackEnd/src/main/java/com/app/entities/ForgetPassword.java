package com.app.entities;
import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/*+-----------------+----------+------+-----+---------+----------------+
| Field           | Type     | Null | Key | Default | Extra          |
+-----------------+----------+------+-----+---------+----------------+
| id              | int      | NO   | PRI | NULL    | auto_increment |
| userid          | int      | NO   | UNI | NULL    |                |
| otp_code        | int      | NO   |     | NULL    |                |
| otp_expiry_time | datetime | NO   |     | NULL    |                |
+-----------------+----------+------+-----+---------+----------------+
*/

@Getter
@Setter
@ToString
@NoArgsConstructor

@Entity
@Table(name = "forget_Passwords")
public class ForgetPassword extends BaseEntity {
	
	@JoinColumn(name = "user_id")
	@OneToOne
	private User user;
	
	@Column(name= "OTP")
	private int otp;
	
	@Column(name= "OTP_expiry_time")
	private LocalDateTime otpExpiryTime;

	public ForgetPassword(User user, int otp, LocalDateTime otp_expiry_time) {
		super();
		this.user = user;
		this.otp = otp;
		this.otpExpiryTime = otp_expiry_time;
	}
	
	
	
}
