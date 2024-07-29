package Assignment6;

public class StringConstructor {
    public StringConstructor(String message){
        System.out.println(message);
    }
    public static void main(String args[]){
        StringConstructor[] obj=new StringConstructor[4];

        for(int i=0;i<obj.length;i++){
            obj[i]=new StringConstructor("Object"+i);
        }
    }
}
