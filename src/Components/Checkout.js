import React from 'react';
import { Link } from 'react-router-dom';
import celebrate from "../img/celebrate.gif"
import delivery from "../img/swiggy_delivery.gif"
import { useState } from 'react';

export default function Checkout(props) {
    // console.log(props.itemData.SwiggyReducer.itemData)
    const [text, setText] = useState()

    const makeCart = (obj) => {
        return (
            <>
                <div className="d-flex gap-4 mt-3 justify-content-evenly">
                    <span style={{ color: "green", padding: "2px" }}>&#9679;&#8414;</span>
                    <span>{obj.title}</span>
                    <div className="border p-2 d-flex justify-content-center gap-2">
                        <span className="fw-bold"
                            onClick={() => {
                                let match = props.itemData.SwiggyReducer.itemData.find(item => item.title === obj.title)
                                match.counter = String(Number(match.counter) - 1)
                                props.counterHandle(match)
                            }}
                        >-</span>
                        <span>{obj.counter}</span>
                        <span className="fw-bold"
                            onClick={() => {
                                let match = props.itemData.SwiggyReducer.itemData.find(item => item.title === obj.title)
                                match.counter = String(Number(match.counter) + 1)
                                props.counterHandle(match)
                            }}
                        >+</span>

                    </div>
                    <div className="text-muted me-auto" style={{ fontSize: "14px" }}>₹{Number(obj.cost) * Number(obj.counter)}</div>
                </div>

            </>
        )
    }

    return (
        <div style={{ background: "#e9ecee" }}>



            {/* .........login */}

            {/* ..... */}

            {/* .....modal */}
            <div
                class="offcanvas offcanvas-top h-100" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div class="offcanvas-header">
                    {/* <h5 id="offcanvasTopLabel">Offcanvas top</h5> */}
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div className="d-flex justify-content-center">
                        <img height="200px" src={delivery} alt="party" />
                    </div>
                    <div class="d-flex justify-content-center fs-2 text-uppercase fw-bold" style={{ color: "#FC8019" }}>
                        Order Placed
                    </div>
                    <div class="d-flex justify-content-center mt-3 text-success">Thanks for using SWIGGY</div>
                    <div className="d-flex justify-content-center" >
                        <img src={celebrate} alt="party" />
                    </div>
                </div>
            </div>
            {/* .............. */}

            {/* ...........cart section */}
            {props.itemData.SwiggyReducer.itemData.length > 0 ?
                <div className="position-absolute shadow p-5 bg-white" style={{ top: "150px", right: "180px", zIndex: "100" }}>
                    <div className="mb-5 d-flex gap-4">
                        <div>
                            <img src={props.itemData.SwiggyReducer.itemData[0].image} alt="restro" height="50" />
                        </div>
                        <div>
                            <div style={{ fontSize: "20px" }}>{props.itemData.SwiggyReducer.itemData[0].title}</div>
                            <div style={{ fontSize: "12px" }} className="">Kurla</div>
                        </div>

                    </div>
                    {props.itemData.SwiggyReducer.itemData.map(item => makeCart(item))}
                    {/* {render && props.itemData.SwiggyReducer.itemData.map(item => makeCart(item))} */}

                    <div className="text-muted">
                        <div className="text-black">Bill Details</div>
                        <div className="d-flex justify-content-between pt-1 pb-1">
                            <div>Item Total</div>
                            <div>
                                ₹{props.itemData.SwiggyReducer.itemData.reduce((acc, curr) => {

                                    // console.log(acc, curr.cost)
                                    return acc + Number(curr.cost) * Number(curr.counter)
                                }, 0)}
                            </div>

                        </div>
                        <div className="d-flex justify-content-between pt-1 pb-5">
                            <div>Delivery Fee | 0.6 kms</div>
                            <div>₹40</div>

                        </div>
                        <div className="d-flex justify-content-between pt-1 pb-1 border-top">
                            <div>Taxes and Charges</div>
                            <div>
                                ₹{Math.floor(props.itemData.SwiggyReducer.itemData.reduce((acc, curr) => {

                                    // console.log(acc, curr.cost)
                                    return acc + Number(curr.cost) * Number(curr.counter)
                                }, 0) / 22)}
                            </div>

                        </div>

                    </div>
                    <div className="d-flex mt-5 border-top pt-4">
                        <div className="me-auto">
                            <div className="fw-bold">TO PAY</div>
                            <span style={{ fontSize: "15px" }} className="text-muted">Extra charges may apply</span>
                        </div>
                        <span className="fw-bold">₹{props.itemData.SwiggyReducer.itemData.reduce((acc, curr) => {

                            // console.log(acc, curr.cost)
                            return acc + Number(curr.cost) * Number(curr.counter)
                        }, 0) + Math.floor(props.itemData.SwiggyReducer.itemData.reduce((acc, curr) => {

                            // console.log(acc, curr.cost)
                            return acc + Number(curr.cost) * Number(curr.counter)
                        }, 0) / 22) + 40}</span>
                    </div>
                    <button
                        onClick={() => {
                            props.cartHandler([])
                            setText('')
                        }}
                        className="btn btn-success text-white mt-3" style={{ width: "300px" }}
                        type="button"
                        data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"
                    >Place Order</button>


                    {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top offcanvas</button> */}


                </div>
                :
                <div className="position-absolute" style={{ top: "150px", right: "100px", zIndex: "100" }}>
                    <div className="fw-bold fs-2 text-secondary mb-5">Cart Empty</div>
                    <img height="250px" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2" alt="cart" />
                    <div className="text-muted fw-light">Good food is always cooking!<br /> Go ahead, order some yummy<br /> items from the menu.</div>
                </div>}
            {/* ...................... */}




            <div className="container-fluid p-2 shadow bg-white">
                <div className="row">
                    <div style={{ paddingLeft: "280px" }} className="col-9 d-flex gap-3 me-auto">
                        <Link to="/"><svg viewBox="0 0 16 25" height="49" width="34" fill="#fc8019"><path d="M15.5397581,11.1409928 C15.6509608,10.509712 15.5235868,10.0243137 15.1951696,9.77089093 C14.7011461,9.38969453 13.9591625,9.18240372 12.1918981,9.18240372 C10.8843181,9.18240372 9.48050894,9.18382005 8.88067307,9.18351656 C8.824972,9.17259055 8.62352934,9.10693329 8.6159428,8.86342483 L8.60775734,4.99753828 C8.60755774,4.75352397 8.80231214,4.55503473 9.04308494,4.55452889 C9.28425707,4.55412423 9.47990987,4.75190531 9.4801096,4.99571727 C9.4801096,4.99571727 9.48609894,7.09432117 9.48669787,7.84012275 C9.48669787,7.91215351 9.52822427,8.08029271 9.69013694,8.12409793 C10.745764,8.40908477 16.0819961,8.20068119 15.9990433,7.22017265 C15.5462467,3.15296419 12.1495732,0 8.02559027,0 C6.72689454,0 5.497376,0.313010053 4.40860776,0.868112227 C1.80303074,2.22496121 -0.0474859557,4.9636474 0.000928137643,8.12703176 C0.0352672176,10.3690901 1.49467783,14.3542524 2.38809268,14.9457747 C2.7998621,15.2186215 3.34210002,15.1176569 5.7669976,15.1176569 C6.86664654,15.1176569 7.89062974,15.1212989 8.39383694,15.1236259 C8.44614414,15.1335401 8.72045734,15.1971741 8.72045734,15.4525191 L8.726846,18.391212 C8.72744507,18.6353275 8.53249094,18.8337155 8.2913188,18.8338167 C8.050546,18.8342213 7.85499294,18.6366427 7.85459374,18.3927295 C7.85459374,18.3927295 7.8760556,17.2135293 7.8760556,16.7737573 C7.8760556,16.6719836 7.88334267,16.4971673 7.59006307,16.3649424 C6.6241768,15.929824 3.48764179,16.1924529 3.31165404,16.6725905 C3.24427359,16.8573211 3.5949514,17.5713563 4.13479358,18.4869157 C5.93330254,21.3601537 7.6990696,23.6004924 7.98456307,23.9589263 C8.00223174,23.9744048 8.0192016,23.9886693 8.03437467,24 C8.26985694,23.7099548 14.5488164,16.7550415 15.5397581,11.1409928 Z" id="Swiggy_Filled"></path></svg></Link>
                        <div className="mt-2 text-uppercase fw-bold">secure checkout</div>
                    </div>
                    <div className="col align-self-center">
                        <ul className="list-inline d-flex gap-5" >

                            <li>
                                <svg viewBox="6 -1 12 25" height="19" width="19" fill="#686b78"><path d="M21.966903,13.2244898 C22.0156989,12.8231523 22.0408163,12.4145094 22.0408163,12 C22.0408163,11.8357822 22.036874,11.6724851 22.029079,11.5101984 L17.8574333,11.5102041 C17.8707569,11.6717062 17.877551,11.8350597 17.877551,12 C17.877551,12.4199029 17.8335181,12.8295214 17.749818,13.2244898 L21.966903,13.2244898 Z M21.5255943,15.1836735 L16.9414724,15.1836735 C15.8950289,16.8045422 14.0728218,17.877551 12,17.877551 C9.92717823,17.877551 8.1049711,16.8045422 7.05852762,15.1836735 L2.47440565,15.1836735 C3.80564362,19.168549 7.56739481,22.0408163 12,22.0408163 C16.4326052,22.0408163 20.1943564,19.168549 21.5255943,15.1836735 Z M21.7400381,9.55102041 C20.6468384,5.18931674 16.7006382,1.95918367 12,1.95918367 C7.2993618,1.95918367 3.3531616,5.18931674 2.25996187,9.55102041 L6.6553883,9.55102041 C7.58404845,7.5276442 9.62792376,6.12244898 12,6.12244898 C14.3720762,6.12244898 16.4159515,7.5276442 17.3446117,9.55102041 L21.7400381,9.55102041 Z M2.03309705,13.2244898 L6.25018203,13.2244898 C6.16648186,12.8295214 6.12244898,12.4199029 6.12244898,12 C6.12244898,11.8350597 6.1292431,11.6717062 6.14256675,11.5102041 L1.97092075,11.5102041 C1.96312595,11.6724851 1.95918367,11.8357822 1.95918367,12 C1.95918367,12.4145094 1.98430112,12.8231523 2.03309705,13.2244898 Z M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M12,15.9183673 C14.1640545,15.9183673 15.9183673,14.1640545 15.9183673,12 C15.9183673,9.83594547 14.1640545,8.08163265 12,8.08163265 C9.83594547,8.08163265 8.08163265,9.83594547 8.08163265,12 C8.08163265,14.1640545 9.83594547,15.9183673 12,15.9183673 Z"></path></svg>
                                <span className="ms-2">Help</span>
                            </li>
                            <li>
                                <svg viewBox="6 0 12 24" height="19" width="18" fill="#686b78"><path d="M11.9923172,11.2463768 C8.81761115,11.2463768 6.24400341,8.72878961 6.24400341,5.62318841 C6.24400341,2.5175872 8.81761115,0 11.9923172,0 C15.1670232,0 17.740631,2.5175872 17.740631,5.62318841 C17.740631,8.72878961 15.1670232,11.2463768 11.9923172,11.2463768 Z M11.9923172,9.27536232 C14.0542397,9.27536232 15.7257581,7.64022836 15.7257581,5.62318841 C15.7257581,3.60614845 14.0542397,1.97101449 11.9923172,1.97101449 C9.93039471,1.97101449 8.25887628,3.60614845 8.25887628,5.62318841 C8.25887628,7.64022836 9.93039471,9.27536232 11.9923172,9.27536232 Z M24,24 L0,24 L1.21786143,19.7101449 L2.38352552,15.6939891 C2.85911209,14.0398226 4.59284263,12.7536232 6.3530098,12.7536232 L17.6316246,12.7536232 C19.3874139,12.7536232 21.1256928,14.0404157 21.6011089,15.6939891 L22.9903494,20.5259906 C23.0204168,20.63057 23.0450458,20.7352884 23.0641579,20.8398867 L24,24 Z M21.1127477,21.3339312 L21.0851024,21.2122487 C21.0772161,21.1630075 21.0658093,21.1120821 21.0507301,21.0596341 L19.6614896,16.2276325 C19.4305871,15.4245164 18.4851476,14.7246377 17.6316246,14.7246377 L6.3530098,14.7246377 C5.4959645,14.7246377 4.55444948,15.4231177 4.32314478,16.2276325 L2.75521062,21.6811594 L2.65068631,22.0289855 L21.3185825,22.0289855 L21.1127477,21.3339312 Z"></path></svg>
                                <span className="ms-2">{props.itemData.SwiggyReducer.signupData.length > 0 ? props.itemData.SwiggyReducer.signupData[0].name : "Sign up"}</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>


            <div style={{ paddingBottom: "100px" }}>
                <div className="container bg-white p-5 mt-4 mb-4 shadow w-50" style={{ marginLeft: "280px" }}>
                    {props.itemData.SwiggyReducer.signupData.length === 0 ?
                        <div className="row">
                            <div className="fw-bold fs-2">Account</div>
                            <div className="text-muted mb-5">To place your order now, log in to your existing account or sign up.</div>
                            <div className="d-flex gap-3">
                                <button className="btn btn-outline-success d-flex flex-column ps-5 pe-5"
                                // onClick={() => }
                                >
                                    <div style={{ fontSize: "13px" }}>Have an account?</div><div style={{ fontSize: "12px" }} className="text-uppercase fw-bold">Login</div></button>
                                <button className="btn btn-success d-flex flex-column ps-5 pe-5"><span style={{ fontSize: "13px" }}>New to Swiggy?</span><span style={{ fontSize: "12px" }} className="text-uppercase fw-bold">Sign up</span></button>
                            </div>
                        </div> : "Place Order"}
                    <div className="row"></div>

                </div>

                <div className="container bg-white p-5 mt-4 mb-4 shadow w-50" style={{ marginLeft: "280px" }}>
                    <div className="row">
                        <div className="fw-bold fs-2 text-muted">Delivery address</div>
                        <div className="d-flex flex-column w-50 gap-3 mt-3">
                            <input value={text} className="border-0 border-bottom p-3" type="text" placeholder="House Number"></input>
                            <input value={text} className="border-0 border-bottom p-3" type="text" placeholder="Street name"></input>
                            <input value={text} className="border-0 border-bottom p-3" type="text" placeholder="Locality"></input>
                            <input value={text} className="border-0 border-bottom p-3" type="text" placeholder="PIN"></input>


                        </div>
                    </div>

                </div>

                <div className="container bg-white p-5 mt-4 mb-4 shadow w-50" style={{ marginLeft: "280px" }}>
                    <div className="row">
                        <div className="fw-bold fs-2 text-secondary">Payment</div>
                        <div className="mt-3">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    CASH
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    UPI
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    DEBIT CARD
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    CREDIT CARD
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <footer className=" bg-dark text-white">
                <div className="pt-5  container">
                    <div className="row border-bottom">
                        <div className="col">
                            <ul className="list-inline">
                                <li className="text-uppercase text-muted mb-3 fw-bold">Company</li>
                                <li>About us</li>
                                <li>Team</li>
                                <li>Careers</li>
                                <li>Swiggy Blog</li>
                                <li>Bug Bounty</li>
                                <li>Swiggy One</li>
                                <li>Swiggy Corporate</li>
                                <li>Swiggy Instamart</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="list-inline">
                                <li className="text-uppercase text-muted mb-3 fw-bold">Contact</li>
                                <li>Help and Support</li>
                                <li>Partner with us</li>
                                <li>Ride with us</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="list-inline">
                                <li className="text-uppercase text-muted mb-3 fw-bold">Legal</li>
                                <li>Terms and Conditions</li>
                                <li>Refund and Cancellation</li>
                                <li>Privacy Policy</li>
                                <li>Cookie policy</li>
                                <li>Offer Terms</li>
                                <li>Phishing and Fraud</li>
                            </ul>
                        </div>
                        <div className="col">
                            <img className="mb-5" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" height="54" alt="playstore" />
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty" height="54" alt="playstore" />

                        </div>
                    </div>
                </div>
                <div className="container mt-5 pb-5">
                    <div className="row">
                        <div className="col">
                            <a href="/">
                                <img width="142" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza" alt="logo" />
                            </a>
                        </div>
                        <div className="col fs-5">© 2022 Swiggy</div>
                        <div className="col d-flex gap-4">
                            <a href="https://www.facebook.com/swiggy.in" target="_blank" rel="noreferrer">
                                <img width="24" height="24" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc" alt="fb" />
                            </a>
                            <a href="https://pinterest.com/swiggyindia" target="_blank" rel="noreferrer">
                                <img width="24" height="24" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd" alt="fb" />
                            </a>
                            <a href="https://instagram.com/swiggyindia/" target="_blank" rel="noreferrer">
                                <img width="24" height="24" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh" alt="fb" />
                            </a>
                            <a href="https://twitter.com/swiggy_in" target="_blank" rel="noreferrer">
                                <img width="24" height="24" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv" alt="fb" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
