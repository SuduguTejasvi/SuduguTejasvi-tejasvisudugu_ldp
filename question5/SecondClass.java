package assignment7.question5;

public class SecondClass extends OuterClass{
    public class SecondInnerClass extends OuterClass.InnerClass{
        public SecondInnerClass (OuterClass outerClass,String message){
            outerClass.super(message);
        }
        @Override
        public void displayMessage() {
            System.out.println("Inherited Message: ");
            super.displayMessage();
        }

    }
}
