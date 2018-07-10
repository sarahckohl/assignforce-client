package com.revature.assignforce.service;

import java.util.List;

import com.revature.assignforce.beans.Unavailability;

public interface UnavailabilityService {
		
	public List<Unavailability> getAll();
	public Unavailability getById(int id);
	public List<Unavailability> getByRoom(int id);
	public List<Unavailability> getByTrainer(int id);
	
	public boolean saveTime(Unavailability in);
	public Unavailability create(Unavailability a);
	public Unavailability update(Unavailability a);
	public void delete(int id);
}
