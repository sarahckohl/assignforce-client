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
@Table(name="Settings")
public class Settings {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="Settings_ID")
	@SequenceGenerator(name="Settings_ID", sequenceName="Settings_ID_seq", allocationSize=1)
	@Column(name="Settings_ID")
	private int id;

	@Column(name="Alias")
	private String alias;
	
	@Column(name="trainersPerPage")
	private int trainersPerPage;
	
	@Column(name="reportGrads")
	private int reportGrads;
	
	@Column(name="batchLength")
	private int batchLength;
	
	@Column(name="reportIncomingGrads")
	private int reportIncomingGrads;
	
	@Column(name="minBatchSize")
	private int minBatchSize;
	
	@Column(name="maxBatchSize")
	private int maxBatchSize;

	@Column(name="trainserBreakDays")
	private int trainserBreakDays;
	
	@Column(name="defaultLocation")
	private int defaultLocation;
	
	@Column(name="defaultBuilding")
	private int defaultBuilding;
	
	@Column(name="defaultNamePattern")
	private String defaultNamePattern;
	
	public Settings() {
		super();
	}

	public Settings(int id, String alias, int trainersPerPage, int reportGrads, int batchLength,
			int reportIncomingGrads, int minBatchSize, int maxBatchSize, int trainserBreakDays, int defaultLocation,
			int defaultBuilding, String defaultNamePattern) {
		super();
		this.id = id;
		this.alias = alias;
		this.trainersPerPage = trainersPerPage;
		this.reportGrads = reportGrads;
		this.batchLength = batchLength;
		this.reportIncomingGrads = reportIncomingGrads;
		this.minBatchSize = minBatchSize;
		this.maxBatchSize = maxBatchSize;
		this.trainserBreakDays = trainserBreakDays;
		this.defaultLocation = defaultLocation;
		this.defaultBuilding = defaultBuilding;
		this.defaultNamePattern = defaultNamePattern;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAlias() {
		return alias;
	}

	public void setAlias(String alias) {
		this.alias = alias;
	}

	public int getTrainersPerPage() {
		return trainersPerPage;
	}

	public void setTrainersPerPage(int trainersPerPage) {
		this.trainersPerPage = trainersPerPage;
	}

	public int getReportGrads() {
		return reportGrads;
	}

	public void setReportGrads(int reportGrads) {
		this.reportGrads = reportGrads;
	}

	public int getBatchLength() {
		return batchLength;
	}

	public void setBatchLength(int batchLength) {
		this.batchLength = batchLength;
	}

	public int getReportIncomingGrads() {
		return reportIncomingGrads;
	}

	public void setReportIncomingGrads(int reportIncomingGrads) {
		this.reportIncomingGrads = reportIncomingGrads;
	}

	public int getMinBatchSize() {
		return minBatchSize;
	}

	public void setMinBatchSize(int minBatchSize) {
		this.minBatchSize = minBatchSize;
	}

	public int getMaxBatchSize() {
		return maxBatchSize;
	}

	public void setMaxBatchSize(int maxBatchSize) {
		this.maxBatchSize = maxBatchSize;
	}

	public int getTrainserBreakDays() {
		return trainserBreakDays;
	}

	public void setTrainserBreakDays(int trainserBreakDays) {
		this.trainserBreakDays = trainserBreakDays;
	}

	public int getDefaultLocation() {
		return defaultLocation;
	}

	public void setDefaultLocation(int defaultLocation) {
		this.defaultLocation = defaultLocation;
	}

	public int getDefaultBuilding() {
		return defaultBuilding;
	}

	public void setDefaultBuilding(int defaultBuilding) {
		this.defaultBuilding = defaultBuilding;
	}

	public String getDefaultNamePattern() {
		return defaultNamePattern;
	}

	public void setDefaultNamePattern(String defaultNamePattern) {
		this.defaultNamePattern = defaultNamePattern;
	}

	
}
