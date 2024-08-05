package assignment12;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<Student> students = new ArrayList<>();
        students.add(new Student(111, "Jiya Brein", 17, "Female", "Computer Science", 2018, 70.8));
        students.add(new Student(122, "Paul Niksui", 18, "Male", "Mechanical", 2016, 50.2));
        students.add(new Student(133, "Martin Theron", 17, "Male", "Electronic", 2017, 90.3));
        students.add(new Student(144, "Murali Gowda", 18, "Male", "Electrical", 2018, 80));
        students.add(new Student(155, "Nima Roy", 19, "Female", "Textile", 2016, 70));
        students.add(new Student(166, "Iqbal Hussain", 18, "Male", "Security", 2016, 70));
        students.add(new Student(177, "Manu Sharma", 16, "Male", "Chemical", 2018, 70));
        students.add(new Student(188, "Wang Liu", 20, "Male", "Computer Science", 2015, 80));
        students.add(new Student(199, "Amelia Zoe", 18, "Female", "Computer Science", 2016, 85));
        students.add(new Student(200, "Jaden Dough", 18, "Male", "Security", 2015, 82));
        students.add(new Student(211, "Jasna Kaur", 20, "Female", "Electronic", 2019, 83));
        students.add(new Student(222, "Nitin Joshi", 19, "Male", "Textile", 2016, 60.4));
        students.add(new Student(233, "Jyothi Reddy", 16, "Female", "Computer Science", 2015, 45.6));
        students.add(new Student(244, "Nicolus Den", 16, "Male", "Electronic", 2017, 95.8));
        students.add(new Student(255, "Ali Baig", 17, "Male", "Electronic", 2018, 88.4));
        students.add(new Student(266, "Sanvi Pandey", 17, "Female", "Electric", 2019, 72.4));
        students.add(new Student(277, "Anuj Chettiar", 18, "Male", "Computer Science", 2017, 57.5));

        // 1. Print the name of all departments in the college
        students.stream().map(s->s.getDepartment())
                        .distinct().forEach(System.out::println);

        // 2. Get the names of all students who have enrolled after 2018
        List<String> studentsEnrolledAfter2018=students.stream().filter(s->s.getYearOfEnrollment()>2018)
                        .map(s->s.getName()).toList();
        System.out.println(studentsEnrolledAfter2018);

        // 3. Get the details of all male students in the Computer Science department
        students.stream()
                .filter(s -> s.getGender().equals("Male") && s.getDepartment().equals("Computer Science"))
                .forEach(System.out::println);

        // 4. How many male and female students are there?
        Map<String, Long> genderCount = students.stream()
                .collect(Collectors.groupingBy(
                        Student::getGender,
                        Collectors.counting()
                ));
        System.out.println(genderCount);

        // 5. What is the average age of male and female students?
        Map<String, Double> avgAgeByGender = students.stream()
                .collect(Collectors.groupingBy(Student::getGender, Collectors.averagingInt(Student::getAge)));
        System.out.println(avgAgeByGender);

        // 6. Get the details of the student with the highest percentage
        Student highestPercentageStudent = students.stream()
                .max((s1,s2)->Double.compare(s1.getPercentageTillDate(),s2.getPercentageTillDate()))
                .orElseThrow(()->{
                    try {
                        throw(new Exception("No element found"));
                    } catch (Exception e) {
                        throw new RuntimeException(e);
                    }
                });
        System.out.println(highestPercentageStudent);

        // 7. Count the number of students in each department
        Map<String, Long> departmentCount = students.stream()
                .collect(Collectors.groupingBy(Student::getDepartment, Collectors.counting()));
        System.out.println(departmentCount);

        // 8. What is the average percentage achieved in each department?
        Map<String, Double> avgPercentageByDept = students.stream()
                .collect(Collectors.groupingBy(Student::getDepartment, Collectors.averagingDouble(Student::getPercentageTillDate)));
        System.out.println(avgPercentageByDept);

        // 9. Get the details of the youngest male student in the Electronic department
        Student youngestMaleInElectronic = students.stream()
                .filter(s -> s.getGender().equals("Male") && s.getDepartment().equals("Electronic"))
                .min(Comparator.comparingInt(Student::getAge))
                .orElse(null);
        System.out.println(youngestMaleInElectronic);

        // 10. How many male and female students are there in the Computer Science department?
        Map<String, Long> csGenderCount = students.stream()
                .filter(s -> s.getDepartment().equals("Computer Science"))
                .collect(Collectors.groupingBy(Student::getGender, Collectors.counting()));
                System.out.println(csGenderCount);
    }
}
