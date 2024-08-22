import java.util.Scanner;
class Matoperations{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int s=0;
        int rows=sc.nextInt();
        int columns=rows;
        int[][] a=new int[rows][columns];
        int[][] b=new int[rows][columns];
        System.out.println("Enter the first matrix:");
        for(int i=0;i<rows;i++){
            for(int j=0;j<columns;j++){
                a[i][j]=sc.nextInt();
            }
        }
        System.out.println("Enter the second matrix:");
        for(int i=0;i<rows;i++){
            for(int j=0;j<columns;j++){
                b[i][j]=sc.nextInt();
            }
        }
         for(int i=0;i<rows;i++){
         for(int j=0;j<columns;j++){
             if(i==j){
                s+=a[i][j]; 
             }
         }
         }
         System.out.println("The addition of the matrix is:");
          for(int i=0;i<rows;i++){
            for(int j=0;j<columns;j++){
                System.out.format("%d\t",(a[i][j]+b[i][j]));
            }
            System.out.println();
        }
        System.out.println("The subtraction of the matrix is:");
         for(int i=0;i<rows;i++){
            for(int j=0;j<columns;j++){
                System.out.format("%d\t",(a[i][j]-b[i][j]));
            }
            System.out.println();
        }
        System.out.println("The multiplication of the matrix is:");
         for(int i=0;i<rows;i++){
            for(int j=0;j<columns;j++){
               System.out.format("%d\t",(a[i][j]*b[i][j]));
            }
            System.out.println();
        }
        System.out.println("The traace of the matrix is:"+s);
}
}