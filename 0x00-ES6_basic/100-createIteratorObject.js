export default function createIteratorObject(report) {
  let everyEmployee = [];
  for (const value of Object.values(report.allEmployees)) {
    everyEmployee = [...everyEmployee, ...value];
  }
  return everyEmployee;
}
