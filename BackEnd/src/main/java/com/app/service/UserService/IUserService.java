package com.app.service.UserService;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.AddUserByAdminDTO;
import com.app.dto.UserDTO;
import com.app.entities.IdentityProof;
import com.app.entities.User;

public interface IUserService {
	// to get the list of all registered user
	public List<IdentityProof> getAllUsers();

	// to get the user details by giving email and password ->for login
	public User getByEmailAndPassword(String email, String password);

//      to get the user  details of a particular user by id
	public User getUser(Long id);

//	  to add a new user
	public UserDTO addUser(UserDTO user);
	
	public User addUserByAdmin(AddUserByAdminDTO user);

//	  	  to update / modify  the user detail
	public User updateUser(Long id,User user);
	
//	  to delete the user
	public String deleteUser(Long id);

	public byte[] restoreImage(Long id);

	public User storeImage(Long id, MultipartFile imageFile);

	public UserDTO getByEmailId(String name);

	
}
