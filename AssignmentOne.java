package Assignments;

import java.io.File;
import java.util.Scanner;
import java.util.regex.Pattern;
import java.util.regex.PatternSyntaxException;

public class AssignmentOne {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // Get the user's home directory path using environment variables
        String homeDirectory = "C:\\Users\\Tejasvi\\IdeaProjects";

        while (true) {
            System.out.print("Enter a regular expression to search for files (or 'exit' to quit): ");
            String regex = scanner.nextLine();
            if (regex.equalsIgnoreCase("exit")) {
                break;
            }

            try {
                System.out.println("Checking...");
                Pattern pattern = Pattern.compile(regex);
                System.out.println(pattern);
                searchFiles(new File(homeDirectory), pattern);
            } catch (PatternSyntaxException e) {
                System.out.println("Invalid regular expression. Please try again.");
            }
        }

        scanner.close();
    }


    private static void searchFiles(File directory, Pattern pattern) {
        if (!directory.isDirectory()) {
            System.out.println("Not a directory: " + directory.getAbsolutePath());
            return;
        }

        File[] files = directory.listFiles();
        if (files == null) {
            System.out.println("No files found in: " + directory.getAbsolutePath());
            return;
        }

        for (File file : files) {
            if (file.isDirectory()) {
                searchFiles(file, pattern);
            } else if (pattern.matcher(file.getName()).matches()) {
                System.out.println("Found match: " + file.getAbsolutePath());
            }
        }
    }
}
