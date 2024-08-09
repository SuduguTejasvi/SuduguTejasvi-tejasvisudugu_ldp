package AbstractClassExample;

abstract class Laptop{
    public void start(){
        System.out.println("Started.......");
    }
    public void stop(){
        System.out.println("Stopped.....");
    }
    public abstract void cut();
    public abstract void  copy();
    public abstract void paste();

}
class Window extends Laptop{
    public void cut(){
        System.out.println("CTRL+X");
    }
    public void copy(){
        System.out.println("CTRL+C");
    }
    public void paste(){
        System.out.println("CTRL+P");
    }
}
class Mac extends Laptop{
    public void cut(){
        System.out.println("Command-X");
    }
    public void copy(){
        System.out.println("Command-C");
    }
    public void paste(){
        System.out.println("Command-P");
    }
}

public class AbstractClassExample {
    public static void main(String args[]){
        Window window=new Window();
        window.copy();
        window.cut();
        window.paste();
        Mac mac=new Mac();
        mac.cut();
        mac.copy();
        mac.paste();
    }

}
