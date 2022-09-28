package com.app.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddressDTO;
import com.app.entities.Address;
import com.app.service.AddressService.IAddressService;

@RestController
@RequestMapping("/address")
@CrossOrigin("http://localhost:3000")
public class AddressController {

	@Autowired
	private IAddressService addressService;
	
	

	public AddressController() {
		System.out.println("in ctor of " + getClass());
	}

	@GetMapping("/{id}")
	public ResponseEntity<List<AddressDTO>> getAllAddressofUser(
			@PathVariable Long id/* , @RequestBody Address address1 */) {
    
		List<AddressDTO> addressDTO = addressService.getAllAddressofUser(id/* ,address1 */);
//		 AddressDTO addressDTO = mapper.map(addresses, AddressDTO.class);
		return ResponseEntity.ok(addressDTO);
	}

//	@GetMapping("/default/{id}")
//	public ResponseEntity<?> defaultUsersAddress(@PathVariable Long id/* , @RequestBody Address address1 */) {
//		/* List< */Address/*DTO>*/ address = addressService.defaultUsersAddress(id/* , address1 */);
//		return ResponseEntity.ok(address);
//	}
	
	@PostMapping("/add_address/{id}")
	public ResponseEntity<?> addAddress(@PathVariable Long id, @RequestBody AddressDTO dto){
		
		return new ResponseEntity<>(addressService.addAddress(id, dto),HttpStatus.CREATED);
	}
	
	
	@PutMapping("/update_address/{id}")
	public ResponseEntity<?> updateAddress(@PathVariable Long id, @RequestBody Address dto){
//		System.out.println("getting a request");
//		addressService.updateAddress(dto);
		return new ResponseEntity<>(addressService.updateAddress(dto),HttpStatus.CREATED);
	}
	
}
