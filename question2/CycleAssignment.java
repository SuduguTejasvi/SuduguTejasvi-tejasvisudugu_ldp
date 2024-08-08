package assignment7.question2;

class Cycle{
    public Cycle() {
        System.out.println("Cycle");
    }

    public void balance(){
        System.out.println("Cycle balance method");
    }
}
class UniCycle extends Cycle{
    public UniCycle() {
        System.out.println("Uni cycle");
    }

    @Override
    public void balance(){
        System.out.println("Uni Cycle balance method");
    }

}
class BiCycle extends Cycle{
    public BiCycle() {
        System.out.println("Bi cycle");
    }

    @Override
    public void balance(){
        System.out.println("Bi Cycle balance method");
    }

}
class TriCycle extends Cycle{
    public TriCycle() {
        System.out.println("Tri cycle");
    }
}
public class CycleAssignment {
    public static void main(String args[]){
        Cycle[] cycles=new Cycle[3];
        cycles[0]=new UniCycle();
        cycles[1]=new BiCycle();
        cycles[2]=new TriCycle();
        for(Cycle cycle:cycles){
            cycle.balance();
        }
        ((UniCycle)cycles[0]).balance();
        ((BiCycle)cycles[1]).balance();
        ((TriCycle)cycles[2]).balance();

    }
}

