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

import com.revature.assignforce.beans.Settings;
import com.revature.assignforce.service.SettingsService;

@RestController
@RequestMapping("/setting")
public class SettingsController {

	@Autowired
	SettingsService settingService;

		// findOne
		@RequestMapping(value = "/{id}", method = RequestMethod.GET, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Settings> getById(@PathVariable int id) {
			Optional<Settings> s = settingService.findById(id);
			if (!s.isPresent())
				return new ResponseEntity<Settings>(HttpStatus.NOT_FOUND);
			return new ResponseEntity<Settings>(s.get(), HttpStatus.OK);
		}

		// update
		@RequestMapping(value = "/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Settings> update(@PathVariable int id, @RequestBody Settings s) {
			s = settingService.update(s);
			if (s == null)
				return new ResponseEntity<Settings>(HttpStatus.BAD_REQUEST);
			return new ResponseEntity<Settings>(s, HttpStatus.CREATED);
		}
	
}
