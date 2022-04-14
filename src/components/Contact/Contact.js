import React, { useState } from 'react';
import './Contact.css';

import ContactInfo from '../ContactInfo';

import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdMail } from "react-icons/md";        

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        subject: "",
        message: "",})
    
      const InputEvent = (event) => {
        const { name, value } = event.target
    
        setData((preVal) => {
          return {
            ...preVal,
            [name]: value,
          }
        })
      }
    
      const formSubmit = (event) => {
        event.preventDefault()
        alert(
        `Eu me chamo ${data.fullname}. 
        Meu Telefone é ${data.phone}. 
        Meu Email é ${data.email}. 
        O título do Email é  ${data.subject}. 
        Esta é minha mensagem : ${data.message}. 
        `
        )
      }

    return (
        <>
          <section className='Contact' id='contact'>
            <div className='container top'>
              <div className='heading text-center'>
                <h4>CONTACT</h4>
                <h1>Contact With Me</h1>
              </div>
    
              <div className='content d_flex'>
                <div className='left'>
                  <div className='box box_shodow'>
                        <ContactInfo icon={<FaInstagram />} text="@eusoujorgeandrade" />
                        <ContactInfo icon={<FaWhatsapp />} text="+55 14 99778-2272" />
                        <ContactInfo icon={<MdMail />} text="exemple@gmail.com" />
                      <div className='button f_flex'>
                        <button className='btn_shadow'>
                        <FaInstagram />
                        </button>
                        <button className='btn_shadow'>
                        <FaWhatsapp />
                        </button>
                      </div>
                  </div>
                </div>
    
                <div className='right box_shodow'>
                  <form onSubmit={formSubmit}>
                    <div className='f_flex'>
                      <div className='input row'>
                        <span>Seu Nome </span>
                        <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                      </div>
                      <div className='input row'>
                        <span>Seu Telefone </span>
                        <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                      </div>
                    </div>
                    <div className='input'>
                      <span>Email </span>
                      <input type='email' name='email' value={data.email} onChange={InputEvent} />
                    </div>
                    <div className='input'>
                      <span>Título </span>
                      <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                    </div>
                    <div className='input'>
                      <span>Sua mensagem</span>
                      <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                    </div>
                    <button className='btn_shadow'>
                      Enviar Email
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      )
    }

export default Contact;