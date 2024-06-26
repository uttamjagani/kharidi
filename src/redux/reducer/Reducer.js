const initialState = {
    items: [],
    totalAmount: 0,
    totalCount: 0,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        const existingItem = state.items.find(item => item.id === action.payload.id);
        if (existingItem) {
          const updatedItems = state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1, totalPrice: item.totalPrice + action.payload.price }
              : item
          );
          return {
            ...state,
            items: updatedItems,
            totalAmount: state.totalAmount + action.payload.price,
            totalCount: state.totalCount + 1,
          };
        } else {
          return {
            ...state,
            items: [...state.items, { ...action.payload, quantity: 1, totalPrice: action.payload.price }],
            totalAmount: state.totalAmount + action.payload.price,
            totalCount: state.totalCount + 1,
          };
        }
      case 'DEL_ITEM':
        const itemToRemove = state.items.find(item => item.id === action.payload.id);
        if (itemToRemove.quantity === 1) {
          return {
            ...state,
            items: state.items.filter(item => item.id !== action.payload.id),
            totalAmount: state.totalAmount - action.payload.price,
            totalCount: state.totalCount - 1,
          };
        } else {
          const updatedItems = state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1, totalPrice: item.totalPrice - action.payload.price }
              : item
          );
          return {
            ...state,
            items: updatedItems,
            totalAmount: state.totalAmount - action.payload.price,
            totalCount: state.totalCount - 1,
          };
        }
      default:
        return state;
    }
  };
  
  export default cartReducer;
  