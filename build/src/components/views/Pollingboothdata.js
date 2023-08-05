import React, { useState } from 'react'
import './Pollingboothdata.css'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function Pollingboothdata() {
    const navigate = useNavigate()
    const [getdata, setdata] = useState({ pbno: "", pbn: "", pco: "", winner: "", firstroundwin: "", marginper: "", margin: "", totalvoters: "", bjpvoters: "", bjpvotersperc: "", incvoters: "", incvotersperc: "" });
    const changedata = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setdata({ ...getdata, [name]: value });
    }
    const Submitform = async (event) => {

        event.preventDefault();
        try {
            const { pbno, pbn, pco, winner, firstroundwin, marginper, margin, totalvoters, bjpvoters, bjpvotersperc, incvoters, incvotersperc } = getdata;
            const res = await fetch('/pollingbooth/data', {

                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ pbno, pbn, pco, winner, firstroundwin, marginper, margin, totalvoters, bjpvoters, bjpvotersperc, incvoters, incvotersperc })
            })

            if (res.status === 200) {
                toast.success('Data added Sucessfully');
                navigate('/');
                window.location.reload();
            }
            else if (res.status === 408) {
                toast.error('The pollingboothnumber already exist ');

            }
            else if (res.status === 500) {
                toast.error('All field require');

            }

        }
        catch (error) {
            console.log('Some technical issues');
        }
    }
    return (
        <>
            <main className='add-data-container'>
                <div className="add-data-box-container">
                    <div className="add-data-box-heading">
                        <h1>Polling Data Add</h1>

                    </div>
                    <form action="" method='POST'>
                        <input type="number" name="pbno" id="" value={getdata.pbno} onChange={changedata} className='input-box-con' placeholder='Polling Booth Number' />
                        <input type="text" name="pbn" id="" value={getdata.pbn} onChange={changedata} className='input-box-con' placeholder='Polling Booth Name' />
                        <input type="text" name="pco" id="" value={getdata.pco} onChange={changedata} className='input-box-con' placeholder='Parent Constituency' />
                        <input type="text" name="winner" id="" value={getdata.winner} onChange={changedata} className='input-box-con' placeholder='Winner- 2014' />
                        <input type="text" name="firstroundwin" id="" value={getdata.firstroundwin} onChange={changedata} className='input-box-con' placeholder='1st Runner up other than INC and BJP' />
                        <input type="number" name="marginper" id="" value={getdata.marginper} onChange={changedata} className='input-box-con' placeholder='Margin (%)' />
                        <input type="number" name="margin" id="" value={getdata.margin} onChange={changedata} className='input-box-con' placeholder='Margin ' />
                        <input type="number" name="totalvoters" id="" value={getdata.totalvoters} onChange={changedata} className='input-box-con' placeholder=' Total Voters' />
                        <input type="number" name="bjpvoters" id="" value={getdata.bjpvoters} onChange={changedata} className='input-box-con' placeholder='BJP - Votes' />
                        <input type="number" name="bjpvotersperc" id="" value={getdata.bjpvotersperc} onChange={changedata} className='input-box-con' placeholder='BJP- % vote' />
                        <input type="number" name="incvoters" id="" value={getdata.incvoters} onChange={changedata} className='input-box-con' placeholder='INC- Votes ' />
                        <input type="number" name="incvotersperc" id="" value={getdata.incvotersperc} onChange={changedata} className='input-box-con' placeholder='INC- % votes ' />
                        <div className="button-container-form">
                            <input type="submit" id="btn-box" value='Submit items' onClick={Submitform} />

                        </div>
                    </form>
                </div>
            </main>

        </>
    )
}

export default Pollingboothdata
