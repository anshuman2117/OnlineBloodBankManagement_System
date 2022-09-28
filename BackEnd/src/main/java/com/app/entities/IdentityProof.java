package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.hibernate.validator.constraints.UniqueElements;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/*
+---------------------+-------------------------------------------+------+-----+---------+----------------+
| Field               | Type                                      | Null | Key | Default | Extra          |
+---------------------+-------------------------------------------+------+-----+---------+----------------+
| id                  | int                                       | NO   | PRI | NULL    | auto_increment |
| Document_type       | enum('aadhar_card','PAN_card','Passport') | NO   |     | NULL    |                |
| Document_uniq_id    | varchar(25)                               | NO   | UNI | NULL    |                |
| user_id             | int                           		      | NO   | UNI | NULL    |                |
| verification_status | enum('done','')                		      | NO   |     | NULL    |                |
+---------------------+-------------------------------------------+------+-----+---------+----------------+
*/

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@Table(name = "identity_proofs")
public class IdentityProof extends BaseEntity{
	
	@JoinColumn(name = "user_id",unique = true/* ,updatable = false */)
	@OneToOne
//	@Cascade(CascadeType.ALL)
	
	private User user;
	
	@Column(name = "document_type",length = 15)
	@Enumerated(EnumType.STRING)
	private DocumentType documentType;
	
	@Column(name = "document_id",length = 15,unique = true)
	private String uniqueIdNumber;
	
	@Column(name = "verification_status",length = 15)
	@Enumerated(EnumType.STRING)
	private Status status=Status.PENDING;

	public IdentityProof(User user, DocumentType document_type, String documemnt_uniqid_number) {
		super();
		this.user = user;
		this.documentType = document_type;
		this.uniqueIdNumber = documemnt_uniqid_number;
		this.status = Status.PENDING;
		
	}
	
	

}
