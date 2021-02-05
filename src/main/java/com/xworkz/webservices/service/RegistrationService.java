package com.xworkz.webservices.service;

import org.springframework.stereotype.Service;

import com.xworkz.webservices.dto.RegistrationDTO;

@Service
public class RegistrationService {
	public String clientRegistration(RegistrationDTO registrationDTO) {
		try {
			if (registrationDTO != null)
				return "user registered ";
			else {
				return "user not registered";
			}
		} catch (Exception e) {
			return "you have an exception in " + this.getClass().getSimpleName();
		}
	}
}