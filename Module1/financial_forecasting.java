public class FinancialForecasting {

    public static double predictFutureValue(double currentValue,
                                            double growthRate,
                                            int years) {

        // Base case
        if (years == 0) {
            return currentValue;
        }

        // Recursive case
        return predictFutureValue(currentValue,
                                  growthRate,
                                  years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {

        double initialValue = 10000;
        double growthRate = 0.08; // 8%
        int years = 5;

        double futureValue =
                predictFutureValue(initialValue, growthRate, years);

        System.out.println("Initial Value: " + initialValue);
        System.out.println("Growth Rate: " + (growthRate * 100) + "%");
        System.out.println("Years: " + years);
        System.out.println("Predicted Future Value: " + futureValue);
    }
}
