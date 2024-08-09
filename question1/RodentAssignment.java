package assignment7.question1;

abstract class Rodent {
    public Rodent() {
        System.out.println("This is Rodent");
    }

    public abstract void eat();
    public abstract void sleep();
    public abstract void playingGames();
}

class Mouse extends Rodent {
    public Mouse() {
        System.out.println("This is Mouse");
    }

    @Override
    public void eat() {
        System.out.println("Mouse eats");
    }

    @Override
    public void sleep() {
        System.out.println("Mouse sleeps");
    }

    @Override
    public void playingGames() {
        System.out.println("Mouse plays");
    }
}

class Gerbil extends Rodent {
    public Gerbil() {
        System.out.println("This is Gerbil");
    }

    @Override
    public void eat() {
        System.out.println("Gerbil eats");
    }

    @Override
    public void sleep() {
        System.out.println("Gerbil sleeps");
    }

    @Override
    public void playingGames() {
        System.out.println("Gerbil plays");
    }
}

class Hamster extends Rodent {
    public Hamster() {
        System.out.println("This is Hamster");
    }

    @Override
    public void eat() {
        System.out.println("Hamster eats");
    }

    @Override
    public void sleep() {
        System.out.println("Hamster sleeps");
    }

    @Override
    public void playingGames() {
        System.out.println("Hamster plays");
    }
}

public class RodentAssignment {
    public static void main(String[] args) {
        Rodent[] rodents = new Rodent[3];
        rodents[0] = new Mouse();
        rodents[1] = new Gerbil();
        rodents[2] = new Hamster();

        for (Rodent rodent : rodents) {
            rodent.eat();
            rodent.playingGames();
            rodent.sleep();
        }
    }
}
