describe("loan calculator", function() {
  it("should calculate the monthly rate correctly", function() {
    const values = { amount: 1000, years: 5, rate: 10 };
    expect(calculateMonthlyPayment(values)).toEqual("21.25");
  });

  it("should return a result with 2 decimal places", function() {
    const values = { amount: 1000, years: 5, rate: 10 };
    expect(calculateMonthlyPayment(values)).toMatch(/^[0-9]+\.[0-9]{2}$/);
  });

  it("should handle zero values", function() {
    const values = { amount: 0, years: 0, rate: 0 };
    expect(calculateMonthlyPayment(values)).toEqual("NaN");
  });

  it("should handle large values", function() {
    const values = { amount: 1000, years: 40, rate: 99 };
    expect(calculateMonthlyPayment(values)).toEqual("82.50");
  });
});

