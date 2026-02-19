import { useEffect, useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent
} from "./services/studentService";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await getStudents();
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleSubmit = async (student) => {
    try {
      if (editingStudent) {
        await updateStudent(editingStudent.id, student);
        setEditingStudent(null);
      } else {
        await addStudent(student);
      }

      fetchStudents();
    } catch (error) {
      console.error("Error saving student:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  const cancelEdit = () => {
    setEditingStudent(null);
  };

  return (
    <div className="container">
      <h1>Student Management System</h1>

      <StudentForm
        onSubmit={handleSubmit}
        editingStudent={editingStudent}
        cancelEdit={cancelEdit}
      />

      <StudentTable
        students={students}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
