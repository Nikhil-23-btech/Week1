import java.util.Scanner;
public class EvenLengthSubstrings {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a string:");
        String input = sc.nextLine();

        System.out.println("Even length substrings are:");
        for (int i = 0; i < input.length(); i++) {
            for (int j = i + 2; j <= input.length(); j += 2) {
                String substring = input.substring(i, j);
                if (substring.length() % 2 == 0) {
                    System.out.println(substring);
                }
            }
        }
    }
}

