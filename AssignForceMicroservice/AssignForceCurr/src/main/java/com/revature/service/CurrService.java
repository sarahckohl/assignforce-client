package com.revature.service;

import java.util.List;
import java.util.Optional;

import com.revature.beans.Curriculum;

public interface CurrService {
	List<Curriculum> getAll();
	Optional<Curriculum> findById(int id);
	Curriculum create(Curriculum obj);
	Curriculum update(Curriculum obj);
}
