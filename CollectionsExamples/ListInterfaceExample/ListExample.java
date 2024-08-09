package CollectionsExamples.ListInterfaceExample;

import java.util.ArrayList;

public class ListExample {
    public static void main(String args[]){
        ArrayList<String> flowers=new ArrayList<>();
        flowers.add("Rose");
        flowers.add("Jasmine");
        flowers.add("Lily");
        flowers.add("tulip");
        for(String flower:flowers){
            System.out.println(flower);
        }
        System.out.println("removed "+flowers.remove(1));
    }
}
