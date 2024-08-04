package assignment9.sentencematcher;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.Scanner;

public class Main {
  
    public static void  throwExceptions(int exceptionType) throws CustomException1, CustomException2, CustomException3 {
        switch (exceptionType) {
            case 1:
                throw new CustomException1("Custom Exception 1");
            case 2:
                throw new CustomException2("Custom Exception 2");
            case 3:
                throw new CustomException3("Custom Exception 3");
            default:
                throw new NullPointerException("No exception specified");
        }
    }
    public static void main(String args[]){
        Pattern pattern=Pattern.compile("^[A-Z][^.]*\\.$");
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter a sentence=");
        String sentence=sc.nextLine();
        Matcher m=pattern.matcher(sentence);
        if (m.find()) {
            System.out.println("Given "+ sentence +"is a valid sentence");
        }
        else{
            System.out.println("Sorry,"+ sentence+" is a invalid sentence");
        }
      try {
            throwExceptions(9);
        } catch (CustomException1 | CustomException2 | CustomException3 | NullPointerException e) {
            System.out.println("Caught exception: " + e.getMessage());
        } finally {
            System.out.println("This is the finally block,");
        }

    }
}

