import express, { Request, Response } from "express";
import bookService from "../services/book.service";
import userService from "../services/user.service";

const addBook = async (req: Request, res: Response) => {
  try {
    const { name, author, publication, purchase_date, price, quantity } =
      req.body;

    const payload = {
      name,
      author,
      publication,
      purchase_date,
      price,
      quantity,
    };
    const books = await bookService.addBook(Object.values(payload));

    if (!books) {
      return res.status(404).json({
        code: 404,
        status: "fail",
        message: "Bad Request",
      });
    }
    return res.status(200).json({
      code: 200,
      status: "success",
      message: "Book added successfully",
    });
  } catch (e) {
    console.log(e);
  }
};

const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await bookService.getAllBooks();

    if (!books) {
      return res.status(404).json({
        code: 404,
        status: "fail",
        message: "Bad Request",
      });
    }
    return res.status(200).json({
      code: 200,
      status: "success",
      data: books,
    });
  } catch (e) {
    console.log(e);
  }
};

const searchBookByName = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const books = await bookService.searchBookByName(id);

    if (!books) {
      return res.status(404).json({
        code: 404,
        status: "fail",
        message: "No data found",
      });
    }
    return res.status(200).json({
      code: 200,
      status: "success",
      data: books,
    });
  } catch (e) {
    console.log(e);
  }
};

const UpdateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, author, publication, purchase_date, price, quantity } =
      req.body;

    const payload = {
      name,
      author,
      publication,
      purchase_date,
      price,
      quantity,
      id: Number(id),
    };
    const books = await bookService.updateBook(Object.values(payload));

    if (books.affectedRows == 0) {
      return res.status(404).json({
        code: 404,
        status: "fail",
        message: "Incorrect Id",
      });
    }
    return res.status(200).json({
      code: 200,
      status: "success",
      message: "Book Updated Successfully",
    });
  } catch (e) {
    console.log(e);
  }
};

const DeleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await bookService.deleteBook(id);

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
      message: "Book Delted Successfully",
    });
  } catch (e) {
    console.log(e);
  }
};

export default {
  addBook,
  getAllBooks,
  searchBookByName,
  UpdateBook,
  DeleteBook,
};
