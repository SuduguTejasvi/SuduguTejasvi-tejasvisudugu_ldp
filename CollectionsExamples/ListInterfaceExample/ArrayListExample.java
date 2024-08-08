package CollectionsExamples.ListInterfaceExample;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
class StudentDemo{
    int sid;
    String sname;
    int sage;

    public StudentDemo(int sid, String sname, int sage) {
        this.sid = sid;
        this.sname = sname;
        this.sage = sage;
    }

    @Override
    public String toString() {
        return("Id:"+sid+" Name:"+sname+" Age:"+sage);
    }
}
public class ArrayListExample {
    public static void main(String args[]){
        ArrayList<StudentDemo> students=new ArrayList<>();
//    List<StudentDemo> students=new ArrayList<>(); //another way to create a arraylist by referring to list reference
        StudentDemo student1=new StudentDemo(1,"Tejasvi",21);
        StudentDemo student2=new StudentDemo(2,"Krishna",18);
        StudentDemo student3=new StudentDemo(3,"Radha",16);
        StudentDemo student4=new StudentDemo(4,"Ram",21);
        StudentDemo student5=new StudentDemo(5,"Seetha",20);
        students.add(student1);
        students.add(student2);
        students.addAll(Arrays.asList(student3,student4,student5));
        //one way to traverse through the list
//        Iterator itr=students.iterator();
//        while(itr.hasNext()){
//            System.out.println(itr.next());
//        }
        //another way to traverse through the list
        for(StudentDemo student:students) {
            System.out.println(student);
        }
        System.out.println("Size="+students.size());
        students.remove(0);
        //or else i can also pass object which i want to delete in place of index
//        students.remove(student1);
        System.out.println("after removing first element");
        for(StudentDemo student:students) {
            System.out.println(student);
        }
        System.out.println("Size="+students.size());
        System.out.println("Checking details of student whether he is present in records or not");
        if(students.contains(student2)){
            System.out.println("Yes Krishna is present");
        }
        else{
            System.out.println("No Krishna is absent");
        }
        StudentDemo[] studentsArray = students.toArray(new StudentDemo[0]);
        for(StudentDemo student:studentsArray) {
            System.out.println(student);
        }


    }
}
