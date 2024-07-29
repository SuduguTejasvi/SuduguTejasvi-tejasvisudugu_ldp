/**
 * BestPracticesExample class
 * Author: Tejasvi
 * Date: 16-07-2024
 */
import java.util.Scanner;

class Order {
    String customerName;
    String customerAddress;
    String orderId;
    String itemCode;
    int quantity;
}

public class BestPracticesExample {

    // Function with one parameter that checks whether a number is even or odd
    static void isEven(int n) {
        if (n % 2 == 0) {
            System.out.println(n + " is an even number");
        } else {
            System.out.println(n + " is an odd number");
        }
    }

    // Function with two parameters to calculate the area of a rectangle
    static float calculateRectangleArea(float length, float breadth) {
        return length * breadth;
    }

    // Function with three parameters to display full name
    static void getFullName(String firstName, String middleName, String lastName) {
        System.out.println("Full name = " + firstName + " " + middleName + " " + lastName);
    }

    // Bad way to get parameters
    void processOrder(String customerName, String customerAddress, String orderId, String itemCode, int quantity) {
        System.out.println("This is a bad way to get the parameters");
    }

    // Good way to get parameters
    void processOrder(Order order) {
        System.out.println("This is a good way to get the parameters");
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Example usage of isEven
        System.out.print("Enter a number to check if it's even or odd: ");
        int number = scanner.nextInt();
        isEven(number);

        // Example usage of calculateRectangleArea
        System.out.print("Enter the length of the rectangle: ");
        float length = scanner.nextFloat();
        System.out.print("Enter the breadth of the rectangle: ");
        float breadth = scanner.nextFloat();
        float area = calculateRectangleArea(length, breadth);
        System.out.println("The area of the rectangle is: " + area);

        // Example usage of getFullName
        System.out.print("Enter first name: ");
        String firstName = scanner.next();
        System.out.print("Enter middle name: ");
        String middleName = scanner.next();
        System.out.print("Enter last name: ");
        String lastName = scanner.next();
        getFullName(firstName, middleName, lastName);

        // Example usage of processOrder
        Order order = new Order();
        order.customerName = "John Doe";
        order.customerAddress = "123 Main St";
        order.orderId = "ORD123";
        order.itemCode = "ITM456";
        order.quantity = 10;

        BestPracticesExample example = new BestPracticesExample();
        example.processOrder(order);

        scanner.close();
    }
}
