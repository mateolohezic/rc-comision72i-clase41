import React from 'react'
import './home.css'
import Card from '../../Components/Card/Card'

function Home() {

    const database = [
        {
            id: 1,
            name: 'Procesador',
            price: 5000,
            photo: 'https://http2.mlstatic.com/D_NQ_NP_602482-MLA45399348829_032021-O.webp'
        },
        {
            id: 2,
            name: 'Placa de video',
            price: 15000,
            photo: 'https://www.fullh4rd.com.ar/img/productos/3/video-geforce-rtx-4060-8gb-asus-dual-oc-0.jpg'
        },
        {
            id: 3,
            name: 'Memoria RAM',
            price: 3000,
            photo: 'https://http2.mlstatic.com/D_NQ_NP_703714-MLA52221527392_102022-O.webp'
        },
        {
            id: 4,
            name: 'SSD',
            price: 1000,
            photo: 'https://www.comeros.com.ar/wp-content/uploads/2022/05/wd-green-ssd-1tb-front.png.wdthumb.1280.1280.webp'
        },
        {
            id: 5,
            name: 'Tarjeta grafica',
            price: 8000,
            photo: 'https://www.digitaltrends.com/wp-content/uploads/2022/01/nvidia-rtx-3050-review-2.jpg?fit=720%2C480&p=1'
        },
        {
            id: 6,
            name: 'Gabinete',
            price: 6500,
            photo: 'https://http2.mlstatic.com/D_NQ_NP_770201-MLA44465031935_122020-O.webp'
        },
    ]

    return (
    <>
      <h1 className='tituloHome'>Bienvenido</h1>
      <section className='grillaCards'>
        {
            database.map(product => <Card product={product} key={product.id}/>)
        }
      </section>
    </>
    )
}

export default Home