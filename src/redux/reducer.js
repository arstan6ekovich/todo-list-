const initalStore = {
  products: JSON.parse(localStorage.getItem("product")) || [],
  basket: [],
  cash: 0,
  kom: [],
};

export const Reducer = (state = initalStore, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state, products: [...state.products, action.payload] };
    case "ADD_BASKET":
      return { ...state, basket: [...state.basket, action.payload] };
    case "PLUS":
      return {
        ...state,
        basket: state.basket.map((el) =>
          el.id === action.payload
            ? { ...el, cash: el.cash > 1 ? el.cash + 1 : 1 }
            : el
        ),
      };
    case "ADD_DELETE":
      let filterDeleet = state.basket.filter((el) => el.id !== action.payload);
      return { ...state, basket: filterDeleet };
    case "ADD_PRODUCTS":
      return { ...state, kom: action.payload };
    case "ADD_BASKET_DELETE":
      let filetrDel = state.basket.filter((el) => el === action.payload);
      return { ...state, basket: filetrDel };
    default:
      return state;
  }
};
