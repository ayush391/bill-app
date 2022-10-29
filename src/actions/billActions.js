export const addBill = (data) => {
    return {
        type: "ADD_BILL",
        payload: {
            data: data, 
        }
    }
}
export const removeBill = (id) => {
    return {
        type: "REMOVE_BILL",
        id:id
    }
}
export const editBill = (id, data) => {
    return {
        type: "EDIT_BILL",
        id: id,
        payload: {
            data: data
        }   
    }
}