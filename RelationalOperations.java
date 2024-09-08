import java.math.BigInteger;
import java.util.*;
public class RelationalOperations {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        BigInteger num1 = new BigInteger(sc.nextLine());
        BigInteger num2 = new BigInteger(sc.nextLine());
        boolean isEqual = num1.equals(num2);
        System.out.println("num1 == num2: " + isEqual);
        boolean isNotEqual = !num1.equals(num2);
        System.out.println("num1 != num2: " + isNotEqual);
        boolean isGreaterThan = num1.compareTo(num2) > 0;
        System.out.println("num1 > num2: " + isGreaterThan);
        boolean isLessThan = num1.compareTo(num2) < 0;
        System.out.println("num1 < num2: " + isLessThan);
        boolean isGreaterThanOrEqual = num1.compareTo(num2) >= 0;
        System.out.println("num1 >= num2: " + isGreaterThanOrEqual);
        boolean isLessThanOrEqual = num1.compareTo(num2) <= 0;
        System.out.println("num1 <= num2: " + isLessThanOrEqual);
    }
}

