package com.revature.assignforce.beans;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "Buildings")
public class Buildings {

	// Building_ID, Building_Name, Location_ID, Unavailability
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "buildings")
	@SequenceGenerator(name = "buildings", sequenceName = "buildings_seq", allocationSize = 1)
	@Column(name = "BUILDING_ID")
	private int building_id;

	private Boolean isActive;
	private int unavailability_id;

	private int address_id;
	private String building_name;

	private Set<Integer> rooms;

	public Buildings() {
		super();
	}

	/**
	 * CONSTRUCTOR
	 */
	public Buildings(int building_id, Boolean isActive, int unavailability_id, int address_id, String building_name,
			Set<Integer> rooms) {
		super();
		this.building_id = building_id;
		this.isActive = isActive;
		this.unavailability_id = unavailability_id;
		this.address_id = address_id;
		this.building_name = building_name;
		this.rooms = rooms;
	}

	/**
	 * SETTERS/GETTERS
	 */

	public int getBuilding_id() {
		return building_id;
	}

	public void setBuilding_id(int building_id) {
		this.building_id = building_id;
	}

	public Boolean getIsActive() {
		return isActive;
	}

	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}

	public int getUnavailability_id() {
		return unavailability_id;
	}

	public void setUnavailability_id(int unavailability_id) {
		this.unavailability_id = unavailability_id;
	}

	public int getAddress_id() {
		return address_id;
	}

	public void setAddress_id(int address_id) {
		this.address_id = address_id;
	}

	public String getBuilding_name() {
		return building_name;
	}

	public void setBuilding_name(String building_name) {
		this.building_name = building_name;
	}

	public Set<Integer> getRooms() {
		return rooms;
	}

	public void setRooms(Set<Integer> rooms) {
		this.rooms = rooms;
	}

}
