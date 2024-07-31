package assignment8;

import assignment8.customexceptions.CustomException1;
import assignment8.customexceptions.CustomException2;
import assignment8.customexceptions.CustomException3;

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
    public static void main(String[] args) {

        try {
            throwExceptions(6);
        } catch (CustomException1 | CustomException2 | CustomException3 | NullPointerException e) {
            System.out.println("Caught exception: " + e.getMessage());
        } finally {
            System.out.println("This is the finally block,");
        }
    }


}
