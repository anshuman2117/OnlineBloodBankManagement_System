package com.app.dao;

import java.time.LocalDate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.BloodGroup;
import com.app.entities.BloodInventory;

public interface IBloodInventoryDao extends JpaRepository<BloodInventory, Long> {

	@Modifying
	@Query(value = "Update BloodInventory b set b.bagQuantity=b.bagQuantity+?1,b.lastUpdatedDate=?2 where b.bagSize=?3 and b.bloodGroup=?4")
	  int addBloodCount(int quantity,LocalDate lastUpdatedDate,int bagSize,BloodGroup bloodGroup);
	
	
	@Modifying
	@Query(value = "Update BloodInventory b set b.bagQuantity=b.bagQuantity-?1,b.lastUpdatedDate=?2 where b.bagSize=?3 and b.bloodGroup=?4")
	  int subBloodCount(int quantity,LocalDate lastUpdatedDate,int bagSize,BloodGroup bloodGroup);
	
	
BloodInventory	findByBloodGroupAndBagSize(BloodGroup bloodGroup,int bagSize);
	
	
}
