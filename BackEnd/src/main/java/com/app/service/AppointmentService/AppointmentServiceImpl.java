package com.app.service.AppointmentService;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.ModelMap;

import com.app.custom_excpetions.ResourceNotFoundException;
import com.app.dao.IAddressDao;
import com.app.dao.IAppointmentDao;
import com.app.dao.IBloodInventoryDao;
import com.app.dao.IPatientDao;
import com.app.dao.IUserDao;
import com.app.dto.AppointmentDTO;
import com.app.dto.SaveAppointmentDTO;
import com.app.dto.UpdateAppointmentDTO;
import com.app.entities.Appointment;
import com.app.entities.Patient;
import com.app.entities.Status;
import com.app.entities.User;
import com.app.service.IEmailSendingService;
import com.app.service.BloodInventoryService.IBloodInventoryService;

import lombok.extern.slf4j.Slf4j;

@Service
@Transactional
@Slf4j
public class AppointmentServiceImpl implements IAppointmentService {

	@Autowired
	private IAppointmentDao appointmentDao;

	@Autowired
	private IUserDao userDao;
	
	@Autowired
	private ModelMapper mapper;

	@Autowired
	private IBloodInventoryDao bloodInventoryDao;
	
	@Autowired
	private IBloodInventoryService bloodInventoryService;

	@Autowired
	private IEmailSendingService emailSendingService;

	@Autowired
	private IAddressDao addressDao;

	@Autowired
	private IPatientDao patientDao;
	
	
	// method  to return all the appointment(can be used to check history of appointment)
	@Override
	public List<AppointmentDTO> getAllAppointment() {

		return appointmentDao.findAllAppointment()
				.stream()
				.map(i->mapper.map(i, AppointmentDTO.class))
				.collect(Collectors.toList());
	}

	
	
	// methood to return list of all pending  appointment
	@Override
	public List<AppointmentDTO> pendingAppointments() {

		List<AppointmentDTO> appointmentDTOs= appointmentDao.findByStatus(Status.PENDING)
				.stream()
				.map(i -> mapper.map(i, AppointmentDTO.class))
				.collect(Collectors.toList());
//		List<AppointmentDTO> appointmentDTOs=appointmentDao.findByStatus(Status.PENDING);
		
		 return appointmentDTOs;
	}

//	@Override
//	public Appointment saveAppointment(Appointment appointment) {
//		return appointmentDao.save(appointment);
//	}

