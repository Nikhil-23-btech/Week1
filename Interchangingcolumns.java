import java.io.*;
import java.util.*;
class Interchangingcolumns{
    static Scanner sc=new Scanner(System.in);
	static int N=sc.nextInt();
	static void Swap_First_Last(int mat[][])
	{
		int cls = N;
		for (int j = 0; j < N; j++) {
			int temp = mat[j][0];
			mat[j][0] = mat[j][N - 1];
			mat[j][N - 1] = temp;
		}
	}
	public static void main(String[] args)
	{
		int[][] mat=new int[N][N];
		System.out.println("Enter the matrix");
		for (int j = 0; j < N; j++) {
			for (int k = 0; k < N; k++) {
			    mat[j][k]=sc.nextInt();
			}
		}
		System.out.println("Swapped Matrix as follows : ");
		Swap_First_Last(mat);
		for (int j = 0; j < N; j++) {
			for (int k = 0; k < N; k++)
				System.out.print(mat[j][k] + " ");
			System.out.println();
		}
	}
}
