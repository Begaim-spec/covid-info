import React, {useEffect, useState} from "react";
import './index.css'
import {useDispatch, useSelector} from "react-redux";
import {getCountries} from "./redux/actions/countriesAction";
import {getData} from "./redux/actions/dataAction";
import Spinner from './components/Spinner'
import ShowData from "./components";



function App() {
    const dispatch = useDispatch()
    const {country} = useSelector(s => s.countries)
    const {data} = useSelector(s => s.data)
    const [city, setCity] = useState('kyrgyzstan')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        dispatch(getCountries())
        setLoading(false)
    }, [])

    const handleChange = (e) => {
        setCity(e.target.value)
    }
    useEffect(() =>  {
        dispatch(getData(city))
        setLoading(false)
    }, [city])

    if (loading){
        return <Spinner/>
    }

    const firstDay = data[data.length-1]
    const secondDay = data[data.length-2]
    const thirdDay = data[data.length-3]
    const fourthDay = data[data.length-4]
    const fifthDay = data[data.length-5]
    const lastDay = data[data.length-6]
    const active1 = firstDay.Active - secondDay.Active
    const active2 = secondDay.Active - thirdDay.Active
    const active3 = thirdDay.Active - fourthDay.Active
    const active4 = fourthDay.Active - fifthDay.Active
    const active5 = fifthDay.Active - lastDay.Active
    const confirmed1 = firstDay.Confirmed - secondDay.Confirmed
    const confirmed2 = secondDay.Confirmed - thirdDay.Confirmed
    const confirmed3 = thirdDay.Confirmed - fourthDay.Confirmed
    const confirmed4 = fourthDay.Confirmed - fifthDay.Confirmed
    const confirmed5 = fifthDay.Confirmed - lastDay.Confirmed
    const recovered1 = firstDay.Recovered - secondDay.Recovered
    const recovered2 = secondDay.Recovered - thirdDay.Recovered
    const recovered3 = thirdDay.Recovered - fourthDay.Recovered
    const recovered4 = fourthDay.Recovered - fifthDay.Recovered
    const recovered5 = fifthDay.Recovered - lastDay.Recovered
    const deaths1 = firstDay.Deaths - secondDay.Deaths
    const deaths2 = secondDay.Deaths - thirdDay.Deaths
    const deaths3 = thirdDay.Deaths - fourthDay.Deaths
    const deaths4 = fourthDay.Deaths - fifthDay.Deaths
    const deaths5 = fifthDay.Deaths - lastDay.Deaths

    const top = [recovered1, recovered2, recovered3, recovered4, recovered5]
    const result =  Math.max(...top)
    console.log(result)





  return (
          <div className='covid'>
              <select
                  value={country.Country}
                  className='country title'
                  onChange={(e) => handleChange(e)}
                  defaultValue={country.filter(el => el.Country === "Kyrgyzstan")}
              >
                  {
                      country.map(el => <option value={el.Country} selected='Kyrgyzstan' >
                          {el.Country}
                      </option>)
                  }
              </select>
              {
                  !loading && <div className="main">
                      <div>
                          <div className="data">
                              <div className='data__date title'>
                                  {firstDay.Date.slice(0,10)}
                              </div>
                              <div className='data__description'>
                                  <div className='row data__description_bottom'>
                                      <div className='col-3'>Active</div>
                                      <div className='col-3'>
                                          <span className='data__description_number-color'>{active1}</span>
                                      </div>
                                      <div className='col-3 '>Deaths</div>
                                      <div className='col-3'>
                                          <span className='data__description_number-color'>{deaths1}</span>
                                      </div>
                                  </div>
                                  <div className='row'>
                                      <div className='col-3 '>Confirmed</div>
                                      <div className='col-3'>
                                          <span className='data__description_number-color'>{confirmed1}</span>
                                      </div>
                                      <div className='col-3 '>Recovered</div>
                                      <div className='col-3 table__item_right'>
                                          <span className='data__description_number-color'>{recovered1}</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="data">
                              <div className='data__date title'>
                                  {secondDay.Date.slice(0,10)}
                              </div>
                              <div className='data__description'>
                                  <div className='row data__description_bottom'>
                                      <div className='col-3'>Active</div>
                                      <div className='col-3'>
                                          <span className='data__description_number-color'>{active2}</span>
                                      </div>
                                      <div className='col-3 '>Deaths</div>
                                      <div className='col-3'>
                                          <span className='data__description_number-color'>{deaths2}</span>
                                      </div>
                                  </div>
                                  <div className='row'>
                                      <div className='col-3 '>Confirmed</div>
                                      <div className='col-3'>
                                          <span className='data__description_number-color'>{confirmed2}</span>
                                      </div>
                                      <div className='col-3 '>Recovered</div>
                                      <div className='col-3 '>
                                          <span className='data__description_number-color'>{recovered2}</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="data">
                              <div className='data__date title'>
                                  {thirdDay.Date.slice(0,10)}
                              </div>
                              <div className='data__description'>
                                  <div className='row data__description_bottom'>
                                      <div className='col-3'>Active</div>
                                      <div className='col-3'>
                                          <span className='data__description_number-color'>{active3}</span>
                                      </div>
                                      <div className='col-3 '>Deaths</div>
                                      <div className='col-3'>
                                          <span className='data__description_number-color'>{deaths3}</span>
                                      </div>
                                  </div>
                                  <div className='row'>
                                      <div className='col-3 '>Confirmed</div>
                                      <div className='col-3'>
                                          <span className='data__description_number-color'>{confirmed3}</span>
                                      </div>
                                      <div className='col-3 '>Recovered</div>
                                      <div className='col-3'>
                                          <span className='data__description_number-color'>{recovered3}</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="data">
                              <div className='data__date title'>
                                  {fourthDay.Date.slice(0,10)}
                              </div>
                              <div className='data__description'>
                                  <div className='row data__description_bottom'>
                                      <div className='col-3'>Active</div>
                                      <div className='col-3'>
                                          <span className='data__description_number-color'>{active4}</span>
                                      </div>
                                      <div className='col-3 '>Deaths</div>
                                      <div className='col-3'>
                                          <span className='data__description_number-color'>{deaths4}</span>
                                      </div>
                                  </div>
                                  <div className='row'>
                                      <div className='col-3 '>Confirmed</div>
                                      <div className='col-3'>
                                          <span className='data__description_number-color'>{confirmed4}</span>
                                      </div>
                                      <div className='col-3 '>Recovered</div>
                                      <div className='col-3 table__item_right'>
                                          <span className='data__description_number-color'>{recovered4}</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="data">
                              <div className='data__date title'>
                                  {fifthDay.Date.slice(0,10)}
                              </div>
                              <div className='data__description'>
                                  <div className='row data__description_bottom'>
                                      <div className='col-3'>Active</div>
                                      <div className='col-3'>
                                          <span className='data__description_number-color'>{active5}</span>
                                      </div>
                                      <div className='col-3 '>Deaths</div>
                                      <div className='col-3'>
                                          <span className='data__description_number-color'>{deaths5}</span>
                                      </div>
                                  </div>
                                  <div className='row'>
                                      <div className='col-3 '>Confirmed</div>
                                      <div className='col-3'>
                                          <span className='data__description_number-color'>{confirmed5}</span>
                                      </div>
                                      <div className='col-3 '>Recovered</div>
                                      <div className='col-3 table__item_right'>
                                          <span className='data__description_number-color'>{recovered5}</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='case'>
                          <h3 className='case__title'>Top recovered cases</h3>
                          <h2 className='case__title_number'>{result}</h2>
                          <span className='case__line'>
                      <svg width="320" height="2" viewBox="0 0 320 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.3" width="320" height="2" fill="white"/></svg>
                  </span>
                          <span className='case__date'>{firstDay.Date.slice(0,10)}</span>
                      </div>
                  </div>
              }
          </div>
  );
}

export default App;
