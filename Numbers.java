import java.util.*;
class Numbers{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int sum=0;
        System.out.println("Enter the number:");
        int n=sc.nextInt();
        ArrayList<Integer> divisors=new ArrayList<Integer>(100);
        int lenght=divisors.size();
        for(int i=1;i<n;i++){
            if(n%i==0){
                divisors.add(i);
            }
        }
        for(int s:divisors){
            sum+=s;
        }
        if(sum<n){
            System.out.println(n +" is a deficient number");
        }
        else if(sum>n){
            System.out.println(n +" is a abundant number");
        }
        else if(sum==n){
            System.out.println(n +" is a perfect number");
        }
    }
}
