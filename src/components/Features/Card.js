import React, { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { FaRegTimesCircle } from 'react-icons/fa';

const Card = (props) => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }
    return (
        <>
        <div className='box btn_shadow'>
              <img src={props.image} alt='' onClick={toggleModal} />
              <h2 onClick={toggleModal}>{props.title}</h2>
              <p onClick={toggleModal}>{props.desc}</p>

              <a href='/'>
              
              </a>
            </div>

            {/* ------- MODAL ------- */}

            {modal &&(
                <div className='modal'>
                    <div onClick={toggleModal} className='overlay'></div>
                    <div className='modal-content d_flex'>
                        <div className='modal-img left'>
                            <img src={props.image} alt='' />
                        </div>
                        <div className='modal-text right'>
                            <span>Projeto</span>
                            <h1>{props.title}</h1>
                            <p>{props.desc}</p>
                            <div className='button f_flex mtop'>
                                <button className='btn_shadow'>
                                    VER <FaAngleDoubleRight />
                                </button>
                            </div>
                            <button className='close-modal btn_shadow' onClick={toggleModal}>
                                <FaRegTimesCircle />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Card