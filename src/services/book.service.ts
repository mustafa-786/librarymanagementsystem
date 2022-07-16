import pool from "../config/db";

const add_book = `insert into books(name,author,publication,purchase_date,price,quantity)
values(?,?,?,?,?,?)
`;

const get_all_books = `select * from books`;

const get__book_by_name = `select * from books where id=?`;

const update_book = `update books
set name=?,
author=?,
publication=?,
purchase_date=?,
price=?,
quantity=?
where id=?
`;

const delete_book = `delete from books where id=?`

const addBook = async (data: any) => {
  try {
    const result = await pool.query(add_book, data);
    return result;
  } catch (e) {}
};

const getAllBooks = async () => {
  try {
    const result = await pool.query(get_all_books);
    return result;
  } catch (e) {}
};

const searchBookByName = async (name: any) => {
  try {
    const [result] = await pool.query(get__book_by_name, name);
    return result;
  } catch (e) {}
};

const updateBook = async (data: any) => {
  try {
    const result = await pool.query(update_book, data);
    return result;
  } catch (e) {}
};

const deleteBook = async (data: any) => {
  try {
    const [result] = await pool.query(delete_book, data);
    return result;
  } catch (e) {}
};
export default {
  addBook,
  getAllBooks,
  searchBookByName,
  updateBook,
  deleteBook,
};
