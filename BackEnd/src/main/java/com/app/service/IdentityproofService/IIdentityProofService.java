package com.app.service.IdentityproofService;

import java.util.List;

import com.app.dto.UserDTO;
import com.app.entities.DocumentType;
import com.app.entities.IdentityProof;
import com.app.entities.Status;

public interface IIdentityProofService {

//	save a user's id card details
	public IdentityProof saveIdentityProof(IdentityProof identityProof);
	
	//updating identityproof data
	IdentityProof saveIdentityProof(Long id,IdentityProof identityProof);
	
//	get users identity card details by id 
	IdentityProof getIdentityProofByUserId(Long id);
	
	List<IdentityProof> allIdentityProof();
	
//	List<IdentityProof> getAllByDocType(DocumentType documentType);
	
	IdentityProof getIdentityProofById(Long id);
	
	String deleteIdentityProof(Long id);

	 String updateIdStatus(Status status,Long id);

	public List<IdentityProof> listPendingStatus(); 
		
	
	
}
