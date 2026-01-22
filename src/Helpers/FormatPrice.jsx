

const FormatPrice = ({price} ) => {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(price * 280);
};

export default FormatPrice;
