export const orderData = {
  orderNumber: "122334455",
  status: "placed",
  delivery: {
    name: "Home",
    address: "Singhal General store, Varun Path, Varun Nagar, JAIPUR, RAJASTHAN, 302020, India",
    expectedDateRange: "25 Dec '25 - 27 Dec '25",
  },
  items: [
    {
      id: 1,
      name: "Dolo 500 Tablet",
      description: "Pain killer",
      image: "/medicine_dolo-500-tablet-pain-killer.svg", 
      quantity: 1,
    },
    // Simulating more items
  ],
  additionalItemsCount: 4,
  pricing: {
    itemTotal: 4274.43,
    handlingCharges: 45,
    totalDiscount: -50,
    couponCode: -70,
    credits: -70,
    shippingFee: 12,
    amountPaid: 1999.00,
    savings: 577.00,
  },
  payment: {
    method: "UPI",
    source: "Slice cc (XX9395)",
    txnId: "123456789012345",
    date: "29 Dec '25 8:10 PM",
  },
};
