package com.app.dao;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Address;
import com.app.entities.User;

public interface IAddressDao extends JpaRepository<Address,Long>{

//	List<Address> findByUser(User user);
//	
//	List<Address> findByUserAndIsDefault(User user,boolean isDefault);
	
	@Query(value = "select a from Address a where a.user.id=?1")
	Address findByUserAndIsDefault(Long id);
	
	@Query(value = "select a from Address a where a.user.id=?1")
	 List<Address> findUserAddress(Long id);
	
	@Modifying
	@Query("delete from Address a where a.user.id=?1")
	int deleteAddress(Long id);
}
