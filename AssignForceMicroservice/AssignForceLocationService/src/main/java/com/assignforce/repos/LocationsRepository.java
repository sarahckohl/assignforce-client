package com.assignforce.repos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.assignforce.beans.Locations;

@Repository
public interface LocationsRepository extends JpaRepository<Locations, Integer>{

}