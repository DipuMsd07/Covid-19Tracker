import React,{useEffect,useState} from 'react';
import './covid.css';
import axios from 'axios';

const Covid = () => {

    const [data,setData] = useState([]);

    const getCovidData = async () => {
        try{
            // axios.get('https://api.covid19api.com/summary',{mode:'cors'},{crossdomain:true}).then((res)=>console.log(res));
            const res = await fetch('https://api.covid19api.com/summary');
            const ActualData = await res.json();
            setData(ActualData.Countries[76]);
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
                        <p className="main-content">{data.TotalRecovered}</p>
                    </div>  
                    <div className="card">
                    <p className="main-title"><span>Total</span>Confirmed</p>
                        <p className="main-content">{data.TotalConfirmed}</p>
                    </div>  
                    <div className="card">
                    <p className="main-title"><span>Total</span>Deaths</p>
                        <p className="main-content">{data.TotalDeaths}</p>
                    </div>  
                    <div className="card">
                    <p className="main-title"><span>Total</span>Active</p>
                        <p className="main-content">{data.NewConfirmed}</p>
                    </div>  
                    <div className="card">
                    <p className="main-title"><span>Last</span>Updated</p>
                        <p className="main-content">{data.Date}</p>
                    </div>  
                </div>

            </section>
        </>
    )
}

export default Covid;