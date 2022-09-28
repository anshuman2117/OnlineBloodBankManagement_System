package com.app.service.BloodInventoryService;


import java.util.List;

import com.app.entities.BloodGroup;
import com.app.entities.BloodInventory;

public interface IBloodInventoryService {

	//method to increase blood bag quantity
	int addBloodInventory(int quantity,int bagSize,BloodGroup bloodGroup);
	
	// method to subtract blood bag quantity
	
	int subBloodInventory(int quantity,int bagSize,BloodGroup bloodGroup);
	
// method to list the blood stock of blood bank
	List<BloodInventory> getBloodStock();  
	
	
	//method to find the blood inventory stock detail by giving  blood group and bagSize
	int findByBloodGroupAndBagSize(BloodGroup bloodGroup,int bag);

	BloodInventory addBloodInventory(BloodInventory inventory);
	
}
