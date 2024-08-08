package assignment6.stringconstructor;

public class Main {
    public Main(String message){
        System.out.println(message);
    }
    public static void main(String args[]){
        Main[] obj=new Main[4];

        for(int i=0;i<obj.length;i++){
            obj[i]=new Main("Object"+i);
        }
    }
}
