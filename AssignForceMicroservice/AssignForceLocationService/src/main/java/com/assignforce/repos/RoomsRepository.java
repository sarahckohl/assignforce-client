package com.assignforce.repos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.assignforce.beans.Rooms;

@Repository
public interface RoomsRepository extends JpaRepository<Rooms, Integer>{

}