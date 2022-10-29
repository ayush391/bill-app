import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { addBill } from '../actions/billActions';


const Add = () => {

    const [inputDesc, setInputDesc] = useState('');
    const [inputCat, setInputCat] = useState('Select Category');
    const [inputAmount, setInputAmount] = useState(0);
    const [inputDate, setInputDate] = useState('');
    const dispatch = useDispatch()

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

    const submitBill = (event)=>{
        event.preventDefault();
        const date = inputDate?new Date(inputDate).toLocaleDateString('en-ZA'):new Date().toLocaleDateString('en-ZA')
        const data = {
            description:inputDesc?inputDesc:"Untitled",
            category:inputCat==="Select Category"?"General":inputCat,
            amount:inputAmount?inputAmount:0,
            date:date
        }

        dispatch(addBill(data));
    }
    return (
        <div className='row gy-3'>
            <h3>Add Bill</h3>
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
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Amount" value={inputAmount} onChange={changeAmount}/>
                </div>
                <div className="mb-3">
                    <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="Date" value={inputDate} onChange={changeDate}/>
                </div>
                <button className="btn btn-primary" onClick={submitBill}>Add Bill</button>
            </form>
        </div>
    )
}

export default Add