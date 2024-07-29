package Assignment6;

public class ConstructorOverloading {
    ConstructorOverloading(){
        this("hi,hello Good morning");
        System.out.println("Default constructor");
    }
    ConstructorOverloading(String msg){
        System.out.println(msg);
    }
    public static void main(String args[]){
        ConstructorOverloading constructorOverloading=new ConstructorOverloading();
    }
}
