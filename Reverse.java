import java.util.Scanner;
class Reverse {
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        String sentence=sc.nextLine();
        String reverseword=" ";
        String[] words=sentence.split("\\s");
        for(String w:words){
            StringBuilder sb=new StringBuilder(w);
            sb.reverse();
            reverseword += sb.toString()+" ";
        }
        System.out.println(reverseword.trim());
    }
    
}
