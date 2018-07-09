package com.revature.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.beans.Focus;

@Repository
public interface FocusRepo extends JpaRepository<Focus, Integer>{

}

