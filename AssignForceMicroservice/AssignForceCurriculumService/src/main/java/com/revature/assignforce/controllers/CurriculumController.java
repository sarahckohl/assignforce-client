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

import com.revature.assignforce.beans.Curriculum;
import com.revature.assignforce.service.CurriculumService;

@RestController
@RequestMapping("/curriculum")
public class CurriculumController {

	@Autowired
	CurriculumService curriculumService;
	
	// findAll
		@RequestMapping(method = RequestMethod.GET)
		public List<Curriculum> getAll() {
			return curriculumService.getAll();
		}

		// findOne
		@RequestMapping(value = "/{id}", method = RequestMethod.GET, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Curriculum> getById(@PathVariable int id) {
			Optional<Curriculum> c = curriculumService.findById(id);
			if (!c.isPresent())
				return new ResponseEntity<Curriculum>(HttpStatus.NOT_FOUND);
			return new ResponseEntity<Curriculum>(c.get(), HttpStatus.OK);
		}

		// create
		@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Curriculum> cdd(@RequestBody Curriculum c) {
			c = (Curriculum) curriculumService.create(c);
			if (c == null)
				return new ResponseEntity<Curriculum>(HttpStatus.BAD_REQUEST);
			return new ResponseEntity<Curriculum>(c, HttpStatus.CREATED);
		}

		// update
		@RequestMapping(value = "/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Curriculum> update(@PathVariable int id, @RequestBody Curriculum c) {
			c = (Curriculum) curriculumService.update(c);
			if (c == null)
				return new ResponseEntity<Curriculum>(HttpStatus.BAD_REQUEST);
			return new ResponseEntity<Curriculum>(c, HttpStatus.CREATED);
		}

		//delete
		@RequestMapping(value = "/{id}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Curriculum> delete(@PathVariable int id) {
			curriculumService.delete(id);
			return new ResponseEntity<Curriculum>(HttpStatus.CREATED);
		}

}

