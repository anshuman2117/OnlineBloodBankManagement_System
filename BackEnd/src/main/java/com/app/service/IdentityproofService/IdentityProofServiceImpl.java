package com.app.service.IdentityproofService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IIdentityProofDao;
import com.app.dto.UserDTO;
import com.app.entities.IdentityProof;
import com.app.entities.Status;

@Service
@Transactional
public class IdentityProofServiceImpl implements IIdentityProofService {

	@Autowired
	private IIdentityProofDao identityProofDao;
	
	// method to save the id proof data to database
	@Override
	public IdentityProof saveIdentityProof(IdentityProof identityProof) {
		return identityProofDao.save(identityProof);
	}

	// to save/update the identity proof
	@Override
	public IdentityProof saveIdentityProof(Long id, IdentityProof identityProof) {
		IdentityProof transientData = identityProofDao.findByUserId(id); // retrieving old data from database
		if (transientData != null) {
			if (identityProof.getDocumentType() != null)
				transientData.setDocumentType(identityProof.getDocumentType());
			if (identityProof.getUniqueIdNumber() != null)
				transientData.setUniqueIdNumber(identityProof.getUniqueIdNumber());

			return identityProofDao.saveAndFlush(transientData); // updating id proof related data to database
		} else
			return  identityProofDao.saveAndFlush(identityProof);
//			throw new RuntimeException("wrong user id sent by user");
//    	   throw new UserHandlingException("invalid Product Details ", HttpStatus.FORBIDDEN);
	}

//	to get  the identity proof by user name for:
	@Override
	public IdentityProof getIdentityProofByUserId(Long id) {
		IdentityProof byUserId = identityProofDao.findByUserId(id);
		return byUserId;
	}

	@Override
	public List<IdentityProof> allIdentityProof() {
		System.out.println("get all id----------> ");
		List<IdentityProof> findAll = identityProofDao.findAll();
		System.out.println("list=> " + findAll.toString());
		return findAll;
	}

	@Override
	public IdentityProof getIdentityProofById(Long id) {

		return identityProofDao.findById(id).orElseThrow(() -> new RuntimeException("no identity proof there"));
	}

	@Override
	public String deleteIdentityProof(Long id) {
		String mesg="user with id "+id+" could not be removed";
		Long id2 = identityProofDao.findIdByUserId(id);
		if (identityProofDao.existsById(id2)) {
			identityProofDao.deleteById(id2);
			mesg= "User removed successfully with UserId : "+id;
		}
		return mesg;
	}

	@Override
	public String updateIdStatus(Status status,Long proof) {
		String mesg="identity proof status updation failed!!!!!!";
		int idStatus = identityProofDao.updateIdStatus(status,proof);
		if(idStatus==1)
			mesg="updated successfully";
			
		return mesg;
	}

	@Override
	public List<IdentityProof> listPendingStatus() {

	    return identityProofDao.findByStatus(Status.PENDING);
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//	@Override
//	public List<IdentityProof> getAllByDocType(DocumentType documentType) {
//		// TODO Auto-generated method stub
//		return identityProofDao.findByDocumentType(documentType);
//	}
	
	

}
