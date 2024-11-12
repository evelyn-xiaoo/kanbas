
export function generateAssignmentID(courseCode, moduleNumber, database) {
    const assignmentsInModule = database.filter(
        (entry) => entry.course === courseCode && entry.modules === `Module ${moduleNumber}`
    );
    const assignmentNumber = assignmentsInModule.length + 1;
    const newID = `A${moduleNumber}${assignmentNumber}`;
    return newID;
}
