const StudentTable = ({ students, onEdit, onDelete }) => {
  return (
    <table border="1" width="100%" cellPadding="10">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {students.length === 0 ? (
          <tr>
            <td colSpan="4">No Students Found</td>
          </tr>
        ) : (
          students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.department}</td>
              <td>
                <button onClick={() => onEdit(student)}>Edit</button>
                <button onClick={() => onDelete(student.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default StudentTable;
