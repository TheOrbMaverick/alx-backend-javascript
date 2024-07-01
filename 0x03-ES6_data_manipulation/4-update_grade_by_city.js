export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((student) => student.location === city)
    .map((studentsAtLocation) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === studentsAtLocation.id);
      return {
        ...studentsAtLocation,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
