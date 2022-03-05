import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import Header from './Header';
import { useState } from 'react';
import data from '../restaurantData.json'

import heart from '../img/heart.png'
import blackHeart from '../img/heart-black.png'

export default function Items(props) {
    const location = useLocation()
    const [count, setCount] = useState(true);
    const { image, body, title, rating, cost, time, area } = location.state
    console.log(props.itemData.SwiggyReducer.signupData)

    const makeComponet = (obj) => {
        return (
            <div className="row p-5">
                <div className="col-4 border-bottom" style={{ paddingBottom: "100px" }}>
                    <div className="mb-2">{obj.title}</div>
                    <div>₹{obj.cost}</div>
                </div>
                <div className="col-1 border-bottom">
                    <img src={obj.image} width="136" className="rounded" alt="photo" />
                    <button
                        onClick={() => {
                            const match = props.itemData.SwiggyReducer.itemData.find(item => item.title === obj.title)
                            if (match) {
                                console.log(props.itemData.SwiggyReducer.itemData)
                                console.log(match)
                                match.counter = String(Number(match.counter) + 1)
                                props.counterHandle(match)
                                // setRender(true)

                            } else {
                                let newObj = { ...obj, counter: "1" }
                                props.itemHandler(newObj)
                                console.log(props)
                            }
                            // console.log(props.itemData.SwiggyReducer.itemData)
                        }}
                        className="btn border bg-white shadow text-success position-absolute fw-bold ps-4 pe-4 pt-2"
                        style={{ fontSize: "10px", marginLeft: "-100px", marginTop: "60px" }}
                    >ADD</button>
                </div>
            </div>
        )
    }

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
        <>
            {/* ....cart count */}
            <span style={{ right: "417px", top: "16px", fontSize: "12px" }} className="position-absolute fw-bold text-white">{props.itemData.SwiggyReducer.itemData.reduce((acc, curr) => { return acc + Number(curr.counter) }, 0)}</span>
            {/* .... */}

            {/* .............filter data */}
            <div className="d-flex gap-4 position-absolute " style={{ top: '37%', left: "33%" }}>
                <input type="text" placeholder="Search for dishes.." className="pt-2 pb-2 ps-3 pe-3 bg-white shadow border-0"></input>
                <div className="pt-2 pb-2 ps-3 pe-3 bg-white shadow">

                    <input type="checkbox" ></input> Veg Only
                </div>
                <section className="pt-2 pb-2 ps-3 pe-3 bg-white shadow">
                    {count && <img onClick={() => { setCount(!count) }} src={blackHeart} alt="heart" />}
                    {!count && <img onClick={() => { setCount(!count) }} src={heart} alt="red heart" />}
                    Favourite
                </section>
            </div>
            {/* ......................... */}

            {/* ...........cart section */}
            {props.itemData.SwiggyReducer.itemData.length > 0 ?
                <div className="position-absolute" style={{ top: "450px", right: "200px", zIndex: "100" }}>
                    <div className="fw-bold fs-2 text-secondary mb-1">Cart</div>
                    <div className="mb-5">{props.itemData.SwiggyReducer.itemData.length} ITEMS</div>
                    {props.itemData.SwiggyReducer.itemData.map(item => makeCart(item))}
                    {/* {render && props.itemData.SwiggyReducer.itemData.map(item => makeCart(item))} */}
                    <div className="d-flex mt-5">
                        <div className="me-auto">
                            <div className="fw-bold">Subtotal</div>
                            <span style={{ fontSize: "15px" }} className="text-muted">Extra charges may apply</span>
                        </div>
                        <span className="fw-bold">₹{props.itemData.SwiggyReducer.itemData.reduce((acc, curr) => {

                            // console.log(acc, curr.cost)
                            return acc + Number(curr.cost) * Number(curr.counter)
                        }, 0)}</span>
                    </div>
                    <Link to="/checkout"><button className="btn btn-success text-white mt-3" style={{ width: "300px" }}>Checkout</button></Link>
                </div>
                :
                <div className="position-absolute" style={{ top: "450px", right: "100px", zIndex: "100" }}>
                    <div className="fw-bold fs-2 text-secondary mb-5">Cart Empty</div>
                    <img height="250px" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2" alt="cart" />
                    <div className="text-muted fw-light">Good food is always cooking!<br /> Go ahead, order some yummy<br /> items from the menu.</div>
                </div>}
            {/* ...................... */}



            <Header place={area} user={props.itemData.SwiggyReducer.signupData.length > 0 ? props.itemData.SwiggyReducer.signupData[0].name : "Sign up"} />
            <div className="bg-light text-secondary p-2 ps-5" style={{ fontSize: "13px" }}>Home/{area}/{title}</div>

            <div style={{ background: "#171A19" }} className="p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <img src={image} alt="photo" height="165" width="254" />
                        </div>
                        <div className="col-6">
                            <div className="text-white fs-3">{title}</div>
                            <div className="text-white text-muted mt-2">{body}</div>
                            <div className="text-white text-muted mt-2">Brigade Road Ashok Nagar</div>
                            <div className="text-white d-flex gap-3 mt-3">
                                <span className="d-flex flex-column border-end pe-5">
                                    &#9733; {rating}
                                    <span className="text-white text-muted">
                                        20+ Ratings
                                    </span>
                                </span>
                                <span className="d-flex flex-column border-end pe-5 ps-5">
                                    {time} Mins
                                    <span className="text-white text-muted">
                                        Delivery Time
                                    </span></span>
                                <span className="d-flex flex-column ps-5">
                                    ₹{cost}
                                    <span className="text-white text-muted">
                                        Cost for two
                                    </span></span>
                            </div>
                        </div>
                        <div className="col text-white">
                            <div >
                                <div style={{ background: "#171A19", marginTop: "-10px", marginLeft: "-5px" }} className="text-uppercase fs-5 position-absolute top-10 pe-3 pb-3 end-30">Offer</div>
                                <div className="border p-5">
                                    <div className="mb-2 " style={{ fontSize: "13px" }}>
                                        <div >20% off up to ₹100 | Use RUPAY100 Above ₹129</div>
                                    </div>
                                    <div style={{ fontSize: "13px" }}>
                                        <div >15% off upto ₹300 | Use CITIFOODIE Above ₹1000</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="container mt-5 pt-5" style={{ marginLeft: "30%" }}>
                <div className=" fs-2"> Recommended</div>
                <span className="text-muted">{data.length} items</span>
                {data.map(obj => makeComponet(obj))}
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
        </>
    );
}
