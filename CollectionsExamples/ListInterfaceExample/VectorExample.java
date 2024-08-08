package CollectionsExamples.ListInterfaceExample;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;
import java.util.Vector;

public class VectorExample {
    public static void main(String args[]) throws IOException {
            //Create an empty vector with initial capacity 4
            Vector<String> vec = new Vector<String>();
            //Adding elements to a vector
            System.out.println("Default capacity is: "+vec.capacity());
            vec.add("Tiger");
            vec.add("Lion");
            vec.add("Dog");
            vec.add("Elephant");
            //Check size and capacity
            System.out.println("Size is: "+vec.size());
            System.out.println("Default capacity is: "+vec.capacity());
            //Display Vector elements
            System.out.println("Vector element is: "+vec);
            vec.addElement("Rat");
            vec.addElement("Cat");
            vec.addElement("Deer");
            //Again check size and capacity after two insertions
            System.out.println("Size after addition: "+vec.size());
            System.out.println("Capacity after addition is: "+vec.capacity());
            //Display Vector elements again
            System.out.println("Elements are: "+vec);
            //Checking if Tiger is present or not in this vector
            if(vec.contains("Tiger"))
            {
                System.out.println("Tiger is present at the index " +vec.indexOf("Tiger"));
            }
            else
            {
                System.out.println("Tiger is not present in the list.");
            }
            //Get the first element
            System.out.println("The first animal of the vector is = "+vec.firstElement());
            //Get the last element
            System.out.println("The last animal of the vector is = "+vec.lastElement());

//        FileReader reader=new FileReader("C:\\Users\\Tejasvi\\IdeaProjects\\CoreConceptsPOC\\src\\CollectionsExamples\\ListInterfaceExample\\User.tsx");
//        Properties properties=new Properties();
//        properties.load(reader);
//        System.out.println(properties.getProperty("username"));
//        System.out.println(properties.getProperty("password"));

    }
}
