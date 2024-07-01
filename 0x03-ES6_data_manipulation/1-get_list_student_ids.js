export default function getListStudentIds(listOfObjects) {
  if (!Array.isArray(listOfObjects)) {
    return [];
  }

  return listOfObjects.map((student) => student.id);
}
