import java.util.Scanner;
class Example{
     void displayDiscount(float i, float s, float t , float n){
        float d1 = 0.0f;
        float d2 = 0.0f;
        d1 = ((i*(7.0f/100)+s*(3.0f/100)+t*(2.0f/100)+n*(1.0f/100) ));
        float sum = (i+s+t+n);
        if(sum<=25000){
            System.out.println("No discount");
        }
            else if(sum>25000 &&  sum<= 50000){
                d2 = (sum*(5/100));
            }
                else if(sum>50000 &&  sum<= 100000){
                    d2 = (sum*(7/100));
                }
                else{
                    d2 = (sum*(10/100));
                }      
     
     if(d1 > d2){
        System.out.println(d1);
     }
     else{
        System.out.println(d2);
     }
     }

    public static void main(String[]args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter value for Iron");
        float i = new nextInt();
        System.out.println("Enter value for steel");
        float s = new nextInt();
        System.out.println("Enter value for tungsten");
        float t = new nextInt();
        System.out.println("Enter value for nickel");
        float n = new nextInt();
         Example a = new Example();
        a.displayDiscount(i , s, t, n);
    }
}