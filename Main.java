package assignment10;

class Slist<T> {
    private Node<T> head = null;
    private Node<T> tail = null;

    SListiterator iterator() {
        return new SListiterator();
    }

    @Override
    public String toString() {
        StringBuilder result = new StringBuilder();
        SListiterator iterator = iterator();
        while (iterator.hasNext()) {
            result.append(iterator.next()).append("->");
        }
        result.append("null");
        return result.toString();
    }

    class Node<T> {
        T data;
        Node<T> next;

        Node(T data) {
            this.data = data;
        }
    }

    class SListiterator {
        private Node<T> current = head;

        public void addNode(T data) {
            Node<T> newNode = new Node<>(data);
            if (head == null) {
                head = newNode;
                tail = newNode;
            } else {
                tail.next = newNode;
                tail = newNode;
            }
        }

        public void removeNode() {
            if (head == null || head.next == null) {
                head = null;
                tail = null;
                return;
            }

            Node<T> current = head;
            while (current.next != tail) {
                current = current.next;
            }
            current.next = null;
            tail = current;
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
}

public class Main {
    public static void main(String[] args) {
        Slist<Integer> slist = new Slist<>();
        Slist<Integer>.SListiterator sListiterator = slist.iterator();
        sListiterator.addNode(23);
        sListiterator.addNode(35);
        sListiterator.addNode(97);
        System.out.println("SList: " + slist);

        sListiterator.removeNode();
        System.out.println("SList after removing the last element: " + slist);
    }
}
