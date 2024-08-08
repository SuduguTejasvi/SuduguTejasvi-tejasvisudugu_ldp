package MultiThreadingExample;

class Q {
    public int n;
    public boolean flag = false;

    public Q(int n) {
        this.n = n;
    }

    public synchronized void get() {
        if (!flag) {
            try {
                wait();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
        System.out.println("Get = " + n);
        flag = false;
        notify();
    }

    public synchronized void Set(int n) {
        if (flag) {
            try {
                wait();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
        this.n = n;
        System.out.println("Set = " + n);
        flag = true;
        notify();
    }
}

class Producer implements Runnable {
    Q q;
    Thread t;

    public Producer(Q q) {
        this.q = q;
        t = new Thread(this, "Producer");
        t.start();
    }

    public void run() {
        int n = q.n;
        while (true) {
            q.Set(n++);
            try {
                Thread.sleep(5000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
    }
}

class Consumer implements Runnable {
    Q q;
    Thread t;

    public Consumer(Q q) {
        this.q = q;
        t = new Thread(this, "Consumer");
        t.start();
    }

    public void run() {
        while (true) {
            q.get();
            try {
                Thread.sleep(5000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
    }
}

public class ProducerConsumerProblem {
    public static void main(String args[]) {
        Q q = new Q(0);
        Producer producer = new Producer(q);
        Consumer consumer = new Consumer(q);
    }
}
