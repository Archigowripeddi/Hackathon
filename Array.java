class Array{
    public static void main(String...args){
         int []a = new int[10];
         for(int i=0 ; i<10; i++){
            a[i] = i/2;
            a[i]++;
            
            System.out.print(a[i] + " ");
            i++;
         }
    }
}