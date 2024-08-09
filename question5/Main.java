package assignment7.question5;

public class Main {
    public static void main(String args[]){
        OuterClass.InnerClass inner = new OuterClass().new InnerClass("Hello from InnerClass");
        inner.displayMessage();
        SecondClass.SecondInnerClass secondInner=new SecondClass().new SecondInnerClass(new OuterClass(),"Hello from InheritedInnerClass");
        secondInner.displayMessage();
    }
}
