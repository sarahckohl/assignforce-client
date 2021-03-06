package com.revature.assignforce.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.revature.assignforce.beans.Curriculum;
import com.revature.assignforce.repos.CurriculumRepo;

@Service
@Transactional
public class CurriculumServiceImpl implements CurriculumService {

	private CurriculumRepo currRepo;
	
	@Override
	public List<Curriculum> getAll() {
		
		return currRepo.findAll();
	}

	@Override
	public Optional<Curriculum> findById(int id) {
		
		return currRepo.findById(id);
	}

	@Override
	public Curriculum create(Curriculum obj) {
		
		return currRepo.save(obj);
	}

	@Override
	public Curriculum update(Curriculum obj) {
		
		return currRepo.save(obj);
	}

	@Override
	public void delete(int id) {
		currRepo.deleteById(id);
		
	}

}
