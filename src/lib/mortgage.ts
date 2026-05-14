export function calculateMonthlyPayment(
  principal: number,
  annualRate: number,
  years: number
) {
  if (principal <= 0 || years <= 0) {
    return 0;
  }

  const monthlyRate = annualRate / 100 / 12;
  const totalPayments = years * 12;

  if (monthlyRate === 0) {
    return principal / totalPayments;
  }

  const factor = Math.pow(1 + monthlyRate, totalPayments);
  return (principal * monthlyRate * factor) / (factor - 1);
}

export function formatAED(value: number) {
  return new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 0,
  }).format(value);
}
