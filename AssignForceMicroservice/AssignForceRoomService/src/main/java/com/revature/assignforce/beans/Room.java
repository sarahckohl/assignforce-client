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
@Table(name="Room")
public class Room {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="Room_ID")
	@SequenceGenerator(name="Room_ID", sequenceName="Room_ID_seq", allocationSize=1)
	@Column(name="Room_ID")
	private int id;

	@Column(name="Room_Name")
	private String roomName;
	
	private int building;
	
	private Set<Integer> unavailabilities;
	
	
	public Room() {
		super();
	}


	public Room(int id, String roomName, int building, Set<Integer> unavailabilities) {
		super();
		this.id = id;
		this.roomName = roomName;
		this.building = building;
		this.unavailabilities = unavailabilities;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getRoomName() {
		return roomName;
	}


	public void setRoomName(String roomName) {
		this.roomName = roomName;
	}


	public int getBuilding() {
		return building;
	}


	public void setBuilding(int building) {
		this.building = building;
	}


	public Set<Integer> getUnavailabilities() {
		return unavailabilities;
	}


	public void setUnavailabilities(Set<Integer> unavailabilities) {
		this.unavailabilities = unavailabilities;
	}

	
	
}
