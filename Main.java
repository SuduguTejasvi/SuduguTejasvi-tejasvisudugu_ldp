package assignment11;

import java.io.*;
import java.util.HashMap;
import java.util.Scanner;

public class Main {

    public static String getInputFromFile(){
        String input="";
        File file=new File("C:\\Users\\Tejasvi\\IdeaProjects\\JavaAssignments\\src\\assignment11\\input.txt");
        Scanner sc= null;
        try {
            sc=new Scanner(file);
            while (sc.hasNextLine()) {
                input = sc.nextLine();
                System.out.println(input);
            }
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }
        return input;
    }
    public static void getOutputToFile(HashMap<Character,Integer> charCount){
        FileWriter file = null;
        PrintWriter writer = null;
        try {
            file = new FileWriter("C:\\Users\\Tejasvi\\IdeaProjects\\JavaAssignments\\src\\assignment11\\input.txt",true);
            writer=new PrintWriter(file);
            writer.println(charCount);
        }
        catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }catch (IOException e) {
            throw new RuntimeException(e);
        }

        finally {
            writer.close();
        }
    }
    public static HashMap<Character,Integer> getChractersCount()
    {
        HashMap<Character,Integer> charCount=new HashMap<Character,Integer>();
        String input=getInputFromFile();
        for(int i=0;i<input.length();i++){
            if(Character.isLetter(input.charAt(i))){
                if(charCount.containsKey(input.charAt(i))){
                    charCount.put(input.charAt(i),charCount.get(input.charAt(i))+1);
                }
                else{
                    charCount.put(input.charAt(i),1);
                }
            }
        }
        System.out.println(charCount);
        getOutputToFile(charCount);
        return charCount;
    }

    public static void main(String args[]){
        getChractersCount();

    }
}
