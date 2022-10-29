
const initialState = {
    bills: [
        {
            "id": 0,
            "description": "Dominoes",
            "category": "Food & Dining",
            "amount": 430,
            "date": "2022/01/02"
        },
        {
            "id": 1,
            "description": "Amazon",
            "category": "Shopping",
            "amount": 2030,
            "date": "2022/01/13"
        },
        {
            "id": 2,
            "description": "Car wash",
            "category": "Utility",
            "amount": 500,
            "date": "2022/01/03"
        },
        {
            "id": 3,
            "description": "House rent",
            "category": "Food & Dining",
            "amount": 3590,
            "date": "2022/08/03"
        },
        {
            "id": 4,
            "description": "House rent",
            "category": "Food & Dining",
            "amount": 5000,
            "date": "2022/08/03"
        },
        {
            "id": 5,
            "description": "Tuition",
            "category": "education",
            "amount": 2200,
            "date": "2022/06/03"
        },
        {
            "id": 6,
            "description": "Laundry",
            "category": "Personal Care",
            "amount": 3200,
            "date": "2022/05/03"
        },
        {
            "id": 7,
            "description": "Vacation",
            "category": "Travel",
            "amount": 3430,
            "date": "2022/04/03"
        }
    ],
    index: 7,
}
const billReducers = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BILL":

            const { data } = action.payload;
            const id = state.index + 1

            return {
                bills: [
                    ...state.bills,
                    {
                        "id": id,
                        ...data,
                    }
                ],
                index: id
            };




        case "REMOVE_BILL":

            const updatedBills = state.bills.filter((bill) => bill.id !== action.id)

            return {
                ...state,
                bills: updatedBills,
            }

        case "EDIT_BILL":
            const ind = state.bills.findIndex(bill=>bill.id===action.id);
            return {
                bills: [
                    ...state.bills.slice(0, ind),
                    {
                        ...state.bills[ind],
                        ...action.payload.data

                    },
                    ...state.bills.slice(ind + 1)
                ]
            }


        default: return state;

    }
}

export default billReducers;