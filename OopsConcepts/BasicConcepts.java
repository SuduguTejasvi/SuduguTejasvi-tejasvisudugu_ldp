package OopsConcepts;

interface Fan{
    void on();
    void off();
    void speed();
}
class TableFan implements Fan{
    public void on(){
        System.out.println("Fan is on");
    }
    public void off(){
        System.out.println("Fan is off");
    }
    public void speed(){
        System.out.println("Fan is in normal speed");
    }
    public void height(){
        System.out.println("It is 4 feet height");
    }
}
class HandFan implements Fan{
    public void on(){
        System.out.println("Fan is on");
    }
    public void off(){
        System.out.println("Fan is off");
    }
    public void speed(){
        System.out.println("Fan is in normal speed");
    }
    public void lightOn(){
        System.out.println("light is on");
    }
    public void lightOff(){
        System.out.println("light is off");
    }
}


public class BasicConcepts {
    public static void main(String args[]){
        TableFan tableFan=new TableFan();
        tableFan.on();
        tableFan.off();
        tableFan.speed();
        tableFan.height();
        HandFan handFan=new HandFan();
        handFan.on();
        handFan.off();
        handFan.speed();
        handFan.lightOn();
        handFan.lightOff();
    }

}
