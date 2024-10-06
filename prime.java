import java.util.Scanner;
class prime{
    static void isPrime(int a , int b){
        System.out.print(a + " ");
        for( int i = a; i<=b; i++){
            if(i%2 ==1){
                System.out.print(i + " ");
               
            }
            else
            System.out.print("");
        }
    }
    public static void main(String...args){
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b= sc.nextInt();
        isPrime( a , b);
    }
}