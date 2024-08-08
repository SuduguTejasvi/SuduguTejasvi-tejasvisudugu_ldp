select * from student;

select * from course;

select stdno,concat(stdfirstname,stdlastname) as fullname from student;

select stdgpa from student order by stdgpa asc;

select * from student where stdgpa between 2.5 and 3.9;

select * from student where stdcity in('seattle','redmond');

select * from student where stdfirstname like 't%';

select * from student where stdcity in('seattle','redmond') and stdgpa between 2.5 and 3.9;

-- inner join
select e.ename,d.department_name 
from employee e 
inner join departments d on d.department_id=e.department_id;

-- left join
select e.ename,d.department_name 
from employee e 
left join departments d on d.department_id=e.department_id;

-- right join
select e.ename,d.department_name 
from employee e 
right join departments d on d.department_id=e.department_id;

-- cross join
select e.ename,d.department_name 
from employee e  
 cross join departments d on d.department_id=e.department_id; 

-- natural join
select e.ename,d.department_name 
from employee e  
natural join departments d ;

select e.ename,d.department_name 
from employee e , departments d
where d.department_id=e.department_id;


select * from student;
-- to get max gpa from each city

select stdCity,max(stdgpa) from student group by stdcity;
-- to get min gpa from each city

select stdCity,min(stdgpa) from student group by stdcity;
-- to get average gpa from each city

select stdCity,avg(stdgpa) from student group by stdcity;

-- to get count of students from each location
select stdCity,count(*) from student group by stdcity;

-- to get sum of students from each location
select stdCity,sum(stdgpa) from student group by stdcity;

-- list locations which have more than 5 students
select stdcity from student group by stdcity having count(*)>5;

-- list differnt cities who have total gpa >12
select stdcity from student group by stdcity having sum(stdgpa)>12;

-- display total gpa of the city who have no of student >5
select stdcity,sum(stdgpa) from student group by stdcity having count(*)>5;

-- display count in each loaction and state
select stdcity,count(*),stdstate from student group by stdcity,stdstate;


