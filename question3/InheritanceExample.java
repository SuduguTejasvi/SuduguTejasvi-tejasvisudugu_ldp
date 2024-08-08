package assignment7.question3;

interface InterfaceOne{
    public void one();
    public void two();
}
interface InterfaceTwo{
    public void three();
    public void four();
}
interface InterfaceThree{
    public void five();
    public void six();
}
interface NewInterface extends InterfaceOne,InterfaceTwo,InterfaceThree{
    public void newMethod();
}
class ClassOne{
    public void classOneMethod(){
        System.out.println("Class One Method");
    }
}
class ClassImplementation extends ClassOne implements NewInterface {

    @Override
    public void newMethod() {
        System.out.println("New Interface Method");
    }

    @Override
    public void one() {
        System.out.println("InterfaceOne method one");
    }

    @Override
    public void two() {
        System.out.println("InterfaceOne method two");
    }

    @Override
    public void five() {
        System.out.println("InterfaceThree method five");
    }

    @Override
    public void six() {
        System.out.println("InterfaceThree method six");
    }

    @Override
    public void three() {
        System.out.println("InterfaceTwo method three");
    }

    @Override
    public void four() {
        System.out.println("InterfaceTwo method four");
    }
}
public class InheritanceExample {

    public static void methodInterfaceOne(InterfaceOne i) {
        i.one();
        i.two();
    }

    public static void methodInterfaceTwo(InterfaceTwo i) {
        i.three();
        i.four();
    }

    public static void methodInterfaceThree(InterfaceThree i) {
        i.five();
        i.six();
    }

    public static void methodNewInterface(NewInterface i) {
        i.newMethod();
        i.one();
        i.two();
        i.three();
        i.four();
        i.five();
        i.six();
    }

    public static void main(String[] args) {
        ClassImplementation obj = new ClassImplementation();

        System.out.println("Calling methodInterfaceOne:");
        methodInterfaceOne(obj);

        System.out.println("\nCalling methodInterfaceTwo:");
        methodInterfaceTwo(obj);

        System.out.println("\nCalling methodInterfaceThree:");
        methodInterfaceThree(obj);

        System.out.println("\nCalling methodNewInterface:");
        methodNewInterface(obj);
    }
}

