import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { removeBill } from '../actions/billActions';
import { editBill } from '../actions/billActions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const View = () => {
    const bills = useSelector((state) => {
        return state.billReducers.bills
    });

    const dispatch = useDispatch();

    const remove = (id) => {
        dispatch(removeBill(id))
    }

    const [inputId, setInputId] = useState(0);
    const [inputDesc, setInputDesc] = useState('');
    const [inputCat, setInputCat] = useState('Select Category');
    const [inputAmount, setInputAmount] = useState();
    const [filterCat, setFilterCat] = useState('Select Category');

    const changeDesc = (event) => {
        setInputDesc(event.target.value)
    }
    const changeCat = (event) => {
        setInputCat(event.target.value)
    }
    const changeAmount = (event) => {
        setInputAmount(event.target.value)

    }

    const updateBill = (e) => {
        e.preventDefault();
        const id = inputId;
        const data = {
            description: inputDesc ? inputDesc : "Untitled",
            category: inputCat === "Select Category" ? "General" : inputCat,
            amount: inputAmount ? inputAmount : 0
        }

        dispatch(editBill(id, data));
        editModal.current.click();
    }

    const editFilter = (e) => {
        setFilterCat(e.target.value);
    }

    const editModal = useRef(null);

    const toggleModal = (id) => {
        setInputId(id)
        setInputDesc(bills[id].description)
        setInputAmount(bills[id].amount)
        setInputCat(bills[id].category)
        editModal.current.click();
    }


    return (
        <div className='row gy-3'>
            <h3>Your Bills</h3>
            <select className="form-select" aria-label="Default select example" value={filterCat} onChange={(e)=>editFilter(e)}>
                <option value='Select Category'>Select Category</option>
                <option value="Food & Dining">Food & Dining</option>
                <option value="Utility">Utility</option>
                <option value="Shopping">Shopping</option>
                <option value="Education">Education</option>
                <option value="Personal Care">Personal Care</option>
                <option value="Travel">Travel</option>
            </select>

            {
                bills.map((bill) => {
                    if (filterCat === 'Select Category' || bill.category === filterCat) {
                        return (
                            <div className='col-lg-3' key={bill.id}>
                                <div className="card">
                                    <div className="card-header text-white text-bg-secondary">
                                        {bill.description}
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Rs. {bill.amount}</li>
                                        <li className="list-group-item">{bill.category}</li>
                                        <li className="list-group-item">{bill.date}</li>
                                    </ul>
                                    <div className='card-footer'>
                                        <button className='btn btn-warning me-2' onClick={() => toggleModal(bill.id)}>Edit</button>
                                        <button className='btn btn-danger me-2' onClick={() => dispatch(remove(bill.id))}> Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }

            <button ref={editModal} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Edit Bill
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Bill</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Description" value={inputDesc} onChange={changeDesc} />
                                </div>
                                <div className="mb-3">
                                    <select className="form-select" aria-label="Default select example" value={inputCat} onChange={changeCat}>
                                        <option value='Select Category'>Select Category</option>
                                        <option value="Food & Dining">Food & Dining</option>
                                        <option value="Utility">Utility</option>
                                        <option value="Shopping">Shopping</option>
                                        <option value="Education">Education</option>
                                        <option value="Personal Care">Personal Care</option>
                                        <option value="Travel">Travel</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Amount" value={inputAmount} onChange={changeAmount} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={(e) => updateBill(e)}>Save changes</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default View