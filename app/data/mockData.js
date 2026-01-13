// Multiple order datasets for different routes
export const ordersData = {
  order1: {
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
  },
  
  order2: {
    orderNumber: "987654321",
    status: "confirmed",
    delivery: {
      name: "Office",
      address: "Tech Park, Cyber City, Phase 2, BANGALORE, KARNATAKA, 560100, India",
      expectedDateRange: "15 Jan '26 - 17 Jan '26",
    },
    items: [
      {
        id: 1,
        name: "Vitamin D3 Capsules",
        description: "Dietary supplement",
        image: "/medicine_dolo-500-tablet-pain-killer.svg",
        quantity: 2,
      },
    ],
    additionalItemsCount: 2,
    pricing: {
      itemTotal: 1850.00,
      handlingCharges: 30,
      totalDiscount: -150,
      couponCode: -50,
      credits: -30,
      shippingFee: 0,
      amountPaid: 1650.00,
      savings: 230.00,
    },
    payment: {
      method: "Credit Card",
      source: "HDFC Bank (XX1234)",
      txnId: "987654321098765",
      date: "12 Jan '26 2:30 PM",
    },
  },
  
  order3: {
    orderNumber: "456789123",
    status: "shipped",
    delivery: {
      name: "Parents Home",
      address: "Lakeview Apartments, MG Road, Sector 12, DELHI, 110001, India",
      expectedDateRange: "10 Jan '26 - 12 Jan '26",
    },
    items: [
      {
        id: 1,
        name: "Azithromycin 500mg",
        description: "Antibiotic",
        image: "/medicine_dolo-500-tablet-pain-killer.svg",
        quantity: 1,
      },
    ],
    additionalItemsCount: 6,
    pricing: {
      itemTotal: 3200.50,
      handlingCharges: 40,
      totalDiscount: -200,
      couponCode: -100,
      credits: -50,
      shippingFee: 15,
      amountPaid: 2905.50,
      savings: 350.00,
    },
    payment: {
      method: "Debit Card",
      source: "SBI Bank (XX5678)",
      txnId: "456123789456123",
      date: "08 Jan '26 11:45 AM",
    },
  },
  
  order4: {
    orderNumber: "789456123",
    status: "delivered",
    delivery: {
      name: "Apartment",
      address: "Sunshine Residency, Block B, Hitech City, HYDERABAD, TELANGANA, 500081, India",
      expectedDateRange: "05 Jan '26 - 07 Jan '26",
    },
    items: [
      {
        id: 1,
        name: "Multivitamin Gummies",
        description: "Health supplement",
        image: "/medicine_dolo-500-tablet-pain-killer.svg",
        quantity: 3,
      },
    ],
    additionalItemsCount: 1,
    pricing: {
      itemTotal: 2499.00,
      handlingCharges: 25,
      totalDiscount: -300,
      couponCode: -150,
      credits: -100,
      shippingFee: 0,
      amountPaid: 1974.00,
      savings: 550.00,
    },
    payment: {
      method: "Wallet",
      source: "Paytm Wallet",
      txnId: "789456123789456",
      date: "03 Jan '26 6:20 PM",
    },
  },
  
  order5: {
    orderNumber: "321654987",
    status: "processing",
    delivery: {
      name: "Villa",
      address: "Green Valley Estate, Banjara Hills, Road No. 12, PUNE, MAHARASHTRA, 411045, India",
      expectedDateRange: "18 Jan '26 - 20 Jan '26",
    },
    items: [
      {
        id: 1,
        name: "Omega-3 Fish Oil",
        description: "Heart health supplement",
        image: "/medicine_dolo-500-tablet-pain-killer.svg",
        quantity: 2,
      },
    ],
    additionalItemsCount: 8,
    pricing: {
      itemTotal: 5600.00,
      handlingCharges: 50,
      totalDiscount: -400,
      couponCode: -200,
      credits: -150,
      shippingFee: 20,
      amountPaid: 4920.00,
      savings: 750.00,
    },
    payment: {
      method: "Net Banking",
      source: "ICICI Bank",
      txnId: "321987654321987",
      date: "14 Jan '26 9:00 AM",
    },
  },
};

// Default export for backward compatibility
export const orderData = ordersData.order1;

// Helper function to get order by ID
export function getOrderById(orderId) {
  return ordersData[orderId] || null;
}

// Get all order IDs
export function getAllOrderIds() {
  return Object.keys(ordersData);
}
