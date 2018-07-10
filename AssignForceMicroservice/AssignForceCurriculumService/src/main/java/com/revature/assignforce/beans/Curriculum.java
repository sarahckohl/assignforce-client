package com.revature.assignforce.beans;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.springframework.stereotype.Component;


@Entity
@Component
@Table(name="Curriculum")
public class Curriculum {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="curr")
	@SequenceGenerator(name="curr", sequenceName="curr_seq", allocationSize=1)
	@Column(name="CURR_ID")
	private int currId;
	
	@Column(name="name")
	private String name;
	
	@Column(name="isActive")
	private Boolean isActive;
	
	@Column(name="isCore")
	private Boolean isCore;
	
	@ManyToMany(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinTable(name="CURR_SKILLS",
	joinColumns=@JoinColumn(name="CURR_ID"),
	inverseJoinColumns=@JoinColumn(name="SKILL_ID"))
	private Set<SkillIdHolder> skillIDs;


	public Curriculum() {
		super();
	}


	public Curriculum(int currId, String name, Boolean isActive, Boolean isCore, Set<SkillIdHolder> skillIDs) {
		super();
		this.currId = currId;
		this.name = name;
		this.isActive = isActive;
		this.isCore = isCore;
		this.skillIDs = skillIDs;
	}


	public int getCurrId() {
		return currId;
	}


	public void setCurrId(int currId) {
		this.currId = currId;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public Boolean getIsActive() {
		return isActive;
	}


	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}


	public Boolean getIsCore() {
		return isCore;
	}


	public void setIsCore(Boolean isCore) {
		this.isCore = isCore;
	}


	public Set<SkillIdHolder> getSkillIDs() {
		return skillIDs;
	}


	public void setSkillIDs(Set<SkillIdHolder> skillIDs) {
		this.skillIDs = skillIDs;
	}

	
	
}
