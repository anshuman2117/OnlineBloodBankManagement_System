package com.app.service.AppointmentService;

import java.util.List;
import java.util.Optional;


import com.app.dto.AppointmentDTO;
import com.app.dto.SaveAppointmentDTO;
import com.app.dto.UpdateAppointmentDTO;
import com.app.entities.Appointment;
import com.app.entities.Patient;
import com.app.entities.Status;

public interface IAppointmentService {

//	to get all the scheduled appointments
	public List<AppointmentDTO> getAllAppointment();

//	to get the appointment status
	public List<AppointmentDTO> pendingAppointments();
	
//	to save/persist the appointments
//	 Appointment saveAppointment(Appointment appointment);
	 
//	 Appointment saveAppointment(Long userid,Appointment appointment,Patient patient);
	 Appointment saveAppointment(Long userId, SaveAppointmentDTO appointment);

//	to approve the  appointments
	public boolean updateAppointmentsStatus(UpdateAppointmentDTO appointment);
	
//    Appointment appointmentById(Long id);

	public List<Appointment> getAppointmentByuserId(Long id);

	
}
