-- extended query formulation
desc student;
desc course;
desc offering;
desc enrollment;

select o.offerno,count(*) noofstudents 
from enrollment e,offering o 
where o.offerno=e.offerno 
and o.offyear=2020 
group by o.offerno;

SELECT Enrollment.OfferNo, Offering.CourseNo,
AVG(StdGPA) AS AvgGPA
FROM Offering, Enrollment, Student, Course
WHERE Offering.OfferNo = Enrollment.OfferNo
AND Student.StdNo = Enrollment.StdNo
AND Course.CourseNo = Offering.CourseNo
AND OffYear = 2019
AND OffTerm = 'FALL'
GROUP BY Enrollment.OfferNo, Offering.CourseNo
HAVING AVG(StdGPA) > 3.0;

-- Example 1: List Leonard Vince’s teaching schedule in fall 2019. For
-- each course, list the offering number, course number, number of units,
-- days, location, and time.
select * from student;
select * from course;
select * from faculty;
select * from offering;
select o.offerno,c.courseno,c.crsunits,o.offdays,o.offlocation,o.offtime 
from course c,offering o,faculty f 
where f.FacNo = o.FacNo
and o.CourseNo = c.CourseNo
and OffYear = 2019
AND OffTerm = 'FALL'
AND FacFirstName = 'LEONARD'
AND FacLastName = 'VINCE';

-- Example 2: List Bob Norbert’s course schedule in spring 2020. For
-- each course, list the offering number, course number, days, location,
-- time, and faculty name.

SELECT o.OfferNo, o.CourseNo, OffDays,
OffLocation, OffTime, CrsUnits, FacFirstName,
FacLastName
FROM Faculty f, Offering o, Enrollment e, Student s, Course c
WHERE f.FacNo = o.FacNo
AND o.OfferNo = e.OfferNo
AND s.StdNo = e.StdNo
AND o.CourseNo = c.CourseNo
AND OffYear = 2020
AND OffTerm = 'SPRING'
AND StdFirstName = 'BOB'
AND StdLastName = 'NORBERT';

-- Example 1: List the offering number, count of students enrolled, and the
-- average GPA in in each 2020 offering. Only include offerings with an
-- average GPA greater than 3.3.
SELECT o.OfferNo,
COUNT(*) AS NumStudents,
AVG(StdGPA) AS AvgGPA
FROM Enrollment e, Offering o, Student s
WHERE o.OfferNo = e.OfferNo
AND s.StdNo = e.StdNo
AND OffYear = 2020
GROUP BY o.OfferNo
HAVING AVG(StdGPA) > 3.3;

-- Example 2: List the course number, the offering number, and the count
-- of students enrolled. Only include courses offered in spring 2020.

SELECT CourseNo, e.OfferNo,
Count(*) AS NumStudents
FROM Offering o, Enrollment e
WHERE o.OfferNo = e.OfferNo
AND OffYear = 2020
AND OffTerm = 'SPRING'
GROUP BY e.OfferNo, o.CourseNo;

-- Example 1: Retrieve basic data about all university people
SELECT FacNo AS PerNo, FacFirstName AS FirstName,
FacLastName AS LastName, FacCity AS City,
FacState AS State
FROM Faculty
UNION
SELECT StdNo AS PerNo, StdFirstName AS FirstName,
StdLastName AS LastName, StdCity AS City,
StdState AS State
FROM Student;

-- Example 2: Show teaching assistants, faculty who are students.
-- Only show the common columns in the result.

SELECT FacNo AS PerNo, FacFirstName AS
FirstName, FacLastName AS LastName,
FacCity AS City, FacState AS State
FROM Faculty
intersect
SELECT StdNo AS PerNo, StdFirstName AS
FirstName, StdLastName AS LastName,
StdCity AS City, StdState AS State
FROM Student;

-- modification
SET SQL_SAFE_UPDATES = 0;

UPDATE Student
SET StdMajor = 'ACCT', StdClass = 'SO'
WHERE StdFirstName = 'JOE' AND StdLastName = 'STUDENT';

SET SQL_SAFE_UPDATES = 1;

