package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entities.BloodDonation;

public interface IBloodDonationDao extends JpaRepository<BloodDonation, Long> {
/*
 *  1. save/update/persist blood donation--> by inherited given method
 *     
 *  2. search particular donation by a user id
 *  
 *  3.  get all blood donation
 */
	@Query("select b  from  BloodDonation b  where b.user.id=?1")
	List<BloodDonation> getBloodDonationByUser(Long id);
	
	@Query("delete from BloodDonation b where b.user.id=?1")
	int deleteBloodDonationbyUser(Long id);
	
//	BloodDonation findByBlood_sample_id(String blood_sample_id);
//	BloodDonation   findByBloodSampleId(String sampleId);
}
