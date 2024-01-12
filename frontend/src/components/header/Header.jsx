import React from 'react';
import './Header.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom'


const Header = ({ type }) => {

    const navigate = useNavigate();

    const [destination, setDestination] = useState("");

    const [OpenDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }]);

    const [openOptions, setopenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })

    const handleOption = (name, operations) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operations === 'i' ? options[name] + 1 : options[name] - 1,
            };
        });

    };

    const handleSearch = () => {
        navigate('/hotels', { state: { destination, date, options } });
    }
    return (
        <div className='header'>
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"} >
                <div className="headerList">
                    <div className="headerListItem">
                        <i class="fa-solid fa-hotel"></i>
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <i class="fa-solid fa-plane"></i>
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <i class="fa-solid fa-car"></i>
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <i class="fa-solid fa-building"></i>
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <i class="fa-solid fa-taxi"></i>
                        <span>Airports taxis</span>
                    </div>
                </div>
                {type !== "list" &&
                    <> <h1 className="headerTitle">Find Your Next Stays</h1>
                        <p className='headerDesc'>Search low price on hotels, home and much more... </p>
                        <button className='headerBtn'>Signin / Register</button>

                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <i class="fa-solid fa-route headerIcon"></i>
                                <input type="text" placeholder='Where are you going' className='headerSearchInput'
                                    onChange={e => setDestination(e.target.value)}
                                />
                            </div>
                            <div className="headerSearchItem">
                                <i class="fa-regular fa-calendar-days headerIcon"></i>
                                <span onClick={() => setOpenDate(!OpenDate)} className='headerSearchText'>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`} </span>
                                {OpenDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={(item) => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className='date'
                                    minDate={new Date()}
                                />}
                            </div>
                            <div className="headerSearchItem">
                                <i class="fa-regular fa-user headerIcon"></i>
                                <span onClick={() => setopenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                                {openOptions && <div className="options">
                                    <div className="optionItem">
                                        <span className='optionText'>Adult</span>
                                        <div className="optionCounter">
                                            <button disabled={options.adult <= 1} className='optionCounterButton' onClick={() => handleOption("adult", "d")}>-</button>
                                            <span className='optionCounterNumber'>{options.adult}</span>
                                            <button className='optionCounterButton' onClick={() => handleOption("adult", "i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className='optionText'>Children</span>
                                        <div className="optionCounter">
                                            <button disabled={options.children <= 0} className='optionCounterButton' onClick={() => handleOption("children", "d")}>-</button>
                                            <span className='optionCounterNumber'>{options.children}</span>
                                            <button className='optionCounterButton' onClick={() => handleOption("children", "i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className='optionText'>Room</span>
                                        <div className="optionCounter">
                                            <button disabled={options.room <= 1} className='optionCounterButton' onClick={() => handleOption("room", "d")}>-</button>
                                            <span className='optionCounterNumber'>{options.room}</span>
                                            <button className='optionCounterButton' onClick={() => handleOption("room", "i")}>+</button>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                            <div className="headerSearchItem">
                                <button className="headerSearchBtn" onClick={handleSearch}>Search</button>
                            </div>
                        </div> </>}
            </div>
        </div>
    )
}

export default Header