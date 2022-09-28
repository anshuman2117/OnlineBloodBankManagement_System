package com.app.dao;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.dto.UserDTO;
import com.app.entities.Gender;
import com.app.entities.Role;
import com.app.entities.User;

public interface IUserDao extends JpaRepository<User, Long>{

	
	public List<User> findByRole(Role role);
	
 // to get the user details by email and password
    public  User findByEmailAndPassword(String email,String password);
   
public User findByEmail(String email);

@Modifying
@Query("Update User u set u.firstName=?1,u.lastName=?2,u.contactNo=?3,u.age=?4,u.gender=?5,u.image=?6 where u.email=?7")
  int updateUserDetails(String firstName,String lastName,String contactNo,Integer age,Gender gender,String image,String email);


}









//@Query(value = "select users.id,age,contact_number as contactNo,email,first_name as firstName,gender,profile_image as image,last_name as lastName,document_id as uniqueIdNumber,document_type as documentType,password  from users inner join identity_proofs on users.id=identity_proofs.user_id and users.id=1",nativeQuery = true)


//@Query(value ="select users.id,age,contact_number,email,first_name,gender,profile_image,last_name,document_id,document_type,verification_status from users inner join identity_proofs on users.id=identity_proofs.user_id and users.id=?1",nativeQuery = true )
//

//@Query("select new UserDTO(u.id,u.contactNo,u.firstName,u.gender,u.image,u.lastName,u.uniqueIdNumber,u.documentType,u.password)  from users u inner join identity_proofs i on u.id=i.user_id and u.id=1")
//UserDTO findByIdFullDetails(Long id);