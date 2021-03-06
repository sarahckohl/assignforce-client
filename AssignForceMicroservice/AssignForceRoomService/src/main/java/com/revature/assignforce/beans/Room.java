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
	
	@Column(name="Building_ID")
	private int building;
	
	@ManyToMany(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinTable(name="Room_Unavailabilities",
	joinColumns=@JoinColumn(name="Room_ID"),
	inverseJoinColumns=@JoinColumn(name="Unavailability_Id"))
	private Set<UnavailabilityIdHolder> unavailabilities;
	
	
	public Room() {
		super();
	}


	public Room(int id, String roomName, int building, Set<UnavailabilityIdHolder> unavailabilities) {
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


	public Set<UnavailabilityIdHolder> getUnavailabilities() {
		return unavailabilities;
	}


	public void setUnavailabilities(Set<UnavailabilityIdHolder> unavailabilities) {
		this.unavailabilities = unavailabilities;
	}


	
}
