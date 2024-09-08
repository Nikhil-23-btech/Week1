import java.util.*;
class Complex{
    int real;
    int imaginary;
    public Complex(int real, int imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    public Complex add(Complex other) {
        return new Complex(this.real + other.real, this.imaginary + other.imaginary);
    }
    public Complex subtract(Complex other) {
        return new Complex(this.real - other.real, this.imaginary - other.imaginary);
    }
    public Complex multiply(Complex other) {
        int realPart = this.real * other.real - this.imaginary * other.imaginary;
        int imaginaryPart = this.real * other.imaginary + this.imaginary * other.real;
        return new Complex(realPart, imaginaryPart);
    }
    public Complex conjugate() {
        return new Complex(this.real, -this.imaginary);
    }
    public void display() {
        System.out.println(this.real + " + " + this.imaginary + "i");
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int r1=sc.nextInt();
        int i1=sc.nextInt();
        int r2=sc.nextInt();
        int i2=sc.nextInt();
        Complex c1 = new Complex(r1,i1);
        Complex c2 = new Complex(r2,i2);
        Complex sum = c1.add(c2);
        Complex difference = c1.subtract(c2);
        Complex product = c1.multiply(c2);
        Complex conjugate = c1.conjugate();
        System.out.print("Sum: ");
        sum.display();
        System.out.print("Difference: ");
        difference.display();
        System.out.print("Product: ");
        product.display();
        System.out.print("Conjugate of c1: ");
        conjugate.display();
    }
}