package assignment10;

public class SListIterator<T> {
    private Node<T> current;
    private SList<T> slist;

    public SListIterator(SList<T> slist) {
        this.slist = slist;
        this.current = slist.head;
    }

    public void addNode(T data) {
        Node<T> newNode = new Node<>(data);
        if (slist.head == null) {
            slist.head = newNode;
            slist.tail = newNode;
        } else {
            slist.tail.next = newNode;
            slist.tail = newNode;
        }
    }

    public void removeNode() {
        if (slist.head == null || slist.head.next == null) {
            slist.head = null;
            slist.tail = null;
            return;
        }

        Node<T> current = slist.head;
        while (current.next != slist.tail) {
            current = current.next;
        }
        current.next = null;
        slist.tail = current;
    }

    public boolean hasNext() {
        return current != null;
    }

    public T next() {
        T data = current.data;
        current = current.next;
        return data;
    }
}
