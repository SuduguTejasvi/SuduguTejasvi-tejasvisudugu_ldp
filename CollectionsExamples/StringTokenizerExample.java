package CollectionsExamples;

import java.util.StringTokenizer;

public class StringTokenizerExample {
    public static void main(String args[]){
        StringTokenizer message=new StringTokenizer("Hi hello,how/are you?","/, ");
        while(message.hasMoreTokens()){
            System.out.println(message.nextToken());
        }
    }
}
