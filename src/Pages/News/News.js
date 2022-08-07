import React from 'react'
import sbr from '../../assets/image/sbr13.jpeg'
import './News.css';

export default function News() {
  return (
    <div className="main-content">
        <div className="news-content">
            <NewsCard title="Putra" description="putra ganteng" img={sbr}/>
            <NewsCard title="Danish" description="putra"/>
            <NewsCard title="Kntol" description=""/>
            <NewsCard title="Putra" description="lorem5"/>
            <NewsCard title="Putra" description="lorem5"/>

            
        </div>
    </div>
  )
}

function NewsCard(props) {
    return (
        <div className="news-card">
            <img src={props.img} style={{
                height: "100%",
                width: "100%"
            }}/>
            <div className="card-title">
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}
