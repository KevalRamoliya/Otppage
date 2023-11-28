import React from 'react'
import img1 from './Group 243.png'

const Otp = () => {
    return (
        <div className='otp'>
            <div className="container">
                <div className="row">

                    <div className="lotpside">
                        <img src={img1} alt="" />
                    </div>

                    <div className="rotpside">
                        <div className='obox'>
                            <p>Verify your OTP</p>
                            <span>We send you the four digit code to  +91 12345 67890
                                Enter the code below to confirm  your Mobile no.</span>
                            <div className="rectangle">
                                <input type='text' value="" className="re-1" />
                                <input type='text' value="" className="re-1"/>
                                <input type='text' value="" className="re-1"/>
                                <input type='text' value="" className="re-1"/>
                            </div>
                            <button className='obtn'>Verify</button>
                            <h4>Resend One-Time Password</h4>
                            <span className='enter'>Entered a wrong number?</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Otp
