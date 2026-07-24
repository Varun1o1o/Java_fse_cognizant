class Product {
    int productId;
    String productName;
    String category;

    Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    void display() {
        System.out.println("Product ID: " + productId);
        System.out.println("Product Name: " + productName);
        System.out.println("Category: " + category);
    }
}

class LinearSearch {
    static Product search(Product[] products, int targetId) {
        for (Product product : products) {
            if (product.productId == targetId) {
                return product;
            }
        }
        return null;
    }
}

class BinarySearch {
    static Product search(Product[] products, int targetId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;

            if (products[mid].productId == targetId) {
                return products[mid];
            }

            if (products[mid].productId < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return null;
    }
}

public class EcommerceSearch {
    public static void main(String[] args) {

        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Phone", "Electronics"),
            new Product(103, "Shoes", "Fashion"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Bag", "Fashion")
        };

        int targetId = 104;

        System.out.println("Linear Search Result:");
        Product linearResult = LinearSearch.search(products, targetId);

        if (linearResult != null) {
            linearResult.display();
        } else {
            System.out.println("Product not found");
        }

        System.out.println();

        System.out.println("Binary Search Result:");
        Product binaryResult = BinarySearch.search(products, targetId);

        if (binaryResult != null) {
            binaryResult.display();
        } else {
            System.out.println("Product not found");
        }
    }
}



/*
Big O notation is used to measure how the running time of an algorithm grows as the input size increases.

Examples:

O(1) → Constant time
O(log n) → Logarithmic time
O(n) → Linear time
O(n²) → Quadratic time

It helps us:

Compare algorithms
Predict performance for large datasets
Choose efficient solutions
Search Operation Scenarios
Linear Search

Best Case: O(1)

Element found at first position.

Average Case: O(n)

Element found somewhere in the middle.

Worst Case: O(n)

Element at last position or not present.
Binary Search

Best Case: O(1)

Element found at middle position.

Average Case: O(log n)

Worst Case: O(log n)

Search space keeps halving until element is found or not found.

| Algorithm     | Best Case | Average Case | Worst Case |
| ------------- | --------- | ------------ | ---------- |
| Linear Search | O(1)      | O(n)         | O(n)       |
| Binary Search | O(1)      | O(log n)     | O(log n)   |


Linear Search

Advantages:

Simple to implement.
Works on unsorted data.

Disadvantages:

Slow for large datasets.
May need to check every product.
Binary Search

Advantages:

Much faster.
Search space is reduced by half every step.

Disadvantages:

Data must be sorted.
*/
