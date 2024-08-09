package MultiThreadingExample;

class Table{
    synchronized public void printTable(int n){
        for(int i=1;i<=30;i++){
            System.out.println(n +" * "+i+" = "+n*i);
        }
    }
}
class ThreadOne extends Thread{
    Table table;
    public ThreadOne(Table table){
        this.table=table;
    }
    public void run(){
        table.printTable(5);
    }
}
class ThreadTwo extends Thread{
    Table table;
    public ThreadTwo(Table table){
        this.table=table;
    }
    public void run(){
        table.printTable(15);
    }
}
public class SynchronizedKeyword {
    public static void main(String args[]){
        Table table=new Table();
        ThreadOne threadOne=new ThreadOne(table);
        ThreadTwo threadTwo=new ThreadTwo(table);
        threadOne.start();
        threadTwo.start();
    }
}
