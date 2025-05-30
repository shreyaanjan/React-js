import React from 'react'

const Card2 = (props) => {
  return (
    <div className="col-lg-3 col-md-6 col-12">
      <div className="card-body2 text-center">
        <img src={props.img} className="rounded-circle mt-3" />
        <h5 className="card-title2 my-4 fw-semibold">{props.name}</h5>
        <p className="card-text2">{props.desc}</p>
        <div className="d-flex align-items-center justify-content-center gap-3 stars">
          <i class="bi bi-star fs-4"></i>
          <i class="bi bi-star fs-4"></i>
          <i class="bi bi-star fs-4"></i>
          <i class="bi bi-star fs-4"></i>
        </div>
      </div>
    </div>
  )
}

export default Card2