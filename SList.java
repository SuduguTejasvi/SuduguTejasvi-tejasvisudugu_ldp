package assignment10;

public class SList<T> {
    Node<T> head = null;
    Node<T> tail = null;

    public SListIterator<T> iterator() {
        return new SListIterator<>(this);
    }

    @Override
    public String toString() {
        StringBuilder result = new StringBuilder();
        SListIterator<T> iterator = iterator();
        while (iterator.hasNext()) {
            result.append(iterator.next()).append("->");
        }
        result.append("null");
        return result.toString();
    }
}
