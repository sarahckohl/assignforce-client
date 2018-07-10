package com.revature.assignforce.beans;

import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="TRAINER")
public class Trainer {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="trainer")
	@SequenceGenerator(name="trainer", sequenceName="trainer_seq", allocationSize=1)
	@Column(name="TRAINER_ID")
	private int id;

	@Column(name="Firstname")
	private String firstname;
	
	@Column(name="Lastname")
	private String lastname;
	
	private Boolean isActive;
	
	@Column(name="preferredLocation")
	private int preferredLocation;
	
	private Set<Integer> unavailabilities;
	
	@Column(name="email")
	private int email;
	
	private Set<Integer> skills;
	
	@Column(name="Address_Id")
	private int address;

	@ManyToMany(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinTable(name="CERT_TRAINERS",
			joinColumns=@JoinColumn(name="TRAINER_ID"),
			inverseJoinColumns=@JoinColumn(name="CERT_ID"))
	private Set<Cert> certs;
	
	//To add: resume/ resume id in bitbucket
	
	public Trainer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Trainer(int id, String firstname, String lastname, Boolean isActive, int preferredLocation,
			Set<Integer> unavailabilities, int email, Set<Integer> skills, int address, Set<Cert> certs) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.isActive = isActive;
		this.preferredLocation = preferredLocation;
		this.unavailabilities = unavailabilities;
		this.email = email;
		this.skills = skills;
		this.address = address;
		this.certs = certs;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public Boolean getIsActive() {
		return isActive;
	}

	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}

	public int getPreferredLocation() {
		return preferredLocation;
	}

	public void setPreferredLocation(int preferredLocation) {
		this.preferredLocation = preferredLocation;
	}

	public Set<Integer> getUnavailabilities() {
		return unavailabilities;
	}

	public void setUnavailabilities(Set<Integer> unavailabilities) {
		this.unavailabilities = unavailabilities;
	}

	public int getEmail() {
		return email;
	}

	public void setEmail(int email) {
		this.email = email;
	}

	public Set<Integer> getSkills() {
		return skills;
	}

	public void setSkills(Set<Integer> skills) {
		this.skills = skills;
	}

	public int getAddress() {
		return address;
	}

	public void setAddress(int address) {
		this.address = address;
	}

	public Set<Cert> getCerts() {
		return certs;
	}

	public void setCerts(Set<Cert> certs) {
		this.certs = certs;
	}

	
}
