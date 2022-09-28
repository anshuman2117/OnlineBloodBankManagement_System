package com.app.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.sql.Time;
import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.app.dao.IUserDao;
import com.app.entities.User;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class ImageHandlingServiceImpl implements ImageHandlingService {

	
//	@Autowired
//	private IUserDao userDao;

//	@Override
//	public User storeImage(Long id, MultipartFile imageFile) {
//		// get user detail by id
//		User findById = userDao.findById(id).orElseThrow(() -> new RuntimeException("------user not found-----"));
//		String completePath = baseFolder + File.separator + findById.getFirstName() + findById.getId()+".jpg";
//		try {
//			Files.copy(imageFile.getInputStream(), Paths.get(completePath), StandardCopyOption.REPLACE_EXISTING);
//			findById.setImage(completePath);
//			return userDao.save(findById);
//		} catch (Exception e) {
//			throw new RuntimeException();
//		}
//	}
	
	
	@Override
	public void uploadImage(String completePath, MultipartFile imageFile) {
		log.info("--in image handling services:->  complete path--> "+completePath);
		
		
		// get user detail by id
//		User findById = userDao.findById(id).orElseThrow(() -> new RuntimeException("------user not found-----"));
//		String completePath = baseFolder + File.separator + findById.getFirstName() + findById.getId()+".jpg";
		try {
			Files.copy(imageFile.getInputStream(), Paths.get(completePath), StandardCopyOption.REPLACE_EXISTING);
//			findById.setImage(completePath);
//			return userDao.save(findById);
		} catch (Exception e) {
			throw new RuntimeException();
		}
	}
	
	

//	public byte[] restoreImage(Long id)   {
//		// get user detail by id
//				User findById = userDao.findById(id).orElseThrow(() -> new RuntimeException("------user not found-----"));
//			String fullpath=findById.getImage();
//			
//				try {
//					return	Files.readAllBytes(Paths.get(fullpath));
//				} catch (IOException e) {
//					// TODO Auto-generated catch block
//					e.printStackTrace();
//				}
//			return null;
//	}
	public byte[] downlaodImage(String fullpath)   {
		// get user detail by id
//		User findById = userDao.findById(id).orElseThrow(() -> new RuntimeException("------user not found-----"));
//		String fullpath=findById.getImage();
		
		try {
			return	Files.readAllBytes(Paths.get(fullpath));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
		
	}
}
