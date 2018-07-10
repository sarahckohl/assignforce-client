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

import com.revature.assignforce.beans.Buildings;
import com.revature.assignforce.service.BuildingsService;

@RestController
@RequestMapping("/building")
public class BuildingsController {

	@Autowired
	BuildingsService buildingService;
	
	// findAll
		@RequestMapping(method = RequestMethod.GET)
		public List<Buildings> getAll() {
			return buildingService.getAll();
		}

		// findOne
		@RequestMapping(value = "/{id}", method = RequestMethod.GET, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Buildings> getById(@PathVariable int id) {
			Optional<Buildings> a = buildingService.findById(id);
			if (!a.isPresent())
				return new ResponseEntity<Buildings>(HttpStatus.NOT_FOUND);
			return new ResponseEntity<Buildings>(a.get(), HttpStatus.OK);
		}

		// create
		@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Buildings> add(@RequestBody Buildings a) {
			a = buildingService.create(a);
			if (a == null)
				return new ResponseEntity<Buildings>(HttpStatus.BAD_REQUEST);
			return new ResponseEntity<Buildings>(a, HttpStatus.CREATED);
		}

		// update
		@RequestMapping(value = "/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Buildings> update(@PathVariable int id, @RequestBody Buildings a) {
			a = buildingService.update(a);
			if (a == null)
				return new ResponseEntity<Buildings>(HttpStatus.BAD_REQUEST);
			return new ResponseEntity<Buildings>(a, HttpStatus.CREATED);
		}

		//delete
		@RequestMapping(value = "/{id}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Buildings> delete(@PathVariable int id) {
			buildingService.delete(id);
			return new ResponseEntity<Buildings>(HttpStatus.CREATED);
		}

}
