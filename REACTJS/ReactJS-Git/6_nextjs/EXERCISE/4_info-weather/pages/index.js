import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import axios from 'axios';
import Link from 'next/link';

export async function getStaticProps() {
  const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=4b0201b530400e6c7feca7305cdf61f2');
  
  return {
    props: {
      weatherHanoi: response.data
    },
  }
}

export default function Home({weatherHanoi}) {
  let name = weatherHanoi.name;
  let { temp, humidity } = weatherHanoi.main;
  let { icon, description } = weatherHanoi.weather[0];
  let { speed } = weatherHanoi.wind;
  return (    
    <div className={styles.container}>
      <h2>{name} weather Infomation</h2>
      <img src={`https://openweathermap.org/img/wn/${icon}.png`} />
      <p>Description: {description}</p>
      <p>temp: {temp-273.15} °C</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind speed: {speed} km/h</p>
    </div>
  )
}
