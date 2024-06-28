
    /*
     * 	1.	Main Method:
	•	The main method initializes an array arraym and calls the quicksort method on it.
	•	After sorting, it prints the elements of the array.
	2.	Quicksort Method:
	•	The quicksort method recursively sorts the array.
	•	It calls the partition method to find the pivot index and then recursively sorts the subarrays before and after the pivot.
	3.	Partition Method:
	•	The partition method selects the last element as the pivot.
	•	It rearranges the array such that elements less than the pivot are on the left and elements greater than the pivot are on the right.
	•	It returns the final position of the pivot.

How It Works:

	•	Partitioning:
	•	The partition method rearranges the elements around a pivot. The pivot chosen is the last element of the array segment.
	•	All elements less than the pivot are moved to its left, and all elements greater than the pivot are moved to its right.
	•	The method then returns the index of the pivot.
	•	Recursion:
	•	The quicksort method is called recursively for the left and right subarrays until the base case (a single element or no elements) is reached.
    •	Each recursive call sorts a subarray by selecting a pivot and partitioning the array around it. 
    •	After sorting, the array is returned to the previous call, and the process continues until the entire array is sorted.
    •	Base Case:
    •	The base case for the quicksort method is when the start index is greater than or equal to the end index.
     */

     	
    	// quick sort = moves smaller elements to left of a pivot.
    	//			   recursively divide array in 2 partitions

    	//                       run-time complexity = Best case O(n log(n))
    	//				   		                   Average case O(n log(n))
    	//				   		                   Worst case O(n^2) if already sorted
    	
    	//                       space complexity    = O(log(n)) due to recursion
    public class Main {
    public static void main(String args[]) {
        int[] array = {8, 2, 4, 9, 1, 7, 6, 3, 5};
        quicksort (array, 0, array.length -1);
        for (int i : array) {
            System.out.print(i + " ");
        }
    }
    
    private static void quicksort(int [] array, int start, int end) {
    if (end <= start) return; //base case
        int pivot = partition (array, start, end);
        quicksort(array, start, pivot -1);
        quicksort(array, pivot +1, end);

    }
    private static int partition(int [] array, int start, int end){
        int pivot = array[end];
        int i = start -1;

        for (int j = start; j <= end -1; j++){
            if (array[j] < pivot){
                i++;
                int temp = array[i];
                array[i] = array[j];
                array[j]= temp;
            }
        }
        i++;
        int temp = array[i];
        array[i] = array[end];
        array[end]= temp;
        return i;
    }

}
