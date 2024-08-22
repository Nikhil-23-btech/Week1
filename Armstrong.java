import java.util.*;
class Armstrong{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        String str=sc.next();
        String[] individual=str.split("");
        int[] seq=new int[individual.length];
        for(int i=0;i<individual.length;i++){
            seq[i]=Integer.parseInt(individual[i]);
        }
        int sumOfCubes=0;
        for(int j:seq){
            sumOfCubes+=Math.pow(j,3);
        }
        int num=Integer.valueOf(str);
        if(num==sumOfCubes){
            System.out.println(num +" is an armstrong number");
        }
        else{
            System.out.println(num +" is not an armstrong number");
        }
        
    }
}  
