package MultiThreadingExample;

import java.util.concurrent.locks.ReentrantLock;

class Counter {
    private final ReentrantLock lock = new ReentrantLock();
    private int counter = 0;

    public void increment() {
        lock.lock();
        try {
            counter++;
            System.out.println(" incremented counter to: " + counter);
        } finally {
            lock.unlock();
        }
    }
}
class IncrementTask implements Runnable {
    private final Counter example;

    public IncrementTask(Counter example) {
        this.example = example;
        Thread t=new Thread(this,"Increment Task");
        t.start();
    }

    @Override
    public void run() {
        example.increment();
    }
}
public class ReentrantLockExample {
    public static void main(String args[]){

        Counter counter=new Counter();
        IncrementTask incrementTask=new IncrementTask(counter);
    }
}
