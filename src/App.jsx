import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState(studentsData);

  const handleAddStudent  = ({fullName, email, phone, program, image, graduationYear, graduated}) => {
    setStudents([
      ...students,
      {
        id:students.at(-1).id+1,
        fullName: fullName,
        email: email,
        phone: phone,
        program: program,
        image: image,
        graduationYear: graduationYear,
        graduated: graduated,
      },
    ]);
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <AddStudent handleAddStudent={handleAddStudent} />
      {/* FORM END */}

      {/* TABLE/LIST HEADER */}
      <TableHeader />

      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
