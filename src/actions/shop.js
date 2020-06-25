import {
  SET_SHOP_CATEGORIES,
  SET_NAVBAR_LINKS,
  SET_SHOP_PRODUCTS,
  FILTER_PRODUCTS_WITH_CATEGORY_ID,
  FILTER_PRODUCTS_WITH_QUERY,
} from "./types";

export function filterProductsWithQuery(fields) {
  return {
    type: FILTER_PRODUCTS_WITH_QUERY,
    payload: fields,
  };
}

export function filterProductsWithCategoryId(_id) {
  return {
    type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
    payload: _id,
  };
}

export function fetchShopCategories() {
  return {
    type: SET_SHOP_CATEGORIES,
    payload: [
      {
        _id: 0,
        title: "All",
      },
      {
        _id: 1,
        title: "JavaScript",
      },
      {
        _id: 2,
        title: "Linux",
      },
      {
        _id: 3,
        title: "Python",
      },
      {
        _id: 4,
        title: "Ruby",
      },
      {
        _id: 5,
        title: "UI/UX",
      },
      {
        _id: 6,
        title: "UML",
      },
    ],
  };
}

export function fetchShopProducts() {
  return {
    type: SET_SHOP_PRODUCTS,
    payload: [
      {
        _id: 0,
        title: "JavaScript in the Browser",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit ipsum finibus dignissim elementum.",
        amount: 1.99,
        belongsTo: [0, 1],
      },
      {
        _id: 1,
        title: "UML Basics",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit ipsum finibus dignissim elementum.",
        amount: 1.99,
        belongsTo: [0, 6],
      },
      {
        _id: 2,
        title: "Full Stack Development",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit ipsum finibus dignissim elementum.",
        amount: 1.99,
        belongsTo: [0, 3, 4],
      },
      {
        _id: 3,
        title: "JavaScript Development",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit ipsum finibus dignissim elementum.",
        amount: 1.99,
        belongsTo: [0, 1],
      },
      {
        _id: 4,
        title: "User Interface Decise",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit ipsum finibus dignissim elementum.",
        amount: 1.99,
        belongsTo: [0, 5],
      },
      {
        _id: 5,
        title: "User Experience Design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit ipsum finibus dignissim elementum.",
        amount: 1.99,
        belongsTo: [0, 5],
      },
      {
        _id: 6,
        title: "Advanced Object Oriented Python",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit ipsum finibus dignissim elementum.",
        amount: 1.99,
        belongsTo: [0, 3],
      },
      {
        _id: 7,
        title: "Advanced Object Oriented Ruby",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit ipsum finibus dignissim elementum.",
        amount: 1.99,
        belongsTo: [0, 4],
      },
      {
        _id: 8,
        title: "Linux Server Configuration Basics",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit ipsum finibus dignissim elementum.",
        amount: 1.99,
        belongsTo: [0, 2],
      },
      {
        _id: 9,
        title: "Advanced Linux Server Configuration",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit ipsum finibus dignissim elementum.",
        amount: 1.99,
        belongsTo: [0, 2],
      },
      {
        _id: 10,
        title: "Advanced UML",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit ipsum finibus dignissim elementum.",
        amount: 1.99,
        belongsTo: [0, 6],
      },
    ],
  };
}
