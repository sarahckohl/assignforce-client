package com.revature.repos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.beans.Curriculum;

@Repository
public interface CurrRepo extends JpaRepository<Curriculum, Integer>{

}
