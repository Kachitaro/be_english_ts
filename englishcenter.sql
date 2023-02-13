CREATE DATABASE englishcenter_management;

\c englishcenter_management

CREATE TABLE center_branch(
   id SERIAL,
   name TEXT,
   address TEXT DEFAULT NULL,
   phone_number varchar(20) DEFAULT NULL,
   created_at TIMESTAMP with time zone DEFAULT NOW(),
   updated_at TIMESTAMP with time zone DEFAULT NOW(),
   PRIMARY KEY (id)
);

-- Insert table center_branch
INSERT INTO center_branch (name, address) 
VALUES
   ('AHQ','co so 1'),
   ('AHQ','co so 2'),
   ('AHQ','co so 3'),
   ('AHQ','co so 4'),
   ('AHQ','co so 5')
;

CREATE TABLE users (
   id SERIAL,
   password TEXT,
   username TEXT,
   created_at TIMESTAMP with time zone DEFAULT NOW(),
   updated_at TIMESTAMP with time zone DEFAULT NOW(),
   PRIMARY KEY (id)
);

-- Insert table users
INSERT INTO users (username, password)
VALUES
   ('AdminGiaoVu','admin123'),
   ('DatGiaovien','DAT'),
   ('TaiHocVien','Tai')
;

CREATE TABLE manager(
   id SERIAL,
   code TEXT,
   email TEXT,
   name TEXT,
   phone_number TEXT DEFAULT NULL,
   gender TEXT DEFAULT NULL,
   address TEXT DEFAULT NULL,
   manager_id INT,
   workplace_id INT,
   created_at TIMESTAMP with time zone DEFAULT NOW(),
   updated_at TIMESTAMP with time zone DEFAULT NOW(),
   PRIMARY KEY (id),
   FOREIGN KEY(manager_id) REFERENCES users(id),
   FOREIGN KEY (workplace_id) REFERENCES center_branch(id)
);

-- Insert table manager
INSERT INTO manager(code,email,name)
VALUES
   ('VP01','VP@gmail.com','Nhi'),
   ('VP00','VP@gmail00.com','Suna')
;


CREATE TABLE teacher(
   id SERIAL,
   code TEXT,
   email TEXT,
   name TEXT,
   phone_number TEXT DEFAULT NULL,
   gender TEXT DEFAULT NULL,
   address TEXT DEFAULT NULL,
   teacher_id INT,
   workplace_id INT,
   created_at TIMESTAMP with time zone DEFAULT NOW(),
   updated_at TIMESTAMP with time zone DEFAULT NOW(),
   PRIMARY KEY (id),
   FOREIGN KEY(teacher_id) REFERENCES users(id),
   FOREIGN KEY (workplace_id) REFERENCES center_branch(id)
);

-- Insert table teacher 
INSERT INTO teacher(code,email,name)
VALUES
   ('GV01','GV@gmail.com','SON'),
   ('GV002','GV@gmail00.com','DAT')
;

CREATE TABLE subjects(
   id SERIAL,
   code TEXT,
   name TEXT,
   teacher_id INT,
   start_at TIMESTAMP with time zone DEFAULT NOW(),
   end_at TIMESTAMP with time zone DEFAULT NOW(),
   created_at TIMESTAMP with time zone DEFAULT NOW(),
   updated_at TIMESTAMP with time zone DEFAULT NOW(),
   PRIMARY KEY (id), 
   FOREIGN KEY (teacher_id) REFERENCES teacher(id)
);

--Insert table subjects
INSERT INTO subjects (code, name)
VALUES
   ('MON00','TA01'),
   ('MON01','TA02')
;

CREATE TABLE student(
   id SERIAL,
   code TEXT,
   email TEXT,
   name TEXT,
   phone_number TEXT DEFAULT NULL,
   gender TEXT DEFAULT NULL,
   address TEXT DEFAULT NULL,
   schedule TEXT DEFAULT NULL,
   student_id INT,
   subjects_id INT,
   created_at TIMESTAMP with time zone DEFAULT NOW(),
   updated_at TIMESTAMP with time zone DEFAULT NOW(),
   PRIMARY KEY (id),
   FOREIGN KEY(student_id) REFERENCES users(id),
   FOREIGN KEY(subjects_id) REFERENCES subjects(id)
);

--Insert table e
INSERT INTO student(code, email, name)
VALUES
   ('HS01','HS01@gmail.com','Hoc sinh 1'),
   ('HS01','HS01@gmail.com','Hoc sinh 2'),
   ('HS01','HS01@gmail.com','Hoc sinh 3')
;

CREATE TABLE tuition(
   id SERIAL,
   type TEXT, /* Tuition fee is paid in terms of 3 months and 6 months or by subjects */ 
   price NUMERIC DEFAULT NULL,
   payment NUMERIC DEFAULT NULL,
   status TEXT DEFAULT NULL,
   subjects_id INT,
   student_id INT,
   created_at TIMESTAMP with time zone DEFAULT NOW(),
   updated_at TIMESTAMP with time zone DEFAULT NOW(),
   PRIMARY KEY (id),
   FOREIGN KEY (subjects_id) REFERENCES subjects(id),
   FOREIGN KEY (student_id) REFERENCES student(id)
);

--Insert table tuition
INSERT INTO tuition(type)
VALUES
   ('3 months'),
   ('6 months'),
   ('subjects')
;
