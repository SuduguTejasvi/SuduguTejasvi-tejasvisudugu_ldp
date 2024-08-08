use practicsedb;
create trigger t1 
before insert on students
for each row
set new.smarks=new.smarks+5;

create table finalMarks(marks decimal(5,2));
create trigger store_marks
after insert on students
for each row
insert into finalMarks(marks) values(new.smarks);

select * from students;
insert into students (sname,srollno,sbranch,smarks,location,sdob) values ('Radha','5C2','EC',70,'PUNE','2001-02-15');
select * from finalMarks;

DELIMITER //
create trigger t4
before update on students
for each row
begin
if new.sname='krishna' then
signal sqlstate '45000' set message_text='no update possible';
end if;
end;
//
DELIMITER ;

DELIMITER //
create trigger t9
after update on students
for each row
begin
if new.sname='krishna' then
signal sqlstate '45000' set message_text='no update possible';
END IF;
END;
//
DELIMITER ;

SET SQL_SAFE_UPDATES = 0;
update students set smarks=98 where sname='krishna';
