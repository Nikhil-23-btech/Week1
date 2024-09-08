import java.io.FileReader;
import java.io.IOException;
import java.util.*;
public class Filereading {
    public static void main(String[] args) {
        String filePath = "D:\\test.txt";
	Scanner sc=new Scanner(System.in); 
       	 int n = sc.nextInt(); 
        try (FileReader fr = new FileReader(filePath)) {
            char[] buffer = new char[n];
            int charsRead = fr.read(buffer, 0, n);

            if (charsRead != -1) {
                String content = new String(buffer, 0, charsRead);
                String[] words = content.split(" ");
                StringBuilder reversedContent = new StringBuilder();
                for (String word : words) {
                    reversedContent.append(new StringBuilder(word).reverse().toString()).append(" ");
                }
                System.out.println(reversedContent.toString().trim());
            } else {
                System.out.println("File is empty or could not read the specified number of characters.");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
