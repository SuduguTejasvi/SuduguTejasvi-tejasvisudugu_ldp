package Assignments;

import java.util.HashSet;
import java.util.Scanner;


//Time complexity-O(N)
//space complexity-O(1)
public class AssignmentTwo {
    public static boolean containsAllAlphabets(String input){
        HashSet<Character> letters=new HashSet<>();
        if(input==null||input.length()<26)
            return false;
        for(char c:input.toCharArray()){
            if(Character.isLetter(c)){
                letters.add(Character.toLowerCase(c));
            }
        }
        if(letters.size()==26)
            return true;
        return false;
    }
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the string");
        String input=sc.nextLine();
        if(containsAllAlphabets(input)){
            System.out.println(input+" contains all the alphabets from a-z");
        }
        else{
            System.out.println(input+" does not contain all the alphabets from a-z");
        }
    }
}
