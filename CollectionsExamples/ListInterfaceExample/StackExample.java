package CollectionsExamples.ListInterfaceExample;

import java.util.Stack;

public class StackExample {
    public static void main(String args[]){
        Stack<String> students=new Stack<>();
        students.push("Raghavi");
        students.push("Kartheeka");
        students.push("Manaswini");
        students.push("Kaavya");
        System.out.println(students.search("Kaavya"));
        while(!students.empty()){
            System.out.println(students.pop());
        }
    }
}
