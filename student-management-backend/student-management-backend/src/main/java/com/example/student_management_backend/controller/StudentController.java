package com.example.student_management_backend.controller;



import com.example.student_management_backend.service.StudentService;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.example.student_management_backend.model.Student;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/students")
public class StudentController {

    private final StudentService studentService;

    
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return studentService.addStudent(student);
    }

    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable Long id,
                                 @RequestBody Student student) {
        return studentService.updateStudent(id, student);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
    }
}


