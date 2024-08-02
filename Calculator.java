/*
*Calculator class
* Author: Tejasvi
* Date-17-07-2024
*/

import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter operation you want to perform");
        String mode = sc.nextLine();
        System.out.println("Enter two numbers");
        int num1 = sc.nextInt();
        int num2 = sc.nextInt();
        int num3 = 0;

        switch (mode.toLowerCase()) {
            case "sum":
                num3 = num1 + num2;
                System.out.println("Sum of " + num1 + " and " + num2 + " = " + num3);
                break;
            case "difference":
                num3 = num1 - num2;
                System.out.println("Difference of " + num1 + " and " + num2 + " = " + num3);
                break;
            case "multiply":
                num3 = num1 * num2;
                System.out.println("Multiplication of " + num1 + " and " + num2 + " = " + num3);
                break;
            case "division":
                if (num2 != 0) {
                    num3 = num1 / num2;
                    System.out.println("Division of " + num1 + " and " + num2 + " = " + num3);
                } else {
                    System.out.println("Cannot divide by zero");
                }
                break;
            default:
                System.out.println("Please enter a valid operation");
                break;
        }

        sc.close();
    }
}
