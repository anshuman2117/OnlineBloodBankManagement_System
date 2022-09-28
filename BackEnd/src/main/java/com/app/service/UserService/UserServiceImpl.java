package com.app.service.UserService;

import java.io.File;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.app.custom_excpetions.ResourceNotFoundException;
import com.app.dao.IIdentityProofDao;
import com.app.dao.IUserDao;
import com.app.dto.AddUserByAdminDTO;
import com.app.dto.UserDTO;
import com.app.entities.Gender;
import com.app.entities.IdentityProof;
import com.app.entities.Role;
import com.app.entities.Status;
import com.app.entities.User;
import com.app.service.IEmailSendingService;
import com.app.service.ImageHandlingService;
import com.app.service.IdentityproofService.IIdentityProofService;

import lombok.extern.slf4j.Slf4j;

@Service
@Transactional
@Slf4j
public class UserServiceImpl implements IUserService {
	@Value("${file.upload.location}")
	private String baseFolder;
	
	@Autowired
	private IUserDao userDao;
	
	@Autowired
	private IEmailSendingService emailSendingService;
	
	@Autowired
	private IIdentityProofService proofService;
	
	@Autowired
	private IIdentityProofDao proofDao;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private ImageHandlingService imageHandlingService;
	
	@Autowired
	private BCryptPasswordEncoder encoder;
	
	
	@Override
	public List<IdentityProof> getAllUsers() {
		
		// in case of pagination we can apply pagination
//		int pagesize=5;
//		int pageno=2;
//		Pageable p=PageRequest.of(pageno, pagesize);// in case of sorting also(sortby use overloaded method)
//		Page<User> page = userDao.findAll(p);
//		List<User> content = page.getContent();
		
		
		
		return  proofDao.findByUserRole(Role.ROLE_USER);
	}
	
	
	// by this method we can retrieve the data of user as well as identity proof data aslo, by join querry
	@Override
	public User getUser(Long id) {
		User user= userDao.findById(id).orElseThrow(()-> new RuntimeException("no user found"));
//	System.out.println("----------data---------");
//	System.out.println(" "+user.toString());
		return user;
	}

//	@Override
//	public UserDTO getUser(Long id) {
//		return userDao.findById(id)
//				.orElseThrow(() -> new ResourceNotFoundException("Invalid User id " + id));
//	}
	
	@Override
	public UserDTO addUser(UserDTO userdto) {
		
		if(userDao.findByEmail(userdto.getEmail())!=null) {
			log.info("  in not null value  user service impl  ");
			return null;
		}
		else
		{
			User user=modelMapper.map(userdto, User.class);  // Mapping userdto to user
			user.setPassword(encoder.encode(user.getPassword()));
			user.setRole(Role.ROLE_USER);
			User user1 = userDao.save(user);
			IdentityProof identityProof=modelMapper.map(userdto, IdentityProof.class);
			identityProof.setUser(user1);
			IdentityProof proof = proofService.saveIdentityProof(identityProof);
			UserDTO userDtoReturn= modelMapper.map(user1, UserDTO.class);              //mapping return user data to user dto
			userDtoReturn.setUniqueIdNumber(proof.getUniqueIdNumber());                // setting id number with userdto
			userDtoReturn.setDocumentType(proof.getDocumentType());  
			
			/*
			 * if(user1!=null && proof!=null) { String
			 * messageBody="Thankyou <h3> "+user1.getFirstName()
			 * +" </h3> for registering with us" +
			 * "from the given link you can directly visit to us:<a href='www.bloodForLives.com'>OBBMS</a>"
			 * ; String header="Welcome "+user1.getFirstName()+"!!!";
			 * emailSendingService.sendEmail(user1.getEmail(), messageBody, header); }
			 */
			
			return userDtoReturn;
		}
		
		
	}
	
	
	@Override
	public User addUserByAdmin(AddUserByAdminDTO userdto) {
		User user=modelMapper.map(userdto, User.class);  // Mapping userdto to user
		user.setPassword(encoder.encode(user.getFirstName()+""+user.getAge()));
		user.setRole(Role.ROLE_USER);
		User user1 = userDao.save(user);
		IdentityProof identityProof=modelMapper.map(userdto, IdentityProof.class);
		identityProof.setUser(user1);
		identityProof.setStatus(Status.APPROVED);
		IdentityProof proof = proofService.saveIdentityProof(identityProof);
		
		
		if(user1!=null && proof!=null) {
			String messageBody="Hey <h3> "+user1.getFirstName()+" </h3> you are registered with us successfully"
					+" your pre defind password is <b>your first name+your age</b>i.e.<i><b>( "
					+user1.getFirstName()+user1.getAge()+"</b></i><p></p>"
					+" visit us with your credentials "
					+"<p>email:<p style='color:red;'>"+user1.getEmail()+"</p>"
					+"<p>pass :<p style='color:blue;'>"+user1.getPassword()+"</p>"
					+ "from the given link you can directly visit to us:<a href='www.bloodForLives.com'>OBBMS</a>";
			String header="Welcome "+user1.getFirstName()+"!!!";
			emailSendingService.sendEmail(user1.getEmail(), messageBody, header);
		}
		return user1;
	}
	
	
	@Override
	public User updateUser(Long id,User user) {
System.out.println("user--->   "+user);
		User findByEmail = userDao.findById(id).orElseThrow(()->new RuntimeException("user does not exist!!"));
		
			if(user.getFirstName()!=null)
			findByEmail.setFirstName(user.getFirstName());
			if(user.getLastName()!=null)
				findByEmail.setLastName(user.getLastName());
			if(user.getAge()!=null)
				findByEmail.setAge(user.getAge());
			if(user.getContactNo()!=null)
				findByEmail.setContactNo(user.getContactNo());
			if(user.getGender()!=null)
				findByEmail.setGender(user.getGender());
			if(user.getImage()!=null)
				findByEmail.setImage(user.getImage());
			
				userDao.saveAndFlush(findByEmail);
				
			return findByEmail;
	}
	
	
	@Override
	public String deleteUser(Long id) {
		String message= "Deletion of User failed";
		if (userDao.existsById(id)) {
			userDao.deleteById(id);
			message= "User removed successfully with UserId : "+id;
		}
		return message;	
	}

	// method to return the user data by providing email and password
	@Override
	public User getByEmailAndPassword(String email, String password) {
		
		return userDao.findByEmailAndPassword(email, password);
		 
	}


	


	@Override
	public User storeImage(Long id, MultipartFile imageFile) {
		User findById = userDao.findById(id).orElseThrow(()->new ResourceNotFoundException("used does not exists!!!"));
		
		String completePath=baseFolder+File.separator+findById.getFirstName()+findById.getId()+".jpeg";
		imageHandlingService.uploadImage(completePath, imageFile);
		findById.setImage(completePath);
		return userDao.save(findById);
	}


	

	@Override
	public byte[] restoreImage(Long id) {
		User user = userDao.findById(id).orElseThrow(()->new ResourceNotFoundException("user does not exist!! "));
		
        String completePath = user.getImage();
		
		return imageHandlingService.downlaodImage(completePath);
	}


	@Override
	public UserDTO getByEmailId(String name) {
		User user = userDao.findByEmail(name);
		
		return modelMapper.map(user, UserDTO.class);
	}


	
	
	

}
