package streams.poc;

import java.util.Date;

public class Student {
    int id;
    String sname;
    int marks;
    String department;
    int age;
    String address;
    String email;
    String phoneNumber;
    Date enrollmentDate;
    double gpa;
    String gender;
    String place;

    public Student(int id, String sname, int marks, String department, int age, String address, String email, String phoneNumber, Date enrollmentDate, double gpa, String gender, String place) {
        this.id = id;
        this.sname = sname;
        this.marks = marks;
        this.department = department;
        this.age = age;
        this.address = address;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.enrollmentDate = enrollmentDate;
        this.gpa = gpa;
        this.gender = gender;
        this.place = place;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSname() {
        return sname;
    }

    public void setSname(String sname) {
        this.sname = sname;
    }

    public int getMarks() {
        return marks;
    }

    public void setMarks(int marks) {
        this.marks = marks;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Date getEnrollmentDate() {
        return enrollmentDate;
    }

    public void setEnrollmentDate(Date enrollmentDate) {
        this.enrollmentDate = enrollmentDate;
    }

    public double getGpa() {
        return gpa;
    }

    public void setGpa(double gpa) {
        this.gpa = gpa;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + sname + '\'' +
                ", marks=" + marks +
                ", department='" + department + '\'' +
                ", age=" + age +
                ", address='" + address + '\'' +
                ", email='" + email + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", enrollmentDate=" + enrollmentDate +
                ", gpa=" + gpa +
                ", gender='" + gender + '\'' +
                ", place='" + place + '\'' +
                '}';
    }
}
