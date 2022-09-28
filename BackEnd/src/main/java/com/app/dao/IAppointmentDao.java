package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entities.Appointment;
import com.app.entities.Status;
import com.app.entities.User;

public interface IAppointmentDao extends JpaRepository<Appointment,Long> {

	
	// method to get the current status of  scheduled appointment status of users
	@Query("select a from Appointment a inner join fetch a.patient p inner join fetch a.user u where a.status =?1")
//	@Query(value="select a from Appointment a  inner join fetch a.user u where a.status =?1")
	
	List<Appointment> findByStatus(Status status);
//	@Query("select a from Appointment a where a.status ='PENDING'")
//	public List<Appointment>  getPendingAppointment();
	
	
	@Query("select a from Appointment a  inner join fetch a.user u inner join fetch a.patient")
	List<Appointment> findAllAppointment();
	
	
	//method to set the scheduled appointment status of users by admin
	@Modifying
	@Query(value = "UPDATE Appointment a SET a.status =:sts where a.id=:id")
	public int updateAppointmentStatus(@Param("sts") Status status,@Param("id") Long id);
	
	@Query(value = "select a from Appointment a inner join fetch a.user u inner join fetch a.patient where a.user.id=?1")
	public List<Appointment> findByUserId(Long id);
	
	
}
