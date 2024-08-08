package MultiThreadingExample;

class LightSwitch{
    public volatile boolean isOn=false;
    void lightSwitchToOff(){
        isOn=false;
        System.out.println("Light is off");
    }
    void lightSwitchToOn(){
        isOn=true;
        System.out.println("Light is on");
    }
}
class LightOnThread extends Thread{
    LightSwitch lightSwitch=new LightSwitch();
    public LightOnThread(LightSwitch lightSwitch){
        this.lightSwitch=lightSwitch;
    }
    public void run(){
        lightSwitch.lightSwitchToOn();
    }

}
class LightOffThread extends Thread{
    LightSwitch lightSwitch=new LightSwitch();
    public LightOffThread(LightSwitch lightSwitch){
        this.lightSwitch=lightSwitch;
    }
    public void run(){
        lightSwitch.lightSwitchToOff();
    }

}
public class VolatileKeywordExample {
    public static void main(String args[]){
        LightSwitch lightSwitch = new LightSwitch();

        LightOnThread switchOnThread = new LightOnThread(lightSwitch);
        LightOffThread switchOffThread = new LightOffThread(lightSwitch);

        switchOnThread.start();
        switchOffThread.start();

    }
}
