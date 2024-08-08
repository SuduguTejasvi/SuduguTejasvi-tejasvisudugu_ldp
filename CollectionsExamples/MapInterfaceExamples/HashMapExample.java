package CollectionsExamples.MapInterfaceExamples;

import java.util.HashMap;
import java.util.Map;

public class HashMapExample {
    public static void main(String args[]){
        HashMap<Integer,String> employees=new HashMap<>();
        employees.put(1,"Risha");
        employees.put(2,"Preeth");
        employees.put(3,"Raj");
        for (Map.Entry<Integer, String> e : employees.entrySet()){
            System.out.println(e.getKey()+" "+e.getValue());

        }
        System.out.println("Employee name with id -2");
        if(employees.containsKey(2)){
            System.out.println(employees.get(2));
        }
        else{
            System.out.println("Employee not present");
        }
    }
}
