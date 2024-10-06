import java.util.Scanner;
class CountDivisors{
    void countDiv(int l , int r, int k){
        int count = 0;
        for(int i = l; i<=r; i++){
            if(i%k == 0){
                count++;   
            }
        }
        System.out.println(count);
    }
    public static void main(String...args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the values");
        int l = sc.nextInt();
        int r = sc.nextInt();
        int k = sc.nextInt();
       CountDivisors c = new CountDivisors();
         c.countDiv( l , r,  k);
    }
}