	@Override
	public boolean updateAppointmentsStatus( UpdateAppointmentDTO appointment) {
		
		String status=appointment.getStatus().toString();
		int updatedsts = 0;
		log.info("status-> " + status + "  appointment-> " + appointment.toString());
		Appointment appointmentById= appointmentDao.findById(appointment.getId()).orElseThrow(()->new ResourceNotFoundException("user does not have user id"+appointment.getId()));
		
		User user=appointmentById.getUser();
		String header = "YOUR APPOINTMENT  REQUEST  " + status;
		log.info("----header -->" + header);
		String messageBody ="";
		if (addressDao.findUserAddress(user.getId()) != null) {
			updatedsts = appointmentDao.updateAppointmentStatus(Status.valueOf(status), appointment.getId());
			log.info("----updatedsts--->  " +updatedsts );
			
			if (status.equalsIgnoreCase("APPROVED")) {
				
				if (updatedsts != 1 || bloodInventoryService.findByBloodGroupAndBagSize(appointmentById.getBloodGroup(),
						appointmentById.getBagSize())<appointmentById.getBagQuantity()) {
					return false;
				}
				log.info("---reducing blood count---> " );
				bloodInventoryDao.subBloodCount(appointmentById.getBagQuantity(), LocalDate.now(), appointmentById.getBagSize(),
						appointmentById.getBloodGroup());
				
				
				
				  log.info("---inside mail sending condition checking ---> " ); header =
				  "YOUR APPOINTMENT  REQUEST  " + status; messageBody =
				  "hello <p><font color=blue>" + user.getFirstName() + "</font></p>" +
				  " your scheduled appointment status has been <font color=blue>" + status +
				  " </font>  details are given bellow ." +
				  "<table width='100%' border='1' align='center'>" + "<tr align='center'>" +
				  "<td><b>requesting person <b></td>" + "<td><font size=10px,color=blue>" +
				  user.getFirstName() + "</font><b></td>" + "</tr>" + "<tr align='center'>" +
				  "<td><b>requesting For<b></td>" + "<td><font size=10px,color=blue>" +
				  appointmentById.getPatient().getName() + "</font><b></td>" + "</tr>" +
				  "<tr align='center'>" + "<td><b>Blood Group<b></td>" +
				  "<td><font size=10px,color=blue>" + appointmentById.getBloodGroup() +
				  "</font><b></td>" + "</tr>" + "<tr align='center'>" +
				  "<td><b>Bag Size<b></td>" + "<td><font size=10px,color=blue>" +
				  appointmentById.getBagSize() + "</font><b></td>" + "</tr>" +
				  "<tr align='center'>" + "<td><b>Bag Quantity<b></td>" +
				  "<td><font size=10px,color=blue>" + appointmentById.getBagQuantity() +
				  "</font><b></td>" + "</tr>" + "<tr align='center'>" +
				  "<td><b>Appointment Schedule Date<b></td>" +
				  "<td><font size=10px,color=blue>" +
				  appointmentById.getAppointmentScheduleDate() + "</font><b></td>" + "</tr>" +
				  "<tr align='center'>" + "<td><b>Appointment Scheduled Status<b></td>" +
				  "<td><font size=10px,color=blue>" +
				  appointmentById.getAppointmentScheduleDate() + "</font><b></td>" + "</tr>"
				  
				  ; log.info("----sending mail ---in approved condition-> " );
				  emailSendingService.sendEmail(user.getEmail(),messageBody, header );
				 
				 
			} else {
				
				
				  log.info("----sending mail ---in rejected condition-> " ); messageBody =
				  messageBody +
				  " <font/> due to some reason .<p> <ul> unavaliability of blood</ul> " +
				  "<ul> you may have not registered your address(please register your address)</ul> </p>"
				  ; emailSendingService.sendEmail(user.getEmail(), messageBody, header );
				 }

		}

		return true;
	}

//	@Override
//	public Appointment appointmentById(Long id) {
//
//		return appointmentDao.findById(id).orElseThrow(() -> new RuntimeException("appointment not found"));
//	}
//
	
	// take appointment by user id
	// take patient id from appointment
	//
	
	
	// getting all the appointments created by a user 
	@Override
	public List<Appointment> getAppointmentByuserId(Long id) {
		log.info("in service method to get all appointment created by user ");
		List<Appointment> list = appointmentDao.findByUserId(id);
				/*.stream().map(i->mapper.map(i, AppointmentDTO.class))
		           .collect(Collectors.toList());*/
		return list;
	}
	
	// creating a  new appointment
	@Override
	public Appointment saveAppointment(Long userid, SaveAppointmentDTO appointment) {
		Appointment appointment2;
		Patient patient = patientDao.findByName(appointment.getName());
		Appointment appointment3 = mapper.map(appointment, Appointment.class);
		User user = userDao.findById(userid).orElseThrow(()->new ResourceNotFoundException("user does not have user id"+userid));
		appointment3.setUser(user); 
		appointment3.setAppointmentCreationDate(LocalDate.now());
		appointment3.setAppointmentScheduleDate(appointment.getAppointmentScheduleDate());
		appointment3.setCenter(appointment.getCenter());
		appointment3.setBagSize(appointment.getBagSize());
		appointment3.setBagQuantity(appointment.getBagQuantity());
		appointment3.setStatus(Status.PENDING);
		appointment3.setBloodGroup(appointment.getBloodGroup());
		
		if(patient!=null) {
			appointment3.setPatient(patient);
//			appointment3.setUser(user); 
//			appointment3.setAppointmentCreationDate(LocalDate.now());
//			appointment3.setAppointmentScheduleDate(appointment.getAppointmentScheduleDate());
//			appointment3.setCenter(appointment.getCenter());
//			appointment3.setBagSize(appointment.getBagSize());
//			appointment3.setBagQuantity(appointment.getBagQuantity());
//			appointment3.setStatus(Status.PENDING);
//			appointment3.setBloodGroup(appointment.getBloodGroup());
			 
			appointment2 = appointmentDao.save(appointment3);
			
		}
		else {
			Patient save = patientDao.save(mapper.map(appointment, Patient.class));
			appointment3.setPatient(save);
//			appointment3.setUser(user); 
			 appointment2 = appointmentDao.save(appointment3);
		
		}
		return appointment2;
	}

	

}
