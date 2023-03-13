const formatCurrency = (value, currency = "USD", locale = "en-US") => {
  return new Intl.NumberFormat(locale, {
    maximumSignificantDigits: 5,
    style: "currency",
    currency,
  }).format(value);
};

export default formatCurrency;
