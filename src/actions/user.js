import {
  SET_USER_PURCHASES,
  SET_PURCHASE_DETAIL,
  SET_CART_PRODUCTS,
  ADD_CART_PRODUCT,
} from "./types";

export function setPurchaseDetail(_id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: _id,
  };
}

export function addCartProduct(product) {
  return {
    type: ADD_CART_PRODUCT,
    payload: product,
  };
}

export function fetchCartProducts() {
  return {
    type: SET_CART_PRODUCTS,
    payload: [
      {
        _id: 0,
        product: {
          _id: 0,
          title: "JavaScript in the Browser",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget convallis massa. Cras eget sem interdum, facilisis augue scelerisque, porttitor quam. Integer eu orci vel ante accumsan efficitur. Maecenas ut vehicula felis, sed aliquet arcu. Integer quis luctus odio, sit amet vehicula lorem..",
          amount: 1.99,
          belongsTo: [0, 1],
        },
        quantity: 2,
      },
      {
        _id: 1,
        product: {
          _id: 1,
          title: "UML Basics",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget convallis massa. Cras eget sem interdum, facilisis augue scelerisque, porttitor quam. Integer eu orci vel ante accumsan efficitur. Maecenas ut vehicula felis, sed aliquet arcu. Integer quis luctus odio, sit amet vehicula lorem..",
          amount: 1.99,
          belongsTo: [0, 6],
        },
        quantity: 3,
      },
      {
        _id: 2,
        product: {
          _id: 2,
          title: "Full Stack Development",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget convallis massa. Cras eget sem interdum, facilisis augue scelerisque, porttitor quam. Integer eu orci vel ante accumsan efficitur. Maecenas ut vehicula felis, sed aliquet arcu. Integer quis luctus odio, sit amet vehicula lorem..",
          amount: 1.99,
          belongsTo: [0, 3, 4],
        },
        quantity: 1,
      },
    ],
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
        orderDate: new Date().toDateString(),
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
        orderDate: new Date().toDateString(),
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
        orderDate: new Date().toDateString(),
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
        orderDate: new Date().toDateString(),
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
        orderDate: new Date().toDateString(),
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
        orderDate: new Date().toDateString(),
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
        orderDate: new Date().toDateString(),
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
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Uncle Brother",
          shippingAddress: "1234 East State Street",
        },
      },
    ],
  };
}
