package com.app;

import java.io.File;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class BloodBankApplication implements CommandLineRunner {

	@Value("${file.upload.location}")// annotation to inject the value of SpEL expression into field
	private String folderName;
	
	
	@Value("${file.upload.location2}")// annotation to inject the value of SpEL expression into field
	private String folderName2;
	
	
	public static void main(String[] args) {
		SpringApplication.run(BloodBankApplication.class, args);
	}
	
	// configure ModelMapper as a spring bean
		// equivalent to <bean> tag in xml file
		@Bean
		public ModelMapper mapper() {
//			log.info("In model mappler ");
			return new ModelMapper();
		}

	@Override
	public void run(String... args) throws Exception {
		// create image folder if it does not exist
		File dir=new File(folderName);
		File dir2=new File(folderName2);
		if(!dir.exists()) {
			// mkdir create the  folder but mkdirs creates the whole path and folder
			dir.mkdirs();
		}
		if(!dir2.exists()) {
			// mkdir create the  folder but mkdirs creates the whole path and folder
			dir2.mkdirs();
		}
		
	}
	
	//configure BCryptPassword encode bean
		@Bean
		public PasswordEncoder encoder()
		{
			return new BCryptPasswordEncoder();
		}
	

}
