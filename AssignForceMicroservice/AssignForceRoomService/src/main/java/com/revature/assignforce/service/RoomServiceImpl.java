package com.revature.assignforce.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.assignforce.beans.Room;
import com.revature.assignforce.repos.RoomRepository;

@Transactional
@Service
public class RoomServiceImpl implements RoomService {

	@Autowired
	private RoomRepository batchRepository;
	
	@Override
	public List<Room> getAll() {
		return batchRepository.findAll();
	}

	@Override
	public Optional<Room> findById(int id) {
		return batchRepository.findById(id);
	}

	@Override
	public Room update(Room b) {
		return batchRepository.save(b);
	}

	@Override
	public Room create(Room b) {
		return batchRepository.save(b);
	}

	@Override
	public void delete(int id) {
		batchRepository.deleteById(id);
	}

}
