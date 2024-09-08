import java.util.*;
class Primeandpalin{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int num=sc.nextInt();
        checkNumber(num);
    }
    public static boolean isPrime(int n){
        if(n<=1){
            return false;
        }
        for (int i=2;i<=Math.sqrt(n);i++){
            if(n%i==0){
                return false;
            }
        }
        return true;
    }
    public static boolean isPalin(int n){
        String str=Integer.toString(n);
        String revstr=new StringBuilder(str).reverse().toString();
        return str.equals(revstr);
    }
    public static int nextPalin(int n){
        n++;
        while(!isPalin(n)){
            n++;
        }
        return n;
    }
    public static void checkNumber(int n){
        if(!isPrime(n)){
            System.out.println(n +"is not a prime");
        }
        else{
            System.out.println(nextPalin(n));
        }
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 4e73c523f6cb9ecd4aca99e6bf5a4f712e5899e0
