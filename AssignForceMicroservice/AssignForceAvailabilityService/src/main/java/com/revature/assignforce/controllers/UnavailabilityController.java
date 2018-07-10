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

import com.revature.assignforce.beans.Unavailability;
import com.revature.assignforce.service.UnavailabilityService;

@RestController
public class UnavailabilityController {
	
	@Autowired
	private UnavailabilityService unavailabilityService;
	
	// findAll
		@RequestMapping(method = RequestMethod.GET)
		public List<Unavailability> getAll() {
			return unavailabilityService.getAll();
		}

		// findOne
		@RequestMapping(value = "/{id}", method = RequestMethod.GET, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Unavailability> getById(@PathVariable int id) {
			Unavailability b = unavailabilityService.getById(id);
			if (b != null)
				return new ResponseEntity<Unavailability>(HttpStatus.NOT_FOUND);
			return new ResponseEntity<Unavailability>(b, HttpStatus.OK);
		}

		// create
		@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Unavailability> add(@RequestBody Unavailability a) {
			a = unavailabilityService.create(a);
			if (a == null)
				return new ResponseEntity<Unavailability>(HttpStatus.BAD_REQUEST);
			return new ResponseEntity<Unavailability>(a, HttpStatus.CREATED);
		}

		// update
		@RequestMapping(value = "/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Unavailability> update(@PathVariable int id, @RequestBody Unavailability a) {
			a = unavailabilityService.update(a);
			if (a == null)
				return new ResponseEntity<Unavailability>(HttpStatus.BAD_REQUEST);
			return new ResponseEntity<Unavailability>(a, HttpStatus.CREATED);
		}

		// delete
		@RequestMapping(value = "/{id}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Unavailability> delete(@PathVariable int id) {
			unavailabilityService.delete(id);
			return new ResponseEntity<Unavailability>(HttpStatus.CREATED);
		}

}
