package com.revature.assignforce.service;

import java.util.List;
import java.util.Optional;

import com.revature.assignforce.beans.Address;

public interface AddressService {
	
	List<Address> getAll();
	Optional<Address> findById(int id);
	Address update(Address b);
	Address create(Address b);
	void delete(int id);
}
