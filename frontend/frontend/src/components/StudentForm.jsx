import { useState, useEffect } from "react";

const StudentForm = ({ onSubmit, editingStudent, cancelEdit }) => {
  const [student, setStudent] = useState({
    name: "",
    department: ""
  });

  // 🔐 Safe normalization
  useEffect(() => {
    if (editingStudent) {
      setStudent({
        name: editingStudent.name ?? "",
        department: editingStudent.department ?? ""
      });
    } else {
      setStudent({
        name: "",
        department: ""
      });
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStudent((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!student.name.trim() || !student.department.trim()) {
      alert("All fields are required");
      return;
    }

    onSubmit(student);

    setStudent({
      name: "",
      department: ""
    });
  };

  return (
    <div className="form-container">
      <h3>{editingStudent ? "Edit Student" : "Add Student"}</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={student.name ?? ""}
          onChange={handleChange}
        />

        <input
          type="text"
          name="department"
          placeholder="Enter Department"
          value={student.department ?? ""}
          onChange={handleChange}
        />

        <button type="submit">
          {editingStudent ? "Update" : "Add"}
        </button>

        {editingStudent && (
          <button type="button" onClick={cancelEdit}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default StudentForm;
