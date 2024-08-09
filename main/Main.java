package tejasvi.assignment.main;

import tejasvi.assignment.data.InitializationClass;
import tejasvi.assignment.singleton.SingletonClass;

public class Main {
    public static void main(String args[]){
        InitializationClass ic=new InitializationClass();
        ic.getInstancevariables();
        ic.getLocalVariables();
        SingletonClass sc1=SingletonClass.setName("Priyanka");
        sc1.getName();
        SingletonClass sc2=SingletonClass.setName("Tejasvi");
        sc2.getName();

    }
}
