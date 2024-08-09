package ExceptionExamples;

import java.util.Scanner;

class MyException extends Exception {
    public MyException(String message) {
        super(message);
    }
}

public class UserDefinedException {
    public static void checkPassword(String pwd) throws MyException {
        if (pwd.length() < 8) {
            throw new MyException("Password should contain a minimum of 8 characters");
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the password:");
        String password = sc.nextLine();

        try {
            checkPassword(password);
            System.out.println("Password is valid.");
        } catch (MyException e) {
            System.out.println(e.getMessage());
        }
    }
}
