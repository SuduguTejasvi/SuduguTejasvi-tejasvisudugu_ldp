package InnerClassesExamples;

interface Animal {
    void sound();
}


public class LambdaExample {
    public static void main(String args[]) {
        Animal dog = () -> System.out.println("Bow Bow");

        dog.sound();
    }
}
