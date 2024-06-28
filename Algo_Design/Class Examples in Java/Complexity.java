public class Complexity {
    public static void main(String[] args) {
        int[] array = {10, 20, 30, 40, 50, 60, 70, 80, 90, 100};
        // Constant time complexity O(1)
        int element = array[2]; //this operation will take the same time no matter how big the array is
        System.out.println("element at index 2 =" + element);

        // Linear time complexity O(n)
        int sum =0;
        for (int i = 0; i < array.length; i++) { //loop runs n times where n is the size of the array
            sum += array[i];
            
        }System.out.println("Sum of array elements: : " + sum);

        // Quadratic time complexity O(n^2)
        for (int i = 0; i < array.length; i++) { //loop runs n times where n is the size of the array
            for (int j = 0; j < array.length; j++) { //loop runs n times where n is the size of the array
                System.out.println(array[i] + " " + array[j]);
            }
        }

        // Cubic time complexity O(n^3)
        for (int i = 0; i < array.length; i++) { //loop runs n times where n is the size of the array
            for (int j = 0; j < array.length; j++) { //loop runs n times where n is the size of the array
                for (int k = 0; k < array.length; k++) { //loop runs n times where n is the size of the array
                    System.out.println(array[i] + " " + array[j] + " " + array[k]);
                }
            }
        }

        // Logarithmic time complexity O(log n)
        int n = 10;
        for (int i = 1; i < n; i = i * 2) { //loop runs log(n) times where n is the size of the array
            System.out.println(i);
        }
        
        //Logarithmic time complexity O(log n) with binary search 
        int key = 50;
        int index = binarySearch(array, key);
        if(index>=0){
            System.out.println("Element found at index: " + index);
        }else{
            System.out.println("Element not found");
        }

        
        // Linearithmic time complexity O(n log n)
        for (int i = 0; i < array.length; i++) { //loop runs n times where n is the size of the array
            for (int j = 1; j < n; j = j * 2) { //loop runs log(n) times where n is the size of the array
                System.out.println(array[i] + " " + j);
            }
        }

        // Exponential time complexity O(2^n)
        int result = fibonacci(10);
        System.out.println("Fibonacci(10) = " + result);


    }
}