package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Patient;

@Repository
public interface IPatientDao extends JpaRepository<Patient, Long> {
/*
 * 1. get all patient details
 * 
 * 2. get a particular patient details
 * 
 * 3. save/persist/update patient details
 * 
 */
	Patient  findByName(String name);

	
}
