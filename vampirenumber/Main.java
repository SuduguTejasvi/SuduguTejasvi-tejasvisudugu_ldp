package assignment6.vampirenumber;

import java.util.Arrays;

public class Main {

    public static void main(String[] args) {
        int count = 0;
        int num = 10;

        while (count < 100) {
            if (isVampireNumber(num)) {
                System.out.println(num);
                count++;
            }
            num++;
        }
    }

    public static boolean isVampireNumber(int number) {
        String numStr = String.valueOf(number);
        int len = numStr.length();

        if (len % 2 != 0) return false;

        for (int i = (int) Math.pow(10, (len / 2) - 1); i < Math.pow(10, len / 2); i++) {
            if (number % i == 0) {
                int factor1 = i;
                int factor2 = number / i;

                // Check if both factors have the correct number of digits
                if (String.valueOf(factor1).length() == len / 2 && String.valueOf(factor2).length() == len / 2) {
                    // Check for trailing zeros
                    if (factor1 % 10 == 0 && factor2 % 10 == 0) {
                        continue;
                    }

                    String productDigits = sortString(numStr);
                    String factorDigits = sortString(String.valueOf(factor1) + String.valueOf(factor2));

                    if (productDigits.equals(factorDigits)) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    public static String sortString(String inputString) {
        char[] tempArray = inputString.toCharArray();
        Arrays.sort(tempArray);
        return new String(tempArray);
    }
}

