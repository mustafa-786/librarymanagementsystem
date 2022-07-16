import pool from "../config/db";

const add_student = `insert into students(
               name,
               enrollment_no,
               department,
               semester,
               contact,
               email)
values(?,?,?,?,?,?)
`;

const get_all_students = `select * from students`;

const get_students = `select * from students where id=?`;
const get_student_by_no = `select * from students where enrollment_no=?`;

const update_student = `update students
set name=?,
enrollment_no=?,
department=?,
semester=?,
contact=?,
email=?
where id=?
`;

const return_book = `insert into return_books(
  name,
  department,
  semester,
  contact,
  email,
  book_name,
  issue_date,
  return_book,
  enrollment_no
  )
values(?,?,?,?,?,?,?,?,?)
`;
const delete_student = `delete from students where id=?`;

const issue_book = `insert into issue_books(
               name,
               department,
               semester,
               contact,
               email,
               book_name,
               issue_date,
               enrollment_no
               )
values(?,?,?,?,?,?,?,?)
`;

const get_all_books_by_no = `SELECT books.name as names,student.enrollment_no, books.department,books.semester,books.contact,books.email,
book.name,books.issue_date,books.return_book
FROM issue_books books
JOIN students student
ON student.id = books.enrollment_no
JOIN books book
ON book.id = books.book_name
where student.enrollment_no=?
`;

const delete_boook = `delete from issue_books where book_name=?`

const get_all_issue_book = `SELECT books.name as student_name, student.id,student.enrollment_no, books.department,books.semester,books.contact,books.email,
book.name,books.issue_date,books.return_book
FROM issue_books books
JOIN students student
ON student.id = books.enrollment_no
JOIN books book
ON book.id = books.book_name
`;

const get_all_return_book = `
SELECT books.name as student_name,student.id,student.enrollment_no, books.department,books.semester,books.contact,books.email,
book.name,books.issue_date,books.return_book
FROM return_books books
JOIN students student
ON student.id = books.enrollment_no
JOIN books book
ON book.id = books.book_name
`;

const addStudent = async (data: any) => {
  try {
    const result = await pool.query(add_student, data);
    return result;
  } catch (e) {
    console.log(e);
  }
};

const getAllStudents = async () => {
  try {
    const result = await pool.query(get_all_students);
    return result;
  } catch (e) {}
};
const getStudents = async (id:any) => {
  try {
    const [result] = await pool.query(get_students,id);
    return result;
  } catch (e) {}
};

const searchStudentByNo = async (enrollment_no: any) => {
  try {
    const [result] = await pool.query(get_student_by_no, enrollment_no);
    return result;
  } catch (e) {}
};

const UpdateStudent = async (data: any) => {
  try {
    const result = await pool.query(update_student, data);
    return result;
  } catch (e) {}
};

const DeleteStuent = async (data: any) => {
  try {
    const [result] = await pool.query(delete_student, data);
    return result;
  } catch (e) {}
};

const issueBook = async (data: any) => {
  try {
    const result = await pool.query(issue_book, data);
    return result;
  } catch (e) {
    console.log(e);
  }
};

const ReturnBook = async (data: any) => {
  try {
    const result = await pool.query(return_book, data);
    return result;
  } catch (e) {
    console.log(e)
  }
};

const getAllBooksByNo = async (enrollment_no:any) => {
  try {       
    const result = await pool.query(get_all_books_by_no,enrollment_no);
    return result;
  } catch (e) {
         console.log(e)      
  }
};


const deleteBook = async (data: any) => {
  try {
    const result = await pool.query(delete_boook, data);
    return result;
  } catch (e) {
    console.log(e)
  }
};

const getAllIssueBook = async () => {
  try {       
    const result = await pool.query(get_all_issue_book);
    return result;
  } catch (e) {
         console.log(e)      
  }
};

const getAllReturnBook = async () => {
  try {       
    const result = await pool.query(get_all_return_book);
    return result;
  } catch (e) {
         console.log(e)      
  }
};

export default {
  addStudent,
  getAllStudents,
  searchStudentByNo,
  UpdateStudent,
  DeleteStuent,
  issueBook,
  ReturnBook,
  getAllBooksByNo,
  deleteBook,
  getAllIssueBook,
  getAllReturnBook,
  getStudents,
};
