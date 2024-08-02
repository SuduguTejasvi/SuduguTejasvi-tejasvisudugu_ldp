package assignment12;

public class Student {
    private int id;
    private String name;
    private int age;
    private String gender;
    private String department;
    private int yearOfEnrollment;
    private double percentageTillDate;

    public Student(int id, String name, int age, String gender, String department, int yearOfEnrollment, double percentageTillDate) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.department = department;
        this.yearOfEnrollment = yearOfEnrollment;
        this.percentageTillDate = percentageTillDate;
    }

    public int getId() { return id; }
    public String getName() { return name; }
    public int getAge() { return age; }
    public String getGender() { return gender; }
    public String getDepartment() { return department; }
    public int getYearOfEnrollment() { return yearOfEnrollment; }
    public double getPercentageTillDate() { return percentageTillDate; }

    @Override
    public String toString() {
        return "Student{id=" + id + ", name='" + name + "', age=" + age + ", gender='" + gender + "', department='" + department + "', yearOfEnrollment=" + yearOfEnrollment + ", percentageTillDate=" + percentageTillDate + '}';
    }
}
