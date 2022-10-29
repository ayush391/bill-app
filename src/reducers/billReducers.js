
const initialState = {
    bills: [
        {
            "id": 0,
            "description": "Dominoes",
            "category": "Food & Dining",
            "amount": 430,
            "date": "2020/01/02"
        },
        {
            "id": 1,
            "description": "Amazon",
            "category": "Shopping",
            "amount": 2030,
            "date": "2020/01/13"
        },
        {
            "id": 2,
            "description": "Car wash",
            "category": "Utility",
            "amount": 500,
            "date": "2020/01/03"
        },
    ],
    ind:2,
}
const billReducers = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BILL":

            const { data, date } = action.payload;
            const id = state.ind+1

            const newBills = {
                bills: [
                    ...state.bills,
                    {
                        "id": id,
                        ...data,
                        "date": date
                    }
                ],
                ind:id
            };

            return newBills



        case "REMOVE_BILL":

            const updatedBills = state.bills.filter((bill) => bill.id !== action.id)

            return {
                ...state,
                bills: updatedBills
            }

        case "EDIT_BILL":
            return {
                ...state,
                bills:[
                    ...state.bills.slice(0,action.id),
                    {
                        ...state.bills[action.id],
                        ...action.payload.data

                    },
                    ...state.bills.slice(action.id+1)
                ]
            }


        default: return state;

    }
}

export default billReducers;