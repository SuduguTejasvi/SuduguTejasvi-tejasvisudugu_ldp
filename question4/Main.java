package assignment7.question4;

interface  Cycle{
    void ride();
}
class UniCycle implements Cycle{
    public void ride(){
        System.out.println("Riding a Unicycle");
    }
}
class BiCycle implements Cycle{
    public void ride(){
        System.out.println("Riding a Bicycle");
    }
}
class TriCycle implements Cycle{
    public void ride(){
        System.out.println("Riding a Tricycle");
    }
}
interface CycleFactory {
    Cycle createCycle();
}
class UnicycleFactory implements CycleFactory {
    @Override
    public Cycle createCycle() {
        return new UniCycle();
    }
}
class BicycleFactory implements CycleFactory {
    @Override
    public Cycle createCycle() {
        return new BiCycle();
    }
}
class TricycleFactory implements CycleFactory {
    @Override
    public Cycle createCycle() {
        return new TriCycle();
    }
}

public class Main {
    public static void main(String args[]){

        CycleFactory unicycleFactory = new UnicycleFactory();
        Cycle unicycle = unicycleFactory.createCycle();
        unicycle.ride();

        CycleFactory bicycleFactory = new BicycleFactory();
        Cycle bicycle = bicycleFactory.createCycle();
        bicycle.ride();

        CycleFactory tricycleFactory = new TricycleFactory();
        Cycle tricycle = tricycleFactory.createCycle();
        tricycle.ride();

    }
}
