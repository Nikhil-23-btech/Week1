import java.util.*;
class Fibonacci{
    public static void main(String[] args){
      int num1=0,num2=1,num3=0,pos=0;
      boolean found=false;
      Scanner sc=new Scanner(System.in);
      int key=sc.nextInt();
      int[] series=new int[150];
      for(int i=0;i<100;i++){
          series[i]=num1;
          num3=num2+num1;
          num1=num2;
          num2=num3;
      }
      for(int i=0;i<series.length;i++){
          if(series[i]==key){
              pos=i;
              found=true;
              break;
          }
      }
      if(!found){
          System.out.println(key +" doesn't present in the fibonacci list");
      }
      else{
          System.out.println(key +" present at the position " +pos);
      }
    }
}
