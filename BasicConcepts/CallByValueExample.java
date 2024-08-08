package BasicConcepts;

class Batch{
    int marks;
    Batch(int marks){
        this.marks=marks;
    }
    void addGraceMarks(int marks){
        marks+=5;
    }
}

public class CallByValueExample {
    public static void main(String args[]){
        Batch morningBatch=new Batch(50);
        System.out.println("Before Grace Marks="+morningBatch.marks);
        morningBatch.addGraceMarks(6);
        System.out.println("After Grace Marks="+morningBatch.marks);

    }
}
