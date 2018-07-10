package com.revature.assignforce.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.assignforce.beans.Address;
import com.revature.assignforce.service.AddressService;

@RestController
@RequestMapping("/address")
public class AddressController {

	@Autowired
	AddressService addressService;

	// findAll
	@RequestMapping(method = RequestMethod.GET)
	public List<Address> getAll() {
		return addressService.getAll();
	}

	// findOne
	@RequestMapping(value = "/{id}", method = RequestMethod.GET, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Address> getById(@PathVariable int id) {
		Optional<Address> a = addressService.findById(id);
		if (!a.isPresent())
			return new ResponseEntity<Address>(HttpStatus.NOT_FOUND);
		return new ResponseEntity<Address>(a.get(), HttpStatus.OK);
	}

	// create
	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Address> add(@RequestBody Address a) {
		a = addressService.create(a);
		if (a == null)
			return new ResponseEntity<Address>(HttpStatus.BAD_REQUEST);
		return new ResponseEntity<Address>(a, HttpStatus.CREATED);
	}

	// update
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Address> update(@PathVariable int id, @RequestBody Address a) {
		a = addressService.update(a);
		if (a == null)
			return new ResponseEntity<Address>(HttpStatus.BAD_REQUEST);
		return new ResponseEntity<Address>(a, HttpStatus.CREATED);
	}

	//delete
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Address> delete(@PathVariable int id) {
		addressService.delete(id);
		return new ResponseEntity<Address>(HttpStatus.CREATED);
	}

}
