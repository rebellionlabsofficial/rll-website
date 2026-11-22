/** "From €750": the starting price of a service. */
export function fromPrice(euro: number): string {
  return `From €${euro.toLocaleString("en-IE")}`;
}
