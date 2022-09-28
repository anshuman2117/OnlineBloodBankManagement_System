package com.app.service;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class EmailSendingServiceImpl implements IEmailSendingService {

	@Override
	public void sendEmail(String to, String messageBody, String subject) {
		 log.info("----sending mail ---in mail sending method----> " );
		 log.info("----sending mail ---see mesg body-> "+messageBody );
		 log.info("----sending mail ---send mail to --> "+to );
		 log.info("----sending mail ---subject--> "+subject );
		String from="ebankservices5@gmail.com";
  
		// need of this method is to set the properties in this  class
		Properties properties=System.getProperties();
		
		//setup of mail server
		properties.putIfAbsent("mail.smtp.host", "smtp.gmail.com");
		properties.putIfAbsent("mail.smtp.port", "465");
		properties.putIfAbsent("mail.smtp.ssl.enable", "true");
		properties.putIfAbsent("mail.smtp.auth", "true");
		
		Session session=Session.getInstance(properties, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(from, "yekdewbrbpkpshwv");
			}
		});
		
		// used to debug smtp issues
//		session.setDebug(true);
		
		try {
			
			// creating a default MimeMessage instance
			Message message = new MimeMessage(session);
			
			//
		
			
			// set from : header  field of the header
			message.setFrom(new InternetAddress(from));
			
			// set to: header field of the header
			message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
			
			//set subject :header field
			message.setSubject(subject);
			
			// set the message body
//			message.setText(messageBody);
			message.setContent(messageBody, "text/html");
			
			//sending mail
			Transport.send(message);
			
		}
		catch(MessagingException excp)
		{
			excp.getMessage();
		}
		
	}

}
