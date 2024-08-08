package CollectionsExamples.SetInterfaceExample;

import java.util.HashSet;

public class HashSetExample {
    public static void main(String args[]){
        HashSet<String> colors=new HashSet<>();
        colors.add("Red");
        colors.add("Yellow");
        colors.add("Black");
        colors.add("Pink");
        colors.add("Black");//doesnot allow duplicate elements
        for(String color:colors){
            System.out.println(color);
        }
        System.out.println(colors.remove("Black")+"\n"+"After Deletion");
        for(String color:colors){
            System.out.println(color);
        }
    }
}
