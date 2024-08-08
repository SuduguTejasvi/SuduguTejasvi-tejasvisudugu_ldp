package tejasvi.assignment.data;

public class InitializationClass {
    private int a;
    private char b;
    public void getInstancevariables(){
        System.out.println("a="+a+"b="+b);
    }
    public void getLocalVariables(){
        int c;
        char d;
        System.out.println("Cannot call local variables because they are not initailzed");
//        System.out.println("c="+c+"d="+d);
    }
}
