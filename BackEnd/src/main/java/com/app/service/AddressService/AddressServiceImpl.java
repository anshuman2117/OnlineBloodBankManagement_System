package com.app.service.AddressService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_excpetions.ResourceNotFoundException;
import com.app.dao.IAddressDao;
import com.app.dao.IUserDao;
import com.app.dto.AddressDTO;
import com.app.dto.AppointmentDTO;
import com.app.entities.Address;
import com.app.entities.Status;
import com.app.entities.User;

@Service
@Transactional
public class AddressServiceImpl implements IAddressService {

	@Autowired
	private IAddressDao addressDao;

	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private IUserDao userDao;

	@Override
	public List<AddressDTO> getAllAddresses() {

		return addressDao.findAll().stream().map(i -> mapper.map(i, AddressDTO.class)).collect(Collectors.toList());

//		appointmentDao.findByStatus(Status.PENDING).stream()
//		.map(i->mapper.map(i,AppointmentDTO.class)).collect(Collectors.toList());

	}

	@Override
	public List<AddressDTO> getAllAddressofUser(Long id/* ,Address address */) {

		return addressDao.findUserAddress(id).stream()
				.map(i -> mapper.map(i, AddressDTO.class))
				.collect(Collectors.toList());
	}

	@Override
	public /* List< */Address defaultUsersAddress(Long id/* ,Address address */) {

		
		return addressDao.findByUserAndIsDefault(id);
		
//		return addressDao.findByUserAndIsDefault(id, true).stream()
//				.map(i -> mapper.map(i, AddressDTO.class))
//				.collect(Collectors.toList());
	}

	@Override
	public Address addAddress(Long id, AddressDTO address) {
		User user = userDao.findById(id).orElseThrow(()->new ResourceNotFoundException("user not found!!!")); 
		Address address2=mapper.map(address, Address.class);
        address2.setUser(user);
		return addressDao.saveAndFlush(address2);
	}

	@Override
	public Address updateAddress(Address address) {
      
		return addressDao.saveAndFlush(address);
	}

	@Override
	public String deleteAddress(Long id) {
		//here we are taking input of user id
		if(addressDao.deleteAddress(id)>= 1);
		
		return "address deleted successfully";
		

	}

}
