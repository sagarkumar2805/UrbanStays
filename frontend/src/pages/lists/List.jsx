import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import './List.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';

const Lists = () => {
  const location = useLocation();
  console.log(location);

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setopenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label htmlFor="">Check-in-date</label>
              <span onClick={() => setopenDate(!openDate)}>{
                `${format(date[0].startDate, "dd/mm/yyyy")} to ${format(date[0].endDate, "dd/mm/yyyy")}`
              }</span>
              {openDate && (<DateRange onChange={(item) => { setDate([item.selection]) }}
                minDate={new Date()}
                ranges={date}
              />)}
            </div>
            <div className="lsItem">
              <label htmlFor="">Options</label>
              <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min Price <small>per night</small>
                </span>
                <input type="number" className='lsOptionInput' />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max Price <small>per night</small>
                </span>
                <input type="number" className='lsOptionInput' />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Adults
                </span>
                <input type="number" min={1} className='lsOptionInput' placeholder={options.adult} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Childrens
                </span>
                <input type="number" className='lsOptionInput' min={0} placeholder={options.children} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Rooms
                </span>
                <input type="number" className='lsOptionInput' min={1} placeholder={options.room} />
              </div>
              </div>
            </div>
            <button>Search</button>

          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Lists