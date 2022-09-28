package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entities.DocumentType;
import com.app.entities.Gender;
import com.app.entities.IdentityProof;
import com.app.entities.Role;
import com.app.entities.Status;
import com.app.entities.User;

public interface IIdentityProofDao extends JpaRepository<IdentityProof, Long> {

//	IdentityProof findByUser(Long id);
	
	// method to find the identity_proof  by user id
	@Query(value = "select i from IdentityProof i where i.user.id=:id")
	IdentityProof findByUserId(@Param("id") Long id);
	
	
	// method to return 
	@Query(value = "select i from IdentityProof i where i.user.role=:role")
	List<IdentityProof>  findByUserRole(@Param("role") Role role);
	
	// method to find the identity_proof id by user id
	@Query(value = "select i.id from IdentityProof i where i.user.id=:id")
	Long findIdByUserId(@Param("id") Long id);
	
	
//	@Query(value = "select i from IdentityProof i where i.user.email=:email")
//	IdentityProof findByUserEmail(@Param("email") String email);
//	List<IdentityProof> findByDocumentType(DocumentType documentType);
//	    void findByUser(Long id);
//	IdentityProof findByUniqueIdNumber(String id);
	
	@Modifying
	@Query("Update IdentityProof i set i.documentType=?1,i.uniqueIdNumber=?2 where i.id=?3")
	  int updateIdentityProof(DocumentType documentType,String uniqueIdNumber,Long id);

	
	@Modifying
	@Query("Update IdentityProof i set i.status=?1 where i.user.id=?2")
	int updateIdStatus(Status status,Long id);

	
	   List<IdentityProof> findByStatus(Status status);
	

	
}
