package com.revature.assignforce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revature.assignforce.beans.Unavailability;
import com.revature.assignforce.repository.UnavailabilityRepository;

@Service
@Transactional
public class UnavailabilityServiceImpl implements UnavailabilityService {

	
	@Autowired
	private UnavailabilityRepository availRepo;
	
	@Override
	public List<Unavailability> getAll() {
		return availRepo.findAll();
	}

	@Override
	public Unavailability getById(int id) {
		return availRepo.getOne(id);
	}

	@Override
	public List<Unavailability> getByRoom(int id) {
		return availRepo.findByRoomId(id);
	}

	@Override
	public List<Unavailability> getByTrainer(int id) {
		return availRepo.findByTrainerId(id);
	}

	@Override
	public boolean saveTime(Unavailability in) {
		
		Unavailability check = availRepo.save(in);
		
		if(check.getId() > 0) 
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	@Override
	public Unavailability create(Unavailability a) {
		return availRepo.save(a);
	}

	@Override
	public Unavailability update(Unavailability a) {
		return availRepo.save(a);
	}

	@Override
	public void delete(int id) {
		availRepo.deleteById(id);
	}

}
