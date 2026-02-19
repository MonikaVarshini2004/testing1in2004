package com.example.student_management_backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JsonProperty("name")
    private String studname;
    private String department;

    public Student() {}

    public Student(String studname, String department) {
        this.studname = studname;
        this.department = department;
    }

    public Long getId() { return id; }
    public String getStudname() { return studname; }
    public void setStudname(String studname) { this.studname = studname; }
    public String getDepartment() { return department; }
    public void setDepartment(String department) { this.department = department; }
}
