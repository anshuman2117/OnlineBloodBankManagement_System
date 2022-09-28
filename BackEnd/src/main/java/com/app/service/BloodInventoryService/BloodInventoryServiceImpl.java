package com.app.service.BloodInventoryService;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IBloodInventoryDao;
import com.app.entities.BloodGroup;
import com.app.entities.BloodInventory;

import lombok.extern.slf4j.Slf4j;

@Service
@Transactional
@Slf4j
public class BloodInventoryServiceImpl implements IBloodInventoryService {

	@Autowired
	private IBloodInventoryDao bloodInventoryDao;
	
	@Override
	public int addBloodInventory(int quantity,int bagSize,BloodGroup bloodGroup) {
		int count = bloodInventoryDao.addBloodCount(quantity, LocalDate.now(), bagSize, bloodGroup);
		return count;
	}

	@Override
	public int subBloodInventory(int quantity,int bagSize,BloodGroup bloodGroup) {
		return bloodInventoryDao.subBloodCount(quantity, LocalDate.now(),bagSize, bloodGroup);
	}

	@Override
	public int findByBloodGroupAndBagSize(BloodGroup bloodGroup, int bag) {
		BloodInventory groupAndBagSize = bloodInventoryDao.findByBloodGroupAndBagSize(bloodGroup, bag);
		return groupAndBagSize.getBagQuantity();
	}

	
//     method to fetch the blood stock of blood inventory
	@Override
	public List<BloodInventory> getBloodStock() {
		// TODO Auto-generated method stub
		return bloodInventoryDao.findAll();
	}

	@Override
	public BloodInventory addBloodInventory(BloodInventory inventory) {
		   this.addBloodInventory(inventory.getBagQuantity(), inventory.getBagSize(), inventory.getBloodGroup());
		return bloodInventoryDao.findByBloodGroupAndBagSize(inventory.getBloodGroup(), inventory.getBagSize());
	}

	
}
