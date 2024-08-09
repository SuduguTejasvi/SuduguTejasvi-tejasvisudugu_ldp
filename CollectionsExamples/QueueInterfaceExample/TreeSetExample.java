package CollectionsExamples.QueueInterfaceExample;

import java.util.ArrayDeque;

public class TreeSetExample {
    public static void main(String args[]){
        ArrayDeque<String> fruits=new ArrayDeque<>();
        fruits.addLast("Mango");
        fruits.addFirst("Apple");
        fruits.addLast("Banana");
        fruits.addLast("Papaya");
        fruits.addLast("Watermelon");
        System.out.println("Size="+fruits.size());
        while(!fruits.isEmpty()){
            System.out.println(fruits.poll());
        }
        System.out.println("Size="+fruits.size());
    }
}
