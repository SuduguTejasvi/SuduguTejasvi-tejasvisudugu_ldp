package WrapperClassExample;

public class WrapperClassExample {
    public static void main(String args[]){
        int age=21;
        Integer ageClass=Integer.valueOf(age);//boxing
//        Integer ageClass=age;//auto boxing
//        int ageVar=ageClass;//auto un-boxing
        int ageVar=ageClass.intValue();//un-boxing
        System.out.println(age);
    }
}
