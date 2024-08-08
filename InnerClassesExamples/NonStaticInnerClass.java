package InnerClassesExamples;
class OuterClass{
    private String name;
    private int age;
    private String gender;
    OuterClass(String name,int age,String gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    class InnerClass{
        void getAgeInMonths(){
            System.out.println("Age in months: "+age*12);
        }
    }
}
public class NonStaticInnerClass {
    public static void main(String args[]){
        OuterClass.InnerClass innerClass=new OuterClass("Teju", 21, "Female").new InnerClass();

        innerClass.getAgeInMonths();

    }
}
