package com.app.service.BloodDonationService;

import java.util.List;

import com.app.dto.BloodDonationDTO;
import com.app.entities.BloodDonation;

public interface IBloodDonationService {

	// create a new blood donation
	BloodDonationDTO createBloodDonation(Long id,BloodDonationDTO donation);

	//  Getting all the blood donation   (for admin)
    List<BloodDonation> getAllDonation();
    
	// listing all the blood donation by a user
    List<BloodDonation> getAllDonationByUser(Long id);

    // delete blood donation  (by admin incase of removal of amdin)
    String DeleteDonation(Long id);


    
   // fetching blood donation by  blood sample id
//    BloodDonation fetchBySampleId(String sampleId);

}
