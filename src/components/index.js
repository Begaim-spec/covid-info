import React, {useEffect, useState} from 'react';
import {getData} from "../redux/actions/dataAction";
import {useSelector} from "react-redux";
import '../index.css'
import Spinner from "./Spinner";

const ShowData = ({city}) => {
    const [loading, setLoading] = useState(true)


    useEffect(() =>  {
        dispatch(getData(city))
        setLoading(false)
    }, [city])



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
        <>

        </>
    );
};

export default ShowData;