const initialState = [
  {
    warehouseName: "Склад A",
    products: [
      {
        name: "Рыба",
        count: 15
      },
      {
        name: "Молоко",
        count: 7
      },
      {
        name: "Мясо",
        count: 22
      }
    ]
  },
  {
    warehouseName: "Склад B",
    products: [
      {
        name: "Рыба",
        count: 3
      },
      {
        name: "Молоко",
        count: 4
      }
    ]
  },
  {
    warehouseName: "НЕ ОПРЕДЕЛЁН",
    products: [
      {
        name: "Рыба",
        count: 1
      },
      {
        name: "Молоко",
        count: 2
      }
    ]
  }
];

export default initialState;