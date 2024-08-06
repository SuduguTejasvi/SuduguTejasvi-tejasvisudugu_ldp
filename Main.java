package assignment10;

public class Main {
    public static void main(String[] args) {
        SList<Integer> slist = new SList<>();
        SListIterator<Integer> sListIterator = slist.iterator();
        sListIterator.addNode(23);
        sListIterator.addNode(35);
        sListIterator.addNode(97);
        System.out.println("SList: " + slist);

        sListIterator.removeNode();
        System.out.println("SList after removing the last element: " + slist);
    }
}

