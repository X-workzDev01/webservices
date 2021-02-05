package com.xworkz.webservices.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xworkz.webservices.dto.RegistrationDTO;
import com.xworkz.webservices.service.RegistrationService;

@RestController
@RequestMapping("/api")
public class HomeController {
	
	@Autowired
	RegistrationService registrationService;
	
	@GetMapping("/home")
	public String hello() {
		return "hello how are you";
	}

	@PostMapping("/registration")
	public ResponseEntity<String> clientRegistration(@Valid RegistrationDTO registrationDTO) {
		String msg="";
		try {
			if (registrationDTO != null) {
				msg=registrationService.clientRegistration(registrationDTO);
			}
		} catch (Exception e) {
			System.out.println(e.getMessage().getClass());
		}
		return new ResponseEntity<String>(msg, HttpStatus.OK);
	}
}
