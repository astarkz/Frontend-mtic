import React from 'react'
import empty from '../../img/data_state.png'

const Inicio = () => {
    return (
        <div>
            <div className='d-flex justify-content-center'>
            <img className="o-empty-state" src={empty} alt="Image empty state" />
            <h3>Aún no tienes estadisticas para mostrar.</h3>

            </div>
        </div>
    )
}

export default Inicio
