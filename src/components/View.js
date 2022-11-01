import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { removeBill } from '../actions/billActions';
import { editBill } from '../actions/billActions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const View = () => {
    const bills = useSelector((state) => {
        return state.billReducers.bills
    });

    const sortedBills = [...bills].sort((bill1, bill2) => { return bill2.amount - bill1.amount });



    const dispatch = useDispatch();


    const [inputId, setInputId] = useState(0);
    const [inputDesc, setInputDesc] = useState('');
    const [inputCat, setInputCat] = useState('Select Category');
    const [inputAmount, setInputAmount] = useState(0);
    const [inputDate, setInputDate] = useState();
    const [inputBudget, setInputBudget] = useState();
    const [filterCat, setFilterCat] = useState('Select Category');

    const changeDesc = (event) => {
        setInputDesc(event.target.value)
    }
    const changeCat = (event) => {
        setInputCat(event.target.value)
    }
    const changeAmount = (event) => {
        setInputAmount(Number(event.target.value))
    }
    const changeDate = (event) => {
        setInputDate(event.target.value)
    }
    const changeBudget = (event) => {
        setInputBudget(Number(event.target.value))

    }

    var currBudgetAmt = inputBudget;

    const updateBill = (e) => {
        e.preventDefault();
        const id = inputId;
        const date = inputDate ? new Date(inputDate).toLocaleDateString('en-ZA') : new Date().toLocaleDateString('en-ZA')
        const data = {
            description: inputDesc ? inputDesc : "Untitled",
            category: inputCat === "Select Category" ? "General" : inputCat,
            amount: inputAmount ? inputAmount : 0,
            date: date  
        }

        dispatch(editBill(id, data));
        editModal.current.click();
    }

    const editFilter = (e) => {
        setFilterCat(e.target.value);
    }

    const editModal = useRef(null);

    const toggleModal = (id) => {
        setInputId(id);
        const ind = bills.findIndex(bill=>bill.id===id);
        setInputDesc(bills[ind].description);
        setInputAmount(bills[ind].amount);
        setInputCat(bills[ind].category);
        setInputDate(bills[ind].date)

        editModal.current.click();
    }


    return (
        <div className='row gy-3'>
            <h3>Your Bills</h3>
            <div className="mb-3">
                <input type="text" className="form-control mb-3 input-text-custom" id="exampleFormControlInput1" placeholder="Your Budget" value={inputBudget} onChange={changeBudget} />
                {/* <button className='btn btn-warning mt-2' onClick={()=>setBudget()}>Set</button> */}
                <select className="form-select mb-5 input-select-custom" aria-label="Default select example" value={filterCat} onChange={(e) => editFilter(e)}>
                    <option value='Select Category'>Select Category</option>
                    <option value='General'>General</option>
                    <option value="Food & Dining">Food & Dining</option>
                    <option value="Utility">Utility</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Education">Education</option>
                    <option value="Personal Care">Personal Care</option>
                    <option value="Travel">Travel</option>
                </select>

                <div className='mt-3'>
                    <i className='text-bg-danger me-2 p-2'>Within Budget</i>
                    <i className='text-bg-secondary me-2 p-2'>Out of Budget</i>
                </div>
            </div>

            {
                sortedBills.map((bill) => {
                    if (filterCat === 'Select Category' || bill.category === filterCat) {
                        if (bill.amount <= inputBudget) {
                            currBudgetAmt = currBudgetAmt - bill.amount;
                        }
                        return (
                            <div className='col-lg-3' key={bill.id}>
                                <div className="card">
                                    <div className={"card-header text-white " + (currBudgetAmt >= 0 && bill.amount <= inputBudget ? "text-bg-danger" : "text-bg-secondary")}>
                                        {bill.description}
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Rs. {bill.amount}</li>
                                        <li className="list-group-item">{bill.category}</li>
                                        <li className="list-group-item">{bill.date}</li>
                                    </ul>
                                    <div className='card-footer'>
                                        <button className='btn btn-warning me-2' onClick={() => toggleModal(bill.id)}><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon> </button>
                                        <button className='btn btn-danger me-2' onClick={() => dispatch(removeBill(bill.id))}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> </button>
                                    </div>
                                </div>
                            </div>

                        );
                    }
                    return (null);
                })
            }

            <button ref={editModal} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Edit Bill
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog ">
                    <div className="modal-content ">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Bill</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <input type="text" className="form-control input-text-custom" id="exampleFormControlInput1" placeholder="Description" value={inputDesc} onChange={changeDesc} />
                                </div>
                                <div className="mb-3">
                                    <select className="form-select input-select-custom" aria-label="Default select example" value={inputCat} onChange={changeCat}>
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
                                    <input type="number" className="form-control input-text-custom" id="exampleFormControlInput1" placeholder="Amount" value={inputAmount} onChange={changeAmount} />
                                </div>
                                <div className="mb-3">
                                    <input type="date" className="form-control input-text-custom" id="exampleFormControlInput1" placeholder="Date" value={inputDate} onChange={changeDate} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" onClick={(e) => updateBill(e)}>Save changes</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default View