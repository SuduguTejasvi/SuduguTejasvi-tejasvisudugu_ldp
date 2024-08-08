package assignment6.constructoroverloading;

public class Main {
    Main(){
        this("hi,hello Good morning");
        System.out.println("Default constructor");
    }
    Main(String msg){
        System.out.println(msg);
    }
    public static void main(String args[]){
        Main constructorOverloading=new Main();
    }
}
