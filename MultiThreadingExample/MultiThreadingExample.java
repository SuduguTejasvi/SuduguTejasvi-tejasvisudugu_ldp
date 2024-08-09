package MultiThreadingExample;
//we can implement threads by thread class or runnable interface
class Thread1 extends Thread{
    public void run(){
       for(int i=0;i<10;i++){
           System.out.println("Hiii");
           try {
               Thread.sleep(1);//waits for 1 millisecond
           } catch (InterruptedException e) {
               throw new RuntimeException(e);
           }
       }
    }
}
class Thread2 implements Runnable{
    Thread t;
    public Thread2(){
        t=new Thread(this);
        t.start();
    }
    public void run(){
       for(int i=0;i<10;i++){
           System.out.println("Hello");
           try {
               t.sleep(1);
           } catch (InterruptedException e) {
               throw new RuntimeException(e);
           }
       }
    }
}
public class MultiThreadingExample {
    public static void main(String args[]){
        Thread1 thread1=new Thread1();
        new Thread2();
        thread1.setPriority(10);
        thread1.start();//starts the new thread implicitly calls runs method

    }
}
