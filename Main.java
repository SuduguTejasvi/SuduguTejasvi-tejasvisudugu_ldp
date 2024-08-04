package assignment11;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
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
  
    public static void  throwExceptions(int exceptionType) throws CustomException1, CustomException2, CustomException3 {
        switch (exceptionType) {
            case 1:
                throw new CustomException1("Custom Exception 1");
            case 2:
                throw new CustomException2("Custom Exception 2");
            case 3:
                throw new CustomException3("Custom Exception 3");
            default:
                throw new NullPointerException("No exception specified");
        }
    }
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
      try {
            throwExceptions(9);
        } catch (CustomException1 | CustomException2 | CustomException3 | NullPointerException e) {
            System.out.println("Caught exception: " + e.getMessage());
        } finally {
            System.out.println("This is the finally block,");
        }
      getChractersCount();

    }
}

