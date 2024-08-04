package streams.poc;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.DoubleStream;
import java.util.stream.Stream;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.Scanner;

public class Main {
  
  public static String getInputFromFile(){
        String input="";
        File file=new File("C:\\Users\\Tejasvi\\IdeaProjects\\JavaAssignments\\src\\assignment11\\input.txt");
        Scanner sc= null;
        try {
            sc=new Scanner(file);
            while (sc.hasNextLine()) {
                input = sc.nextLine();
                System.out.println(input);
            }
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }
        return input;
    }
  
    public static void getOutputToFile(HashMap<Character,Integer> charCount){
        FileWriter file = null;
        PrintWriter writer = null;
        try {
            file = new FileWriter("C:\\Users\\Tejasvi\\IdeaProjects\\JavaAssignments\\src\\assignment11\\input.txt",true);
            writer=new PrintWriter(file);
            writer.println(charCount);
        }
        catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }catch (IOException e) {
            throw new RuntimeException(e);
        }

        finally {
            writer.close();
        }
    }
  
  public static HashMap<Character,Integer> getChractersCount()
    {
        HashMap<Character,Integer> charCount=new HashMap<Character,Integer>();
        String input=getInputFromFile();
        for(int i=0;i<input.length();i++){
            if(Character.isLetter(input.charAt(i))){
                if(charCount.containsKey(input.charAt(i))){
                    charCount.put(input.charAt(i),charCount.get(input.charAt(i))+1);
                }
                else{
                    charCount.put(input.charAt(i),1);
                }
            }
        }
        System.out.println(charCount);
        getOutputToFile(charCount);
        return charCount;
    }
  
    public static void  throwExceptions(int exceptionType) throws CustomException1, CustomException2, CustomException3 {
        switch (exceptionType) {
            case 1:
                throw new CustomException1("Custom Exception 1");
            case 2:
                throw new CustomException2("Custom Exception 2");
            case 3:
                throw new CustomException3("Custom Exception 3");
            default:
                throw new NullPointerException("No exception specified");
        }
    }
    public static void main(String args[]){
      
        Pattern pattern=Pattern.compile("^[A-Z][^.]*\\.$");
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter a sentence=");
        String sentence=sc.nextLine();
        Matcher m=pattern.matcher(sentence);
        if (m.find()) {
            System.out.println("Given "+ sentence +"is a valid sentence");
        }
        else{
            System.out.println("Sorry,"+ sentence+" is a invalid sentence");
        }
      try {
            throwExceptions(9);
        } catch (CustomException1 | CustomException2 | CustomException3 | NullPointerException e) {
            System.out.println("Caught exception: " + e.getMessage());
        } finally {
            System.out.println("This is the finally block,");
        }
      getChractersCount();
      
      SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
        try {
            Date enrollmentDate1 = dateFormat.parse("01-09-2020");
            Date enrollmentDate2 = dateFormat.parse("15-08-2019");
            Date enrollmentDate3 = dateFormat.parse("20-01-2021");

            List<Student> students = Arrays.asList(
                    new Student(1, "Krishna", 85, "Computer Science", 20, "123 Main St", "krishna@example.com",
                            "123-456-7890", enrollmentDate1, 8.5, "Female", "New York"),
                    new Student(2, "Radha", 90, "Mechanical Engineering", 22, "456 Oak St", "radha@example.com",
                            "987-654-3210", enrollmentDate2, 9, "Male", "Los Angeles"),
                    new Student(3, "Shiva", 75, "Electrical Engineering", 21, "789 Pine St", "shiva@example.com",
                            "555-123-4567", enrollmentDate3, 7.5, "Male", "Chicago"),
                    new Student(4, "Amit", 85, "Computer Science", 20, "123 Main St", "amit@example.com",
                            "123-456-7890", enrollmentDate1, 3.8, "Male", "Mumbai"),
                    new Student(5, "Priya", 90, "Mechanical Engineering", 22, "456 Oak St", "priya@example.com",
                            "987-654-3210", enrollmentDate2, 3.5, "Female", "Delhi"),
                    new Student(6, "Rahul", 75, "Electrical Engineering", 21, "789 Pine St", "rahul@example.com",
                            "555-123-4567", enrollmentDate3, 3.2, "Male", "Bangalore"),
                    new Student(7, "Sneha", 88, "Civil Engineering", 23, "321 Elm St", "sneha@example.com",
                            "444-555-6666", enrollmentDate3, 3.7, "Female", "Mumbai"),
                    new Student(8, "Vikram", 82, "Chemical Engineering", 24, "654 Cedar St", "vikram@example.com",
                            "777-888-9999", enrollmentDate2, 3.4, "Male", "Delhi"),
                    new Student(9, "Anjali", 95, "Biotechnology", 21, "987 Birch St", "anjali@example.com",
                            "222-333-4444", enrollmentDate3, 3.9, "Female", "Bangalore")
            );

            // Get all student names as a list
            List<String> studentNames = students.stream()
                    .map(student->student.getSname())
                    .toList();
            // Print the list of student names
            System.out.println(studentNames);

            //print all the city names

            students.stream().map(student->student.getPlace())
                                        .distinct()
                                        .forEach(System.out::println);

            //get students with marks greater than 85
            List<Student> toppers=students.stream().filter(s->s.getMarks()>85).toList();

            System.out.println(toppers);

            //get first 3 employee objects

            List<Student> student=students.stream().limit(3).toList();

            System.out.println(student);

            //get next 3 employee objects
            List<Student> nextstudents=students.stream().skip(3).limit(3).toList();

            System.out.println(nextstudents);

            //get any students whose age is greater than 18
            boolean anyStudentGreaterThanEighteen=students.stream().anyMatch(s->s.getAge()>18);
            System.out.println(anyStudentGreaterThanEighteen);

            //get all students whose age is greater than 22
            boolean allStudentGreaterThanTwentyTwo=students.stream().allMatch(s->s.getAge()>22);
            System.out.println(allStudentGreaterThanTwentyTwo);

            //get no students whose age is greater than 22
            boolean noStudentGreaterThanTwentyTwo=students.stream().noneMatch(s->s.getAge()>22);
            System.out.println(noStudentGreaterThanTwentyTwo);

            //get any employee
            Student anyStudent=students.stream().findAny().get();

            System.out.println(anyStudent);

            //get first employee
            Student firstStudent=students.stream().findFirst().get();

            System.out.println(firstStudent);

            //get employee ids elements in sorted manner

            List<Integer> sortedIds=students.stream().map(s->s.getId()).sorted().toList();

            System.out.println(sortedIds);

            //sorted employees
            List<Student> sortedStudents = students.stream()
                    .sorted((s1, s2) -> s1.getId() - s2.getId())
                    .toList();

            System.out.println(sortedStudents);

            //min method
             Student mingpa=students.stream()
                    .min((s1, s2) -> Double.compare(s1.getGpa(), s2.getGpa())).get();

             System.out.println(mingpa);

             //get avg gpa

            double gpa=students.stream().mapToDouble(s->s.getGpa()).average().getAsDouble();

            System.out.println(gpa);

            //peek-get students of computer science branch
            List<Student> filterbranch=students.stream()
                                                .peek(System.out::println)
                                                .filter(s->s.getDepartment()=="Computer Science").toList();
            System.out.println(filterbranch);
            //get list to students using collector
            List<Student> ages=students.stream().filter(s->s.getAge()>18).collect(Collectors.toList());;

            System.out.println(ages);

            //unique department ids
            Set<String> departments = students.stream()
                    .map(Student::getDepartment)
                    .collect(Collectors.toSet());

            System.out.println(departments);

            Map<Integer, String> studentIdsNames = students.stream()
                    .collect(Collectors.toMap(
                            Student::getId,
                            Student::getSname
                    ));

            System.out.println(studentIdsNames);

            //grouping by get average gpa in each department
            Map<String, Double> groupByDept = students.stream()
                    .collect(Collectors.groupingBy(
                            Student::getDepartment,
                            Collectors.averagingDouble(Student::getGpa)
                    ));

            System.out.println(groupByDept);

            //counting departments
            Map<String, Long> countDept = students.stream()
                    .collect(Collectors.groupingBy(
                            Student::getDepartment,
                            Collectors.counting()
                    ));

            System.out.println(countDept);

            //summing

            int summarks=students.stream().collect(Collectors.summingInt(Student::getMarks));

            System.out.println(summarks);


            //summarizing
            System.out.println(students.stream().collect(Collectors.summarizingInt(Student::getMarks)));


            //maxby
            System.out.println(students.stream().collect(Collectors.maxBy((s1,s2)->s1.getAge()-s2.getAge())).get());


            //joining
            System.out.println(students.stream().map(s->s.getSname()).collect(Collectors.joining(",")));



        } catch (ParseException e) {
            throw new RuntimeException(e);
        }

    }
}
