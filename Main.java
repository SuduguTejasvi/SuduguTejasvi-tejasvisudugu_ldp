package assignment4;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;
import java.util.concurrent.TimeUnit;

public class Main {
    public static String getRange(Date signupDate, Date currentDate, SimpleDateFormat dateFormat) {
        //if signup and current dates are falling in same year we can make direct comparisons with dates if current date is before signup then return not valid
        if(signupDate.getYear()==currentDate.getYear()){
            if(currentDate.before(signupDate)) {
                return "not valid";
            }
        }
        Date anniversaryDate = new Date(signupDate.getTime());
        anniversaryDate.setYear(currentDate.getYear());

        //getting before 30 days and after 30 days range
        Date startRange = new Date(anniversaryDate.getTime() - TimeUnit.DAYS.toMillis(30));
        Date endRange = new Date(anniversaryDate.getTime() + TimeUnit.DAYS.toMillis(30));

        if (currentDate.before(startRange)) {
            return "not valid";
        } else {
            String startDate = dateFormat.format(startRange);
            String endDate = dateFormat.format(endRange.before(currentDate) ? endRange : currentDate);
            return startDate + " " + endDate;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.nextLine();
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");

        for (int i = 0; i < n; i++) {

            String line = sc.nextLine();
            String[] dates = line.split(" ");
            if (dates.length < 2) {
                System.out.println("Invalid input format. Please provide both signup and current dates.");
                continue;
            }

            String signupDateStr = dates[0];
            String currentDateStr = dates[1];

            try {
                Date signupDate = dateFormat.parse(signupDateStr);
                Date currentDate = dateFormat.parse(currentDateStr);
                String result = getRange(signupDate, currentDate, dateFormat);
                System.out.println(result);
            } catch (ParseException e) {
                throw new RuntimeException(e);
            }
        }
    }
}
