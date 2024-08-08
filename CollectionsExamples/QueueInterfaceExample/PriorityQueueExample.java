package CollectionsExamples.QueueInterfaceExample;

import java.util.Collection;
import java.util.Collections;
import java.util.PriorityQueue;

public class PriorityQueueExample {
   public static void main(String args[]){
       PriorityQueue<Integer> marks = new PriorityQueue<>(Collections.reverseOrder());
       marks.add(100);
       marks.add(40);
       marks.add(50);
       marks.add(60);
       marks.add(20);
       marks.add(90);
       while (!marks.isEmpty()) {
           System.out.println((marks.poll()));
       }

   }
}
