import { useState } from "react";

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
            "description": "Car wash",
            "category": "Utility",
            "amount": 500,
            "date": "2020/01/03"
        },
        {
            "id": 2,
            "description": "Amazon",
            "category": "Shopping",
            "amount": 2030,
            "date": "2020/01/13"
        }
    ]
}
const billReducers = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BILL":

            const { data, date } = action.payload;
            const id = state.bills[state.bills.length-1].id

            return {
                bills: [
                    ...state.bills,
                    {
                        "id": id+1,
                        ...data,
                        "date": date
                    }
                ]
            };



        case "REMOVE_BILL":

            const updatedBills = state.bills.filter((bill) => bill.id !== action.id)

            return {
                bills: updatedBills
            }

        case "EDIT_BILL":
            return {
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