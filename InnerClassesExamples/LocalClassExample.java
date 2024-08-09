package InnerClassesExamples;

public class LocalClassExample {
    public static void main(String args[]){
        class LocalClass{
            void getGreetings(){
                System.out.println("Hi, hello good morning to everyone");
            }
        }
        LocalClass localClass=new LocalClass();
        localClass.getGreetings();

    }
}
