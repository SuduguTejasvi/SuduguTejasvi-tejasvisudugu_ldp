package streams.poc;

import java.util.Optional;

public class OptionalClass {
    public static void main(String args[]){
        Optional<String> value = getName();
        if (value.isPresent()) {
            String name = value.get();
            System.out.println(name);
        } else {
            System.out.println("value is not present");
        }

        // Correctly check if the value is present or not
        if (value.isEmpty()) {
            System.out.println("value is empty");
        } else {
            System.out.println(value.get().toUpperCase());
        }

        // ifPresent method
         value.ifPresent(name -> System.out.println(name.toUpperCase()));
        //ifpresentOrElse
        value.ifPresentOrElse(
                (name)-> {
                    System.out.println(name);
                },
                ()-> {
                    System.out.println("value is not present");
                }
        );
        //or if value present returns same optional object
        //else then supplier functionality will produce with value
        String result=value.or(
                ()->{
                    return Optional.of("Or methos");
                }

        ).get();

        //orElse
        //if value present we can configure value or else another value

        result=value.orElse("or else method");
        System.out.println(result);

        String res=value.orElseGet(
                ()->{
                    return "or else get method";
                }
        );
        System.out.println(res);
        res=value.orElseThrow();
        System.out.println(res);

        try {
            res=value.orElseThrow(()->{
                return new Exception("Custom Exception");
            });
            System.out.println(res);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        String sname="Tejasvi Sudugu";
        Optional<String> matchedName=getName().filter((name)->
            name.equalsIgnoreCase(sname)
        );
        String message=matchedName.orElse("There exist no match");
        System.out.println("Matched string "+message);

    }


    public static Optional<String> getName() {
        String name = "Tejasvi";
        Optional<String> value = Optional.of(name);
        if (value.isEmpty())
            return Optional.empty();
        return value;
    }
}
