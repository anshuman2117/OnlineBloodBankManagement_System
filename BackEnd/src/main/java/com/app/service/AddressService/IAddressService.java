package com.app.service.AddressService;

import java.util.List;

import com.app.dto.AddressDTO;
import com.app.entities.Address;

public interface IAddressService {
	
	public List<AddressDTO> getAllAddresses();
	
	public List<AddressDTO> getAllAddressofUser(Long id/* ,Address address */);
	
	public Address addAddress(Long id,AddressDTO address);
//	public Address addAddress(Address address);
	
	public Address updateAddress(Address address);
	
	public String deleteAddress(Long id);

	public /*List<*/Address defaultUsersAddress(Long id/* ,Address address */);

	
}
