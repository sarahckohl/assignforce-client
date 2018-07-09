package com.revature;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class AssignForceCurrApplication {

	public static void main(String[] args) {
		SpringApplication.run(AssignForceCurrApplication.class, args);
	}
}
