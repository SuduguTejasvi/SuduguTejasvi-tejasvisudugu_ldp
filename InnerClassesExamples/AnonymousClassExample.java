package InnerClassesExamples;

abstract class Human{
    void walk(){
        System.out.println("Humans can walk");
    }
    void breathe(){
        System.out.println("Humans breathe");
    }
    abstract void sing();
    abstract void dance();
}
public class AnonymousClassExample {
    public static void main(String args[]){
        Human krishna=new Human(){
            void sing(){
                System.out.println("Krishna can sing");
            }
            void dance(){
                System.out.println("Krishna can dance");
            }
        };
        krishna.walk();
        krishna.breathe();
        krishna.dance();
        krishna.sing();

    }
}
