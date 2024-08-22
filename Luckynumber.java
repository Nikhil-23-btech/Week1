import java.util.*;
class Luckynumber{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        String date=sc.next();
        int sum=0;
        String[] individual=date.split("");
        int[] seq=new int[individual.length];
        for(int i=0;i<individual.length;i++){
            seq[i]=Integer.parseInt(individual[i]);
        }
        
        for(int j:seq){
            sum+=j;
        }
        while(sum>=10){
            sum=sumDigits(sum);
        }
        System.out.println(sum);
    }
    public static int sumDigits(int number){
        int sum=0;
        while(number>0){
            sum+=number%10;
            number/=10;
        }
        return sum;
    }
}     
