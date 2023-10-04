import React, { useState } from "react";
import "./Prod.css"
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {FaCcVisa,FaAmazon,
    FaIdCard,FaCcMastercard,FaCcPaypal,
    FaCcStripe,FaGoogleWallet,FaCcDiscover} from 'react-icons/fa'
import {AiOutlineArrowLeft} from "react-icons/ai"

function Aces() {
    let [number, setNumber] = useState(1);
    let [prix, setPrix] = useState(2550);
    const plus = () => {
        setNumber(
            number = number + 1,
        )
        setPrix(
            prix = prix + 2550
        )
    }
    const moins = () => {
        setNumber(
            number = number - 1
        )
        setPrix(
            prix = prix - 2550
        )
        if (number<1) {
            setNumber(
                number=1
            )
            setPrix(
                prix=2550
            )
        }
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div id="body">
        <div className="container  body-2 bg-dark row">
            <div className="col-6 text-white ">
                    <img src="/pectures/pc.jpg" className=" image2" width={"400px"} />
                    <Link to='/' className="link-icons" id="link-ic"><AiOutlineArrowLeft className="icons"/></Link>
            </div>
            <div className="col-6 text-white">
                <div className="ps-5 pt-5">
                    <h3 className="gamer-titre">PC GAMER THREADRIPPER 3970X THERMALTAKE VIEW 51 TG ARGB</h3>
                    <div className="ps-3">
                        <span className="span">BOITIER</span> : THERMALTAKE VIEW 51 TG ARGB<br />
                        <span className="span">PROCESSEUR</span> : AMD RYZEN THREADRIPPER 3970X<br />
                        <span className="span">CARTE MERE</span> :  ASUS ROG ZENITH II EXTREME ALPHA<br />
                        <span className="span">CARTE GRAPHIQUE</span> : GEFORCE RTX 4090 24 Go<br />
                        <span className="span">WATERCOOLER</span> : MSI MEG CORELIQUID S360<br />
                        <span className="span">RAM</span> : 32Gb (8Gb x 4 ) 3600 Mhz DDR4<br />
                        <span className="span">STOCKAGE</span> : SSD M.2 NVMe  2TB Gen4 x4<br />
                        <span className="span">PSU</span> : Corsair HX1500i 80PLUS Platinum<br />
                        <br />
                        <span className="span">PRIX</span> : ${prix}
                    </div>
                </div>
                <div className="container pro mt-3">
                    <div className="row ms-1 mb-3">
                        <span className="span mt-2 ms-5 col-3">QUANTITY :</span>
                        <div className="col-9 QUANTITY mb-4">
                            <button onClick={moins}><span>-</span></button>
                            {number}
                            <button onClick={plus}><span>+</span></button>
                        </div>
                    </div>
                    <div className="ms-4">
                        {/* <button className="Cart" onClick={onclick} >Add to cart</button> */}
                        <Button className="Cart" variant="primary" onClick={handleShow}>
                        Add to cart
                        </Button>
                        <button className="shop" type="">Buy with <i class="bi bi-paypal"></i></button>
                        <Offcanvas show={show} onHide={handleClose} backdrop="static">
                            <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Provide further information.
                             </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                            <form className=''>
                                <input type="text" class="form-control INPUT" placeholder="Card number"/>
                                <input type="text" class="form-control INPUT" placeholder="Card holder"/>
                                   <div className='row'>
                                    <select class="form-control inp col-6">
                                     <option>MM</option>
                                     <option>January (01)</option>
                                     <option>February (02)</option>
                                     <option>March (03)</option>
                                     <option>April (04)</option>
                                     <option>May (05)</option>
                                     <option>June (06)</option>
                                     <option>July (07)</option>
                                     <option>August (08)</option>
                                     <option>September (09)</option>
                                     <option>October (10)</option>
                                     <option>November (11)</option>
                                     <option>December (12)</option>
                                     </select>
                                     <select class="form-control inp col-6">
                                     <option>YY</option>
                                     <option>2023</option>
                                     <option>2024</option>
                                     <option>2025</option>
                                     <option>2026</option>
                                     <option>2027</option>
                                     <option>2028</option>
                                     </select>
                                   </div>
                                <input type="text" class="form-control INPUT " placeholder="CCV"/>

                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">
                                    Save this information to facilitate my next purchases</label>
                            </div>
                            <button type="submit" class="shop btngg">Submit</button>
                            </form>
                            </Offcanvas.Body>
                        </Offcanvas>
                        <footer className="mt-5">
                            <div className="footer-div">
                            <FaCcVisa className='pe-2'/>
                            <FaAmazon className='pe-2'/>
                            <FaIdCard className='pe-2'/>
                            <FaCcMastercard className='pe-2'/>
                            <FaCcPaypal className='pe-2'/>
                            <FaCcStripe className='pe-2'/>
                            <FaGoogleWallet className='pe-2'/>
                            <FaCcDiscover className='pe-2'/>
                            </div>
                        <p className="para-footer">© 2023,owengame.ma Commerce électronique propulsé par Shopify</p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Aces