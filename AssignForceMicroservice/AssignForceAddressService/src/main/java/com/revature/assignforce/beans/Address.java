package com.revature.assignforce.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="Address")
public class Address {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="Address_ID")
	@SequenceGenerator(name="Address_ID", sequenceName="Address_ID_seq", allocationSize=1)
	@Column(name="Address_ID")
	private int id;

	@Column(name="Address_Name")
	private String name;
	
	@Column(name="city")
	private String city;
	
	@Column(name="state")
	private String state;
	
	@Column(name="active")
	private Boolean active;
	
	
	public Address() {
		super();
	}

	public Address(int id, String name, String city, String state, Boolean active) {
		super();
		this.id = id;
		this.name = name;
		this.city = city;
		this.state = state;
		this.active = active;
	}

	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getState() {
		return state;
	}


	public void setState(String state) {
		this.state = state;
	}


	public Boolean getActive() {
		return active;
	}


	public void setActive(Boolean active) {
		this.active = active;
	}
	
}
