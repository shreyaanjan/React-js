import React from 'react'

const UserLogin = () => {
    return (
        <section className="bg-img vh-100 d-flex align-items-center">
            <div className="form-design m-auto col-xl-3">
                <form action id="form">
                    <div className="container">
                        <div>
                            <div>
                                <img src="https://student.rnwmultimedia.com/assets/images/logo-white.png" alt="logo" className='img-fluid' />
                            </div>
                            <div className="my-3 fw-semibold col-12">
                                <label htmlFor="num">Mobile Number : </label>
                                <input type="number" className="form-control" name="num" id="num" placeholder='Please Enter Mobile Number'/>
                            </div>
                            <div>
                                <button className='btn btn-danger w-100'>Login with OTP</button>
                            </div>
                            <div className='my-3'>
                                <button className='btn btn-danger w-100'>Login with MPIN</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default UserLogin