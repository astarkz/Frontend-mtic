import React from 'react'
import empty from '../../img/data_state.png'

const Inicio = () => {
    return (
        <div>
            <div className='d-flex flex-column align-items-center'>
            <img className="o-empty-state w-25" src={empty} alt="Image empty state" />
            <h3>Aún no tienes estadisticas para mostrar.</h3>

            </div>
        </div>
    )
}

export default Inicio
