package assignment7.question5;

public class OuterClass {
    public class InnerClass{
        private String message;
        InnerClass(String message){
            this.message=message;
        }
        public void displayMessage() {
            System.out.println("Message: " + message);
        }
    }
}
