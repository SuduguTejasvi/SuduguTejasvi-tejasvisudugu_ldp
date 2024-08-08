package Assignments;

import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class AssignmentThree {

    public static void calculateMedianPing(String address) {
        ArrayList<Long> times = new ArrayList<>();

        for (int i = 0; i < 10; i++) {
            try {
                InetAddress inetAddress = InetAddress.getByName(address);
                long startTime = System.currentTimeMillis();
                if (inetAddress.isReachable(1000)) { // 1 second timeout
                    long finishTime = System.currentTimeMillis();
                    times.add(finishTime - startTime);
//                    System.out.println("Ping " + (i + 1) + " time: " + (finishTime - startTime) + " ms");
                } else {
                    System.out.println("Ping " + (i + 1) + " failed.");
                }
            } catch (UnknownHostException e) {
                System.out.println("Unknown host: " + address);
                return;
            } catch (IOException e) {
                System.out.println("Error pinging host: " + e.getMessage());
                return;
            }
        }

        if (times.isEmpty()) {
            System.out.println("No successful pings to calculate median.");
        } else {
            double median = calculateMedian(times);
            System.out.println("Median ping time: " + median + " ms");
        }
    }

    public static double calculateMedian(ArrayList<Long> values) {
        Collections.sort(values);
        int size = values.size();
        if (size % 2 == 0) {
            return (values.get(size / 2 - 1) + values.get(size / 2)) / 2.0;
        } else {
            return values.get(size / 2);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the hostname:");
        String hostname = sc.nextLine();
        calculateMedianPing(hostname);
        sc.close();
    }
}
