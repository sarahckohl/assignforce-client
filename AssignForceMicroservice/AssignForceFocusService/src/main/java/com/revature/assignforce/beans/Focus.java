package com.revature.assignforce.beans;

import java.util.Date;
import java.util.Set;

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
@Table(name="Focus")
public class Focus {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="Batch_ID")
	@SequenceGenerator(name="Batch_ID", sequenceName="Batch_ID_seq", allocationSize=1)
	@Column(name="Focus_ID")
	private int id;

	@Column(name="Focus_Name")
	private String name;
	
	private Boolean isActive;
	
	private Set<Integer> skills;
	
	
	public Focus() {
		super();
	}

	

	public Focus(int id, String name, Boolean isActive, Set<Integer> skills) {
		super();
		this.id = id;
		this.name = name;
		this.isActive = isActive;
		this.skills = skills;
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


	public Boolean getIsActive() {
		return isActive;
	}


	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}


	public Set<Integer> getSkills() {
		return skills;
	}


	public void setSkills(Set<Integer> skills) {
		this.skills = skills;
	}

	
}
