package tejasvi.assignment.singleton;

public class SingletonClass {
    private String name;
    public static SingletonClass setName(String sname){
        SingletonClass sc=new SingletonClass();
        sc.name=sname;
        return sc;
    }
    public void getName(){
        System.out.println("Name="+name);
    }
}
