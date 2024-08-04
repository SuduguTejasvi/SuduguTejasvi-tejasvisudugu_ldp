package BasicConcepts;

class BatchC{
    int marks;
    BatchC(int marks){
        this.marks=marks;
    }
    void addGraceMarks(BatchC batch){
        batch.marks+=5;
    }
}

public class CallByReference {
    public static void main(String args[]){
        BatchC morningBatch=new BatchC(50);
        System.out.println("Before Grace Marks="+morningBatch.marks);
        morningBatch.addGraceMarks(morningBatch);
        System.out.println("After Grace Marks="+morningBatch.marks);

    }
}
