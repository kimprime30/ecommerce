const CURRENCY_FORMATTERS = new Intl.NumberFormat(
  "en-Us", {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: 0,
  }
)
export function formatCurrency ( amount: number) {
  return  CURRENCY_FORMATTERS.format(amount)
}
const NUMBER_FORMATTER = new Intl.NumberFormat( "en-US" )
export function formatNumber( number: number){
  return NUMBER_FORMATTER.format(number)
}