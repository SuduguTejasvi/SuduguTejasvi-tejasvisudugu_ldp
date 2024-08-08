package InnerClassesExamples;

class OuterStaticClass {
    private static String foodItem;
    private static int price;

    OuterStaticClass(String foodItem, int price) {
        this.foodItem = foodItem;
        this.price = price;
    }

    static class InnerStaticClass {
        void getOrder() {
            System.out.println("Your order is " + foodItem + "\n" + "Cost: " + price);
        }
    }
}

public class StaticInnerClass {
    public static void main(String[] args) {
        new OuterStaticClass("Sambar Rice", 340);
        OuterStaticClass.InnerStaticClass innerClass = new OuterStaticClass.InnerStaticClass();
        innerClass.getOrder();
    }
}
