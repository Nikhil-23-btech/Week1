import java.util.*; 
class Prime{
    public static void main(String arg[]){
	int i,count;
	System.out.print("Enter start value :"); 
	Scanner sc=new Scanner(System.in);
	int strt=sc.nextInt();
	System.out.println("Enter the end value:");
	int end=sc.nextInt();
	System.out.println("Prime numbers between "+strt+" to "+end+" are ");
	for(int j=strt;j<=end;j++){
		count=0; 
		for(i=1;i<=j;i++){
			if(j%i==0){
				count++;
			}
		}
		if(count==2)
			System.out.print(j+" ");
		}
	}
}

