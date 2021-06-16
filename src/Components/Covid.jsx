import React,{useEffect,useState} from 'react';
import './covid.css';

const Covid = () => {

    const [data,setData] =useState([]);

    const getCovidData = async () => {
        try{
            const res = await fetch('https://api.covid19india.org/data.json');
            const ActualData = await res.json();
            console.log(ActualData.statewise[0]);
            setData(ActualData.statewise[0]);
        }
        catch(err){
            console.log(err);
        }
    }


    useEffect(()=>{
        getCovidData();
    }, [])

    return (
        <>
            <section>

                <div className="title">
                    <h5> 🔴 Live </h5>
                    <h2>covid-19 coronavirus tracker</h2>
                </div>

                <div className="cards">

                    <div className="card">
                    <p className="main-title"><span>Our</span>Country</p>
                        <p className="main-content">India</p>
                    </div>  
                    <div className="card">
                    <p className="main-title"><span>Total</span>Recovered</p>
                        <p className="main-content">{data.recovered}</p>
                    </div>  
                    <div className="card">
                    <p className="main-title"><span>Total</span>Confirmed</p>
                        <p className="main-content">{data.confirmed}</p>
                    </div>  
                    <div className="card">
                    <p className="main-title"><span>Total</span>Deaths</p>
                        <p className="main-content">{data.deaths}</p>
                    </div>  
                    <div className="card">
                    <p className="main-title"><span>Total</span>Active</p>
                        <p className="main-content">{data.active}</p>
                    </div>  
                    <div className="card">
                    <p className="main-title"><span>Last</span>Updated</p>
                        <p className="main-content">{data.lastupdatedtime}</p>
                    </div>  
                </div>

            </section>
        </>
    )
}

export default Covid;