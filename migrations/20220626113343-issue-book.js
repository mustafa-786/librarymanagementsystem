'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db,callback) {
  const up =`create table issue_books(
    id int not null auto_increment primary key,
    name varchar(30) not null,
    
    department varchar(60) not null,
    semester varchar(30) not null,
    contact int not null,
    email varchar(30) not null,
    book_name int not null,
    issue_date varchar(30) not null, 
    enrollment_no int not null,
    return_book varchar(30) null default null,
    foreign key(book_name) references books(id),
    foreign key(enrollment_no) references students(id),
    created_date timestamp null default current_timestamp,
    updated_date timestamp null default current_timestamp
    )`

    db.runSql(up, function(e){
      if(e) return console.log(e)
      callback()
    })
  
  return null;
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
