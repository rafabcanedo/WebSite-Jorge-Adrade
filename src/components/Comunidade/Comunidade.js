import React from 'react';
import './Comunidade.css';
import ReactPlayer from 'react-player';

const Comunidade = () => {
    return (
        <>
         <section className='Comunidade' id='livros'>
             <div className='container'>
                 <div className='heading text-center'>
                     <h1>COMUNIDADE</h1>
                     <h2>Venha transformar o seu mundo através da leitura e aplicação desses clássicos do desenvolvimento pessoal.</h2>
                 </div>

                 <div className='heading text-center'>
                     <h3>Na Comunidade Lendo e Aplicando você vai potencializar a sua maneira de ler livros.</h3>
                 </div>

                 <div className='video'>
                 <ReactPlayer url='https://www.youtube.com/watch?v=NB7pdAWxkRU&t=3s' />
                 </div>

                 {/*<div className='text-mensal'>*/}
                    <div className='heading text-center'>
                    <div className='text_intro'>
                     <h4>Assinatura mensal:</h4>
                    </div>
                    <div className='text_value'>
                     <h2>R$ 27,00</h2>
                    </div>
                 </div>

                <div className='btn_center'>
                <a className='btn_link' href="https://pay.herospark.com/assinatura-mensal-36832">Quero Me Increver</a>
                </div>
             </div>
         </section>
        </>
    )
}

export default Comunidade;