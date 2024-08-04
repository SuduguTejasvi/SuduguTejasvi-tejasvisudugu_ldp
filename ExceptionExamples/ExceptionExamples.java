package ExceptionExamples;

import jdk.jshell.SourceCodeAnalysis;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ExceptionExamples {
    public static void arrayIndexExceptionExample(int[] arr){
        try{
            int num=arr[5];
            System.out.println(num);
        }
        catch(ArrayIndexOutOfBoundsException e){
            e.printStackTrace();
        }
    }
    public static void numberFormatExceptionExample(){
        try{
            String ans="Try";
            int num=Integer.parseInt(ans);
        }
        catch (NumberFormatException e) {
            System.out.println(e.toString());
        }
    }
    public static void arithmeticExceptionExample(){
        int a=9,b=0;
        try {
            int c = a / b;
            System.out.println(c);
        }
        catch (ArithmeticException e){
            System.out.println(e.getMessage());

        }
        catch(Exception e){
            System.out.println(e.getMessage());
        }
    }
    public static void fileNotFoundExample() throws FileNotFoundException{
        File file=new File("one.txt");
        Scanner myFileContent=new Scanner(file);
        System.out.print(myFileContent);
    }
    public static void main(String args[]){
        int arr[]={1,2,3,4,5,};
        arrayIndexExceptionExample(arr);
        numberFormatExceptionExample();
        arithmeticExceptionExample();
        try{
            fileNotFoundExample();
        }
        catch(FileNotFoundException e){
            System.out.println(e.getMessage());
        }


    }

}
