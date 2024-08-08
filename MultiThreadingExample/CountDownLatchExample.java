package MultiThreadingExample;

import java.util.concurrent.CountDownLatch;

class Worker implements Runnable{
    CountDownLatch latch;
    String taskName;
    Worker(CountDownLatch latch,String taskName){
        this.latch=latch;
        this.taskName=taskName;
    }

    public void run(){
        System.out.println("started working");
        try {
            Thread.sleep(300);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(taskName + " finished working...");
        latch.countDown();
    }

}
public class CountDownLatchExample {
    public static void main(String args[]){
        CountDownLatch latch = new CountDownLatch(3);

        Thread worker1 = new Thread(new Worker(latch, "Worker 1"));
        Thread worker2 = new Thread(new Worker(latch, "Worker 2"));
        Thread worker3 = new Thread(new Worker(latch, "Worker 3"));

        worker1.start();
        worker2.start();
        worker3.start();
        try {
            latch.await();
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        System.out.println("Started balancing");

    }
}
