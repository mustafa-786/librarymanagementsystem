import express from 'express';
import bookController from '../controllers/book.controller';
import studentContoller from '../controllers/student.contoller';
import userController from '../controllers/user.controller';

const routes = express.Router()


routes
.route('/library/login')
.post(userController.Login)

routes
.route('/library/add/book')
.post(bookController.addBook)

routes
.route('/library/get/book')
.get(bookController.getAllBooks)

routes
.route('/library/get/bookname')
.get(bookController.searchBookByName)

routes
.route('/library/update/:id/book')
.post(bookController.UpdateBook)

routes
.route('/library/delete/:id/book')
.delete(bookController.DeleteBook)

/// student
routes
.route('/library/add/student')
.post(studentContoller.addStudent)

routes
.route('/library/get/student')
.get(studentContoller.getAllStudents)

routes
.route('/library/update/:id/student')
.post(studentContoller.UpdateStudent)

routes
.route('/library/delete/:id/student')
.delete(studentContoller.DeleteStuent)

routes
.route('/library/get/enrollment')
.get(studentContoller.searchStudentByEnrollmentNo)


routes
.route('/library/issue/:id/book')
.post(studentContoller.issueBook)

routes
.route('/library/get/book_by_no')
.get(studentContoller.getReturnBookByNo)

routes
.route('/library/add/:id/return_book')
.post(studentContoller.ReturnBook)

routes
.route('/library/get/issue_books')
.get(studentContoller.getAllIssueBook)

routes
.route('/library/get/return_books')
.get(studentContoller.getAllReturnBook)

export default routes           