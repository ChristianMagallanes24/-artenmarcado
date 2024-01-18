import React from 'react'
import miMuestra from '../../assets/muestra.jpg'
import miDiseño from '../../assets/di1.png'
import { FaAngleDown } from "react-icons/fa";
import "./_Header.scss";

const Header = () => {
  return (
    <>
    <div className="header">

        <div className='product-header'>
            <div><img src={miMuestra} alt="a"/></div>
            <div className='header-text'>
                <h1 className='titulo'>Arte en Enmarcados</h1>
                <p className='header-p'>Transforma tus recuerdos en arte único. Fotos personalizadas en portarretratos, diseñadas para ti.</p>
                <button className='header-btn'><FaAngleDown /></button>
            </div>
            <div className='di-container'>
        <img className='di' src={miDiseño} alt="a"/>
       </div>
        </div>
       
    </div>
    
    </>
  )
}

export default Header;