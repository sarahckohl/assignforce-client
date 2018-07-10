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

import com.revature.assignforce.beans.Room;
import com.revature.assignforce.service.RoomService;

@RestController
@RequestMapping("/room")
public class RoomController {

	@Autowired
	RoomService roomService;
	
	// findAll
		@RequestMapping(method = RequestMethod.GET)
		public List<Room> getAll() {
			return roomService.getAll();
		}

		// findOne
		@RequestMapping(value = "/{id}", method = RequestMethod.GET, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Room> getById(@PathVariable int id) {
			Optional<Room> r = roomService.findById(id);
			if (!r.isPresent())
				return new ResponseEntity<Room>(HttpStatus.NOT_FOUND);
			return new ResponseEntity<Room>(r.get(), HttpStatus.OK);
		}

		// create
		@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Room> add(@RequestBody Room r) {
			r = roomService.create(r);
			if (r == null)
				return new ResponseEntity<Room>(HttpStatus.BAD_REQUEST);
			return new ResponseEntity<Room>(r, HttpStatus.CREATED);
		}

		// update
		@RequestMapping(value = "/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Room> update(@PathVariable int id, @RequestBody Room r) {
			r = roomService.update(r);
			if (r == null)
				return new ResponseEntity<Room>(HttpStatus.BAD_REQUEST);
			return new ResponseEntity<Room>(r, HttpStatus.CREATED);
		}

		//delete
		@RequestMapping(value = "/{id}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Room> delete(@PathVariable int id) {
			roomService.delete(id);
			return new ResponseEntity<Room>(HttpStatus.CREATED);
		}
	
}
