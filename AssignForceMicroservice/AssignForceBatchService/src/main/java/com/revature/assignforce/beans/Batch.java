package com.revature.assignforce.beans;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="Batch")
public class Batch {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="Batch_ID")
	@SequenceGenerator(name="Batch_ID", sequenceName="Batch_ID_seq", allocationSize=1)
	@Column(name="Batch_ID")
	private int id;

	@Column(name="Batch_Name")
	private String BatchName;
	
	@Column(name="Trainer_Id")
	private int TrainerId;
	
	@Column(name="Cotrainer_Id")
	private int CotrainerId;

	@Column(name="Curriculum_Id")
	private int CurriculumId;
	
	@Column(name="Room_Id")
	private int RoomId;
	
	@Column(name="start_Date")
	private Date startDate;
	
	@Column(name="end_Date")
	private Date endDate;

	
	public Batch() {
		super();
	}

	public Batch(int id, String batchName, int trainerId, int cotrainerId, int curriculumId, int roomId, Date startDate,
			Date endDate) {
		super();
		this.id = id;
		BatchName = batchName;
		TrainerId = trainerId;
		CotrainerId = cotrainerId;
		CurriculumId = curriculumId;
		RoomId = roomId;
		this.startDate = startDate;
		this.endDate = endDate;
	}

	public Batch(String batchName, int trainerId, int cotrainerId, int curriculumId, int roomId, Date startDate,
			Date endDate) {
		super();
		BatchName = batchName;
		TrainerId = trainerId;
		CotrainerId = cotrainerId;
		CurriculumId = curriculumId;
		RoomId = roomId;
		this.startDate = startDate;
		this.endDate = endDate;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBatchName() {
		return BatchName;
	}

	public void setBatchName(String batchName) {
		BatchName = batchName;
	}

	public int getTrainerId() {
		return TrainerId;
	}

	public void setTrainerId(int trainerId) {
		TrainerId = trainerId;
	}

	public int getCotrainerId() {
		return CotrainerId;
	}

	public void setCotrainerId(int cotrainerId) {
		CotrainerId = cotrainerId;
	}

	public int getCurriculumId() {
		return CurriculumId;
	}

	public void setCurriculumId(int curriculumId) {
		CurriculumId = curriculumId;
	}

	public int getRoomId() {
		return RoomId;
	}

	public void setRoomId(int roomId) {
		RoomId = roomId;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	
	
}
