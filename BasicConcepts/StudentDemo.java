package BasicConcepts;

// Interface
interface StudentManager {
    void calculatePercentage();
}

// Base class
class Student implements StudentManager {
    private String name;
    private int marks;

    // Constructor
    public Student(String name, int marks) {
        this.name = name;
        this.marks = marks;
    }

    // Getter and Setter methods
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getMarks() {
        return marks;
    }

    public void setMarks(int marks) {
        this.marks = marks;
    }

    @Override
    public void calculatePercentage() {
        System.out.println("Percentage:"+((float)marks/500)*100);
    }
    public String toString(){
        return "Student Name "+ name+";"+"Student Marks "+marks;
    }
    public boolean equals(Object obj) {
        Student student = (Student) obj;
        return marks == student.marks && name.equals(student.name);
    }
}

public class StudentDemo {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("John");
        String studentName = sb.toString();

        // Array usage
        Student[] students = {
                new Student(studentName, 400),
                new Student("Alice", 450),
                new Student("Bob", 375)
        };

        for (Student student : students) {
            System.out.println(student);
            student.calculatePercentage();
        }

        // If-Else and Ternary Operator
        Student firstStudent = students[0];
        String performance = firstStudent.getMarks() > 90 ? "Excellent" : "Needs Improvement";

        // Switch statement
        switch (performance) {
            case "Excellent"-> System.out.println(firstStudent.getName() + " has an excellent performance.");
            case "Needs Improvement"-> System.out.println(firstStudent.getName() + " needs improvement.");
            default-> System.out.println("Unknown performance.");
        }

        // Equals method usage
        Student anotherStudent = new Student(studentName, 85);
        System.out.println("Students are equal: " + firstStudent.equals(anotherStudent));
    }
}

