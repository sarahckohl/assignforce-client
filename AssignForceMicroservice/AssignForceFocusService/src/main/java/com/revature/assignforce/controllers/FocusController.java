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

import com.revature.assignforce.beans.Focus;
import com.revature.assignforce.service.FocusService;

@RestController
@RequestMapping("/focus")
public class FocusController {

	@Autowired
	FocusService focusService;
	
	// findAll
		@RequestMapping(method = RequestMethod.GET)
		public List<Focus> getAll() {
			return focusService.getAll();
		}

		// findOne
		@RequestMapping(value = "/{id}", method = RequestMethod.GET, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Focus> getById(@PathVariable int id) {
			Optional<Focus> f = focusService.findById(id);
			if (!f.isPresent())
				return new ResponseEntity<Focus>(HttpStatus.NOT_FOUND);
			return new ResponseEntity<Focus>(f.get(), HttpStatus.OK);
		}

		// create
		@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Focus> add(@RequestBody Focus f) {
			f = focusService.create(f);
			if (f == null)
				return new ResponseEntity<Focus>(HttpStatus.BAD_REQUEST);
			return new ResponseEntity<Focus>(f, HttpStatus.CREATED);
		}

		// update
		@RequestMapping(value = "/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Focus> update(@PathVariable int id, @RequestBody Focus f) {
			f = focusService.update(f);
			if (f == null)
				return new ResponseEntity<Focus>(HttpStatus.BAD_REQUEST);
			return new ResponseEntity<Focus>(f, HttpStatus.CREATED);
		}

		//delete
		@RequestMapping(value = "/{id}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Focus> delete(@PathVariable int id) {
			focusService.delete(id);
			return new ResponseEntity<Focus>(HttpStatus.CREATED);
		}
	
}
