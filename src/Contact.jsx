import React, { useState } from "react";
const Contact = () => {
    const [data,setData]=useState({
        fullname:'',
    phone:'',
    email:'',
    msg:' '

    })
const formSubmit=(e)=>{
    e.preventDefault();
    alert(`my name is ${data.fullname} my mobile number is ${data.phone}`);
};
const InputEvent=(event)=>{
    const {name,value}=event.target;
    setData((preval)=>{
        return {
            ...preval,
            [name]:value,
        }
    })
};

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">
                    Contact Us
            </h1>
            </div>
            <div className="container_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">FullName</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" onChange={InputEvent} value={data.fullname} placeholder="FullName" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" onChange={InputEvent} value={data.phone} placeholder="Mobile" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" onChange={InputEvent} value={data.email} placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label" name="msg" onChange={InputEvent} value={data.msg}>Message</label>
                                
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">submit
                                    </button>                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </>
    );
}
export default Contact