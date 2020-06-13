import { SET_USER_PURCHASES, SET_PURCHASE_DETAIL } from "./types";

export function setPurchaseDetail(_id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: _id,
  };
}

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 4.85,
        orderNumber: "A00000001",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Uncle Brother",
          shippingAddress: "1234 East State Street",
        },
      },
      {
        _id: 1,
        total: 9.28,
        orderNumber: "A00000002",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Uncle Grandpa",
          shippingAddress: "1234 East Country Road",
        },
      },
      {
        _id: 2,
        total: 7.94,
        orderNumber: "A00000003",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Aunt Grandma",
          shippingAddress: "1234 East State Street",
        },
      },
      {
        _id: 3,
        total: 5.85,
        orderNumber: "A00000004",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Cousin Brother",
          shippingAddress: "1234 East Any Street",
        },
      },
      {
        _id: 4,
        total: 4.8,
        orderNumber: "A00000005",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Sister Grandpa",
          shippingAddress: "234 West State Street",
        },
      },
      {
        _id: 5,
        total: 4.85,
        orderNumber: "A00000006",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Uncle Brother",
          shippingAddress: "1234 East State Street",
        },
      },
      {
        _id: 6,
        total: 4.85,
        orderNumber: "A00000007",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Joe Namath",
          shippingAddress: "1234 East Touchdown Street",
        },
      },
      {
        _id: 7,
        total: 6.13,
        orderNumber: "A00000008",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Uncle Brother",
          shippingAddress: "1234 East State Street",
        },
      },
    ],
  };
}
