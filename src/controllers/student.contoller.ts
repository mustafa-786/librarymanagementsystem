import express, { Request, Response } from "express";
import bookService from "../services/book.service";
import studentService from "../services/student.service";
import userService from "../services/user.service";

const addStudent = async (req: Request, res: Response) => {
  try {
    const { name, enrollment_no, department, semester, contact, email } =
      req.body;

    const payload = {
      name,
      enrollment_no,
      department,
      semester,
      contact,
      email,
    };
    const students = await studentService.addStudent(Object.values(payload));

    if (!students) {
      return res.status(404).json({
        code: 404,
        status: "fail",
        message: "Bad Request",
      });
    }
    return res.status(200).json({
      code: 200,
      status: "success",
      message: "Student added successfully",
    });
  } catch (e) {
    console.log(e);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await studentService.getAllStudents();

    if (!students) {
      return res.status(404).json({
        code: 404,
        status: "fail",
        message: "Bad Request",
      });
    }
    return res.status(200).json({
      code: 200,
      status: "success",
      data: students,
    });
  } catch (e) {
    console.log(e);
  }
};

const searchStudentByEnrollmentNo = async (req: Request, res: Response) => {
  try {
    const { enrollment_no = "" } = req.query;

    const students = await studentService.searchStudentByNo(enrollment_no);

    if (!students) {
      return res.status(404).json({
        code: 404,
        status: "fail",
        message: "No data found",
      });
    }
    return res.status(200).json({
      code: 200,
      status: "success",
      data: students,
    });
  } catch (e) {
    console.log(e);
  }
};

const UpdateStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, enrollment_no, department, semester, contact, email } =
      req.body;

    const payload = {
      name,
      enrollment_no,
      department,
      semester,
      contact,
      email,
      id: Number(id),
    };

    const studets = await studentService.UpdateStudent(Object.values(payload));

    if (studets.affectedRows == 0) {
      return res.status(404).json({
        code: 404,
        status: "fail",
        message: "Incorrect Id",
      });
    }
    return res.status(200).json({
      code: 200,
      status: "success",
      message: "Student Updated Successfully",
    });
  } catch (e) {
    console.log(e);
  }
};

const DeleteStuent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await studentService.DeleteStuent(id);

    //     if (books.affectedRows == 0) {
    //       return res.status(404).json({
    //         code: 404,
    //         status: "fail",
    //         message: "Incorrect Id",
    //       });
    //     }
    return res.status(204).json({
      code: 204,
      status: "success",
      message: "Student Deleted Successfully",
    });
  } catch (e) {
    console.log(e);
  }
};

const issueBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      name,
      department,
      semester,
      contact,
      email,
      book_name,
      issue_date,
    } = req.body;

    const payload = {
      name,
      department,
      semester,
      contact,
      email,
      book_name,
      issue_date,
      id:Number(id)
    };

    const issue_book = await studentService.issueBook(Object.values(payload));

    if (!issue_book) {
      return res.status(400).json({
        code: 400,
        status: "fail",
        message: "Bad request",
      });
    }
    return res.status(200).json({
      code: 200,
      status: "success",
      message: "Book Issued Successfully",
    });
  } catch (e) {
    console.log(e);
  }
};

const ReturnBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      name,
      department,
      semester,
      contact,
      email,
      book_name,
      issue_date,
      return_date,
    } = req.body;

    const payload = {
      name,
      department,
      semester,
      contact,
      email,
      book_name,
      issue_date,
      return_date,
      id:Number(id)
    };

    const return_book = await studentService.ReturnBook(Object.values(payload));

    await studentService.deleteBook(book_name);
    
    if (!return_book) {
      return res.status(400).json({
        code: 400,
        status: "fail",
        message: "Bad request",
      });
    }
    return res.status(200).json({
      code: 200,
      status: "success",
      message: "Book Returned Successfully",
    });
    } catch (e) {
    console.log(e);
  }
};

const getReturnBookByNo = async (req: Request, res: Response) => {
  try {
    const { enrollment_no }:any = req.query;
   console.log(enrollment_no)
    const return_books = await studentService.getAllBooksByNo(enrollment_no);
    console.log(return_books)

    if (!return_books) {
      return res.status(404).json({
        code: 404,
        status: "fail",
        message: "No data found",
      });
    }
    return res.status(200).json({
      code: 200,
      status: "success",
      data:return_books,
    });
  } catch (e) {
    console.log(e);
  }
};

const getAllIssueBook = async (req: Request, res: Response) => {
  try {
  
    const issue_books = await studentService.getAllIssueBook();

    if (!issue_books) {
      return res.status(400).json({
        code: 400,
        status: "fail",
        message: "Bad request",
      });
    }
    return res.status(200).json({
      code: 200,
      status: "success",
      data:issue_books,
    });
  } catch (e) {
    console.log(e);
  }
};

const getAllReturnBook = async (req: Request, res: Response) => {
  try {
  
    const return_books = await studentService.getAllReturnBook();

    if (!return_books) {
      return res.status(400).json({
        code: 400,
        status: "fail",
        message: "Bad request",
      });
    }
    return res.status(200).json({
      code: 200,
      status: "success",
      data:return_books,
    });
  } catch (e) {
    console.log(e);
  }
};




export default {
  addStudent,
  getAllStudents,
  searchStudentByEnrollmentNo,
  UpdateStudent,
  DeleteStuent,
  issueBook,
  ReturnBook,
  getReturnBookByNo,
  getAllIssueBook,
  getAllReturnBook,
};
