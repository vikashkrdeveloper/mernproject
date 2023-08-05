import React, { useState, useEffect } from 'react'
import './Main.css'
import LoaderComponent from '../partials/Loader';
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
function Main() {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        // Simulating content loading time
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    const [getdata, setdata] = useState([])
    const fetchdata = async () => {

        try {
            const res = await fetch('/pollingbooth/data', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await res.json();
            setdata(data);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchdata();

    }, [])

    const getdataid = async (id) => {
        try {
            const res = await fetch(`/pollingbooth/data/delete/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (res.status === 200) {
                toast.success('Deleted Sucessfully done');
                navigate('/');
                window.location.reload();
            }

        }
        catch (error) {
            console.log(error);
        }


    }

    return (
        <>
            {isLoading ? (
                <LoaderComponent />
            ) : (
                <main className='main-container-home'>
                    <div className="main-container-box-container">
                        <div className="heading-main-box-container">
                            <div className="heading-main-box">
                                <div className="heading-write-box-text">
                                    <h2 className='text-heading'>PBN.</h2>
                                </div>
                                <div className="heading-write-box-text">
                                    <h2 className='text-heading'>Polling Booth Name.</h2>
                                </div>

                                <div className="heading-write-box-text">
                                    <h2 className='text-heading'>Parent Constituency</h2>
                                </div>

                                <div className="heading-write-box-text">
                                    <h2 className='text-heading'>Winner- 2014</h2>
                                </div>

                                <div className="heading-write-box-text">
                                    <h2 className='text-heading'>1st Runner up</h2>
                                </div>

                                <div className="heading-write-box-text">
                                    <h2 className='text-heading'>Margin (%)</h2>
                                </div>

                                <div className="heading-write-box-text">
                                    <h2 className='text-heading'>Margin</h2>
                                </div>

                                <div className="heading-write-box-text">
                                    <h2 className='text-heading'>Total Voters</h2>
                                </div>

                                <div className="heading-write-box-text">
                                    <h2 className='text-heading'>BJP - Votes</h2>
                                </div>

                                <div className="heading-write-box-text">
                                    <h2 className='text-heading'>BJP- % vote</h2>
                                </div>

                                <div className="heading-write-box-text">
                                    <h2 className='text-heading'>INC- Votes</h2>
                                </div>

                                <div className="heading-write-box-text">
                                    <h2 className='text-heading'>INC- % votes</h2>
                                </div>

                            </div>

                        </div>
                        <div className="scroll-bar-container">
                            <div className="scrollbar-box-container">

                                {getdata.map((name, index) => (
                                    <div className="scrollbar-box" key={index}>
                                        <p className='paragraf-text'>{name.pollingboothnumber}</p>
                                        <p className='paragraf-text pollingname'>{name.pollingboothname}</p>
                                        <p className='paragraf-text parentconstituency'>{name.parentconstituency}</p>
                                        <p className='paragraf-text winner'>{name.winner}</p>
                                        <p className='paragraf-text firstrunnerup'>{name.firstrunnerup}</p>
                                        <p className='paragraf-text firstrunnerup'>{name.marginpercentage}</p>
                                        <p className='paragraf-text firstrunnerup'>{name.margine}</p>
                                        <p className='paragraf-text firstrunnerup'>{name.totalvoters}</p>
                                        <p className='paragraf-text firstrunnerup'>{name.bjpvotes}</p>
                                        <p className='paragraf-text firstrunnerup'>{name.bjpvotespercentage}</p>
                                        <p className='paragraf-text firstrunnerup'>{name.incvotes}</p>
                                        <p className='paragraf-text firstrunnerup'>{name.incvotespercentage}</p>
                                        <button className='button-con' key={index} onClick={() => { getdataid(name._id) }}>Delete</button>

                                    </div>


                                ))}

                            </div>
                        </div>
                        <div className="heading-bottom-box-container">
                            <div className="heading-bottom-box">
                                <NavLink to='/pollingbooth/data/create'>
                                    <button className='button-con  adddata' >Add Data</button>

                                </NavLink>


                            </div>

                        </div>

                    </div>


                </main>
            )}
        </>
    )
}

export default Main
