package com.xworkz.webservices.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegistrationDTO {

	@NotNull
	private String customerName;
	@NotNull
	private String companyName;
	@NotNull
	@Email
	private String emailId;
	@NotNull
	private long contactNumber;
	@NotNull
	private String address;

	// Logger logger = LoggerFactory.getLogger(getClass());

	public RegistrationDTO() {
		// logger.info("invoking " + this.getClass().getSimpleName());
	}

	@Override
	public String toString() {
		return "RegistrationDTO [customerName=" + customerName + ", companyName=" + companyName + ", emailId=" + emailId
				+ ", contactNumber=" + contactNumber + ", address=" + address + "]";
	}
}
