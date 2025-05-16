import React from 'react'

const Card = (props) => {
  return (
    <div className="col-4">
      <div className="text-center  d-flex justify-content-center align-items-center" >
        <div className="card-body p-3 h-100">
          <h5 className="card-title fs-1"><i class={`${props.icon}`}></i></h5>
          <p className="card-text text-white fs-5 fw-semibold">{props.title}</p>
          <p className="card-text text-secondary">{props.desc}</p>
        </div>
      </div>
    </div>

  )
}

export default Card