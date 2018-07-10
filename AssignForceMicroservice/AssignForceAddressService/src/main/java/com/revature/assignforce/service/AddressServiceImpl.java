package com.revature.assignforce.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.assignforce.beans.Address;
import com.revature.assignforce.repos.AddressRepository;

@Transactional
@Service
public class AddressServiceImpl implements AddressService {

	@Autowired
	private AddressRepository addressRepository;
	
	@Override
	public List<Address> getAll() {
		return addressRepository.findAll();
	}

	@Override
	public Optional<Address> findById(int id) {
		return addressRepository.findById(id);
	}

	@Override
	public Address update(Address b) {
		return addressRepository.save(b);
	}

	@Override
	public Address create(Address b) {
		return addressRepository.save(b);
	}

	@Override
	public void delete(int id) {
		addressRepository.deleteById(id);
	}

}
