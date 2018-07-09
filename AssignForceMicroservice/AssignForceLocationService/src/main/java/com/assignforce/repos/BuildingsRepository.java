package com.assignforce.repos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.assignforce.beans.Buildings;

@Repository
public interface BuildingsRepository extends JpaRepository<Buildings, Integer>{

}