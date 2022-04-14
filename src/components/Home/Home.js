import React from 'react';
import "./Home.css";
import image from "../../images/logoJorge.jpg";

// Text Coding
import { Typewriter } from 'react-simple-typewriter' // useTypewriter, Cursor

// icons
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

  const Home = () => {
    return (
      <>
        <section className='hero' id='home'>
          <div className='container f_flex top'>
            <div className='left top'>
              <h3>Seja Bem Vindo</h3>
              <h1>
                Eu sou <span>Jorge Andrade</span>
              </h1>
              <h2>
                um
                <span>
                  <Typewriter words={[" Mentor", " de Produtividade e Gestão de Tempo."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                </span>
              </h2>
  
              <p>Professor a mais de 15 anos, mentor de produtividade e um apaixonado por conhecimento. Desenvolveu a paixão pela leitura desde a infância e se tornou um leitor voraz que coloca em prática toda a sabedoria adquirida através das leituras.</p>
  
              <div className='hero_btn d_flex'>
                <div className='col_1'>
                  <h4>Redes Sociais</h4>
                  <div className='button'>
                    <button className='btn_shadow'>
                    <FaInstagram />
                    </button>
                    <button className='btn_shadow'>
                    <FaWhatsapp />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='right'>
              <div className='right_img'>
                <img src={image} alt='' />
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
  
  export default Home