/*
*Calculator class
* Author:Tejasvi
* Date-17-07-2024
*/

import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter operation you want to perform");
        String mode=sc.nextLine();
        System.out.println(("Enter two numbers"));
        int num1=sc.nextInt();
        int num2=sc.nextInt();
        int num3=0;
        if(mode.equalsIgnoreCase("sum")) {
            num3=num1+num2;
            System.out.println("sum of "+num1+"and "+num2+"="+num3);
        }
        else if(mode.equalsIgnoreCase("difference")) {
            num3=num1-num2;
            System.out.println("difference of "+num1+"and "+num2+"="+num3);
        }
        else if(mode.equalsIgnoreCase("multiply")) {
            num3=num1*num2;
            System.out.println("multiplication of "+num1+" and "+num2+"="+num3);
        }
        else if(mode.equalsIgnoreCase("division")) {
            num3=num1/num2;
            System.out.println("division of "+num1+" and "+num2+"="+num3);
        }
        else {
            System.out.println("Please Enter valid operation");
        }


    }
}