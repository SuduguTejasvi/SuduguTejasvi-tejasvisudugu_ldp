package assignment9.sentencematcher;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.Scanner;

public class Main {
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

    }
}
