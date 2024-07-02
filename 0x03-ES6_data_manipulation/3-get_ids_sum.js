export default function getStudentIdsSum(studentList) {
  const idSum = studentList.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
  return idSum;
}
