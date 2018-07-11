package com.revature.assignforce.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="UnavailabilityIDHOLDER")
public class UnavailabilityIdHolder {
	
	@Id
	@Column(name="UNAVAILABILITYID")
	private int skillID;

	public UnavailabilityIdHolder() {
		super();
	}

	public UnavailabilityIdHolder(int skillID) {
		super();
		this.skillID = skillID;
	}

	public int getTrainerId() {
		return skillID;
	}

	public void setTrainerId(int skillID) {
		this.skillID = skillID;
	}
	
	
}