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
  const up =`create table books(
    id int not null auto_increment primary key,
    name varchar(30) not null,
    author varchar(70) not null,
    publication varchar(70) not null,
    purchase_date varchar(70) not null,
    price int not null,
    quantity int not null,
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
