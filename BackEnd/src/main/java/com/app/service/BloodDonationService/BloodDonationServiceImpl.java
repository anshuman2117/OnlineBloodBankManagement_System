package com.app.service.BloodDonationService;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZonedDateTime;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_excpetions.ResourceNotFoundException;
import com.app.dao.IBloodDonationDao;
import com.app.dao.IUserDao;
import com.app.dto.BloodDonationDTO;
import com.app.entities.BloodDonation;
import com.app.service.BloodInventoryService.IBloodInventoryService;

import lombok.extern.slf4j.Slf4j;
@Service
@Transactional
@Slf4j
public class BloodDonationServiceImpl implements IBloodDonationService {

	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private IUserDao userDao;
	
	@Autowired
	private IBloodDonationDao bloodDonationDao;
	
	@Autowired
	private IBloodInventoryService bloodInventoryService;
	
	
	// method to create a blood donation
	@Override
	public BloodDonationDTO createBloodDonation(Long id,BloodDonationDTO donation) {
		BloodDonationDTO donationDTO=null;
		BloodDonation transientData=mapper.map(donation, BloodDonation.class);
	  log.info("incoming data-> "+transientData);
		log.info(" transient mapped data "+transientData);
		transientData.setUser(userDao.findById(id).orElseThrow(()->new ResourceNotFoundException("given user does not exist")));
		transientData.setBloodSampleId(donation.getBloodGroup()+""+new Date().getTime());
		transientData.setDateOfDonation(LocalDate.now());
		BloodDonation persisted = bloodDonationDao.saveAndFlush(transientData);
		
		if(persisted!=null) {
			 donationDTO = mapper.map(persisted, BloodDonationDTO.class);
			int addBloodInventory = bloodInventoryService.addBloodInventory(donation.getBagQuantity(),donation.getBagSize(),donation.getBloodGroup());
			log.info("updated count "+addBloodInventory);
		
		}
			return donationDTO;
	}

	@Override
	public List<BloodDonation> getAllDonation() {
		
		return bloodDonationDao.findAll();
	}

	@Override
	public List<BloodDonation> getAllDonationByUser(Long id) {
		
		return bloodDonationDao.getBloodDonationByUser(id);
	}

	@Override
	public String DeleteDonation(Long id) {
		
		 bloodDonationDao.deleteBloodDonationbyUser(id);
		 return "BloodDonation data  deleted successfully";
	}

	

	
	// fetching the blood donation details by  blood sample id
//	@Override
//	public BloodDonation fetchBySampleId(String sampleId) {
//		
//		return bloodDonationDao.findByBloodSampleId(sampleId);
//	}

}
