package com.app.service;


public interface IEmailSendingService {

	void sendEmail(String to,String message,String subject);
}
