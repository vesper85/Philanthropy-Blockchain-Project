import React, { useEffect, useState, useRef, useContext } from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import firebaseConfig from "../config/firebaseConfig";
import { getStorage, ref, deleteObject, listAll } from "firebase/storage";
import Web3 from 'web3';
import Donations from '../contracts/Donations.json';
import userContext from '../context/User/userContext';
import DonationHistoryItem from './DonationHistoryItem';
//import { useHistory } from 'react-router'

export default function HeroElement(props) {
    // eslint-disable-next-line
    const {id, title, cause, description, previousWork, goal, fundsRaised, walletAddress, isVerified, donationHistory} = props
    const history = useHistory()
    const firebaseApp = initializeApp(firebaseConfig)
    const firebaseStorage = getStorage(firebaseApp)

    const donationModalToggle = useRef();
    const receiptModalToggle = useRef();
    const logOutModalToggle = useRef();
    const donationHistoryModalToggle = useRef();
    const [donAmount, setdonAmount] = useState(0);
    const context = useContext(userContext);
    const { logOutUser, getProfileInfo, userProfile } = context;
    const { firstname, lastname, username,userWallet } = userProfile

    const [stats, setStats] = useState({
        stat1: 'More than a third of the world’s malnourished children live in India',
        stat2: 'More than 2/3rds deaths of under-fives attributed to malnutrition',
        stat3: '95.1M children deprived of midday meals at school during COVID-19'
    })

    const [progress, setProgress] = useState(0)
    const [donationHistoryState, setDonationHistoryState] = useState([])

    const deleteCharity = async() => {
        try {
            const url1 = "http://localhost:5000/api/charity/deletecharity/" + id;
            //eslint-disable-next-line
            const response1 = await fetch(url1,
                {
                    method: 'DELETE', 
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            const url2 = "http://localhost:5000/api/charitydonations/deletedonationhistorybycharity"
            //eslint-disable-next-line
            const response2 = await fetch(url2,
                {
                    method: 'DELETE', 
                    headers: {
                        'Content-Type': 'application/json',
                        'charityName': title
                    }
                }
            );

            //Delete cover image from firebase storage
            const delRef = ref(firebaseStorage, `charitycover/${title}`)
            deleteObject(delRef).then(() => {
                console.log("cover image deleted from firebase")
            }).catch((error) => {
                console.error(error)
            })

            //Delete carousel images from firebase storage
            const listRef = ref(firebaseStorage, `charityimages/${title}`);
            listAll(listRef).then((res) => {
                res.items.map((imageRef) => deleteObject(imageRef))
            }).catch((error) => {
                console.error(error)
            });

            history.go(-1)
        } catch (error) {
            console.error(error.message)
        }
    }

    const getStats = async() => {
        try {
            const url = "http://localhost:5000/api/stats/fetchstats"
            const response = await fetch(url, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                    'accept':'application/json',
                    'cause': `${cause}`
                }
            });
            const data = await response.json();
            setStats(data[0])
            // console.log(data[0])
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getStats()
    }, [])

    useEffect(() => {
        let goalProgress = ((fundsRaised / goal) * 100).toFixed(2)
        setProgress(goalProgress)
    }, [fundsRaised])

    const updateFunds = async(amount) => {
        const url = "http://localhost:5000/api/charity/updatecharity/" + id;
        //console.log(parseFloat(amount), parseFloat(amount) + fundsRaised)
        //eslint-disable-next-line
        const response = await fetch(url,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fundsRaised: fundsRaised + parseFloat(amount)
                })
            }
        );
    }

    const updateDonationLogs = async (amount) => {
        const url = "http://localhost:5000/api/charitydonations/adddonations/";
        const now = new Date()
        //eslint-disable-next-line
        const response = await fetch(url,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'charityName': title,
                    'donorName': firstname + ' ' + lastname,
                    'username': username,
                    'amount': amount,
                    'timestamp': now
                })
            }
        );
    }

    const fetchDonationHistory = async () => {
        const url = "http://localhost:5000/api/charitydonations/fetchdonationsbycharity"
        const response = await fetch(url,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'accept':'application/json',
                    'charityName': title
                }
            }
        );
        const data = await response.json()
        // console.log(data)
        setDonationHistoryState(data)
    }

    const handleDonationHistory = () => {
        fetchDonationHistory()
        donationHistoryModalToggle.current.click();
    }

    // Blockchain Code
    const [account, setAccount] = useState("");
    const [contract, setContract] = useState(null);
    let web3;
    async function loadBlockChain() {
        try {
            if(window.ethereum) {
                console.log('metamask exists')
                web3 = new Web3(window.ethereum);
                await window.ethereum.enable();
            }
            else if(window.web3) {
                web3 = new Web3(Web3.currentProvider || "http://localhost:7545");
            }
            
            const networkId = await web3.eth.net.getId()
            const networkData = Donations.networks[networkId]
            console.log("networkId: ", networkId, "networkData :", networkData)
            
            if(networkData) {
                const donations = new web3.eth.Contract(Donations.abi, networkData.address)
                setContract(donations)
            } else {
                window.alert('Donations contract not deployed to detected network.')
            }
            
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);
            //console.log("Metamask account Address :", accounts[0]);
        
        } catch(err) {
            console.log('Please check if you have started your local blockchain network using Ganache\n', err)
        }
    }

    const saveReceipt = async (receipt) =>{
        try {
            const url = "http://localhost:5000/api/receipt/uploadreceipt" 
            let response = await fetch(url,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                       ...receipt
                    })
                }
             )
             console.log(receipt)
        } catch (error) {
            console.error(error.message)
        }
    }

    const handleDonation = () => {
        if(donAmount >10 || donAmount < 0)
        {
            console.log('amount error!!')
            return;
        }
        makeDonation(title, donAmount)
    }
    
    const makeDonation = (id, amount) => {
        console.log('isVerified: ', isVerified)
        if(isVerified == true) {
            let web3js = new Web3(window.web3.currentProvider); 
            web3js.eth.sendTransaction({
                from: account,
                to: walletAddress,
                value: Web3.utils.toWei(amount, 'Ether')
            })
            .then(function(receipt){
                //console.log(receipt)
                saveReceipt(receipt);
                receiptModalToggle.current.click();
                updateFunds(parseFloat(amount))
                updateDonationLogs(parseFloat(amount))
                // window.location.href = "http://localhost:3000/zone"
            });
        } else {
            contract.methods.updateAmount(id).send({from:account, value: Web3.utils.toWei(amount, 'Ether'), gas: 1000000})
            .once('receipt', (receipt) => {
                //console.log(receipt)
                saveReceipt(receipt);
                receiptModalToggle.current.click();
                getBalance()
                updateFunds(parseFloat(amount))
                updateDonationLogs(parseFloat(amount))
               
                // window.location.href = "http://localhost:3000/zone"
            })
        }
    }

    const handleTransfer = () => {
        transferAmount()
    }

    const transferAmount = () => {
        contract.methods.transferAmount(walletAddress, title).send({from: account})
        .once('receipt', (receipt) => {
            console.log(receipt)
            // window.location.href = "http://localhost:3000/zone"
        })
    }

    const handleRevert = () => {
        revertAmount()
    }

    const revertAmount = () => {
        contract.methods.revertAmount(title).send({from: account})
        .once('receipt', (receipt) => {
            console.log(receipt)
        })
    }

    const getBalance = () => {
        const bal = contract.methods.getBalance(title).call()
        bal.then((res) => {
            console.log('Contract Balance: ', res)
        })
    }

    const getPendingDonations = () => {
        // Remove these entries from database before doing Revert
        const pending = contract.methods.getPendingDonations(title).call()
        pending.then((res) => {
            console.log('Pending donations from blockchain: ', res)
        })
    }

    //BLockChain code END ------------


    const openModal = () => {
        console.log('modal open');
        donationModalToggle.current.click();
    }

    const rangeOnChange = (e)=>{
        setdonAmount(e.target.value)
        //console.log(e.target.value)
    }
    const handleInputOnChange = (e) =>{
            setdonAmount(e.target.value)
    }

    const generateReceipt = async()=>{
        
        try {
            const url = "http://localhost:5000/api/receipt/getlatestreceipt"
            let response = await fetch(url,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'accept':'application/json',
                        'userWallet':userWallet
                    }
                }
            )
            let data = await response.json()
            //console.log(data,"real data")
            //create a file and download it
            var element = document.createElement('a');
            const test = "this is a receipt"
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(data)));
            element.setAttribute('download', "receipt.txt");
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            //document.body.removeChild(element);   


        } catch (error) {
                console.error(error.message)
            }
           
        history.push('/zone')
    }
    const cancleReceipt = ()=>{
        history.push('/zone')
    }


    useEffect(() => {
        loadBlockChain();
        getProfileInfo();
    }, [])

    
//    //Implimentation of account change when metamask public address changes
//   const [userAccountChangeModal, setuserAccountChangeModal] = useState(false)
//    window.ethereum.on('accountsChanged', function (accountsChange) { 
//        //setAccount(accountsChange[0]);
//        if(userAccountChangeModal)
//        {
//            logOutModalToggle.current.click();
//            setuserAccountChangeModal(false);

//        }
//        console.log("Metamask account Address :", accountsChange[0]);
//        //open modal
//        console.log('userwallet:', userProfile.userWallet);
//        if(account !== userProfile.userWallet) {
//            //logOutUser();
//            logOutModalToggle.current.click();
//            setuserAccountChangeModal(true);
//        }
//    });


    
    
    return (
        // section-1 charity info
        <div className="container hero-container">
    
            {/* Donatin button hidden */}
            <button type="button" ref={donationModalToggle} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></button>

            {/* Donation modal */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" style={{borderRadius:"0px", border:"none"}}>
                        <div className="modal-header paymentModalHeader">
                            <h5 className="modal-title " id="staticBackdropLabel">Payment</h5>
                            <button type="button" style={{color:"white"}} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div><h6>From:</h6>{ firstname + ' ' + lastname }</div>
                            <div><h6>To:</h6> { title } </div>
                            <div className="mt-4"><h6>Value  <input className='inputInvalid' type="number"  max="10" min="0" value={donAmount} onChange={handleInputOnChange}  ></input> </h6>  </div>
                            <input type="range" className="form-range" min="0" max="10" step="0.0001" id="customRange1" value={donAmount} onChange={rangeOnChange} ></input>
                        </div>
                        <div className="modal-footer">
                            <button type="button" style={{border:"none",backgroundColor:"transparent", margin:"0px 20px", lineHeight:'1.5'}} data-bs-dismiss="modal">Reject</button>
                            <button type="submit"  onClick={handleDonation} className="btn btn-primary donateBtn">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* RECEIPT MODAL */}
            <button type="button" ref={receiptModalToggle} data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" className="btn btn-primary d-none"></button>
            
            <div className="modal fade receiptModal" id="exampleModalToggle2"  data-bs-backdrop="static" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" style={{borderRadius:"0px",border:"none"}} >
                        <div className="modal-header receiptModalTickContainer" style={{borderRadius:"inherit"}}>
                            <i className="far fa-check-circle receiptModalTick"></i>
                            {/*<button type="button" className="btn-close"  data-bs-dismiss="modal" aria-label="Close"></button>*/}
                        </div>
                        <div className="modal-body text-center">
                            <h5 className='fs-3'>Payment Successful</h5>
                        </div>
                        <div className="modal-footer">
                            <button  style={{border:"none",backgroundColor:"transparent", margin:"0px 20px", lineHeight:'1.5'}} data-bs-dismiss="modal" onClick={cancleReceipt} >Cancel</button>
                            <button className="btn btn-primary generateReceipt" data-bs-dismiss="modal" onClick={generateReceipt}>Generate receipt</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logout Alert */}
            {/*<!-- Button trigger modal -->*/}
            <button type="button" ref={logOutModalToggle} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            {/*<!-- Modal -->*/}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">cancle</button>
                            <button type="button" className="btn btn-primary">Logout</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Donation history modal button hidden */}
            <button type="button" ref={donationHistoryModalToggle} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#donationHistory"></button>

            {/* Donation History Modal */}
            <div className="modal fade donation-history-container" id="donationHistory" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="donationHistoryLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered donation-history-modal-dialog">
                    <div className="modal-content" style={{borderRadius:"0px", border:"none"}}>
                        <div className="modal-header donation-history-modal-header">
                            <h5 className="modal-title donation-history-modal-title" id="donationHistoryLabel">Donation History</h5>
                            <button type="button" style={{color:"white"}} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body donation-history-modal-body">
                            <div className="donation-history-separator"></div>
                            {
                                donationHistoryState.map((entry) => (
                                    <DonationHistoryItem 
                                        key={entry._id}
                                        name={entry.donorName}
                                        amount={entry.amount}
                                        time={entry.timestamp}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* section-1 Description */}
            <div className="row my-5 p-2">
                <div className="col-lg-7 col-md-7">
                    <h2 className="featurette-heading">{title}</h2>
                    <p className="lead hero-ele-charity-description">{description}</p>
                </div>
                <div className="col-lg-5 col-md-5">
                    <img className="mx-auto hero-img" src="https://source.unsplash.com/420x380/?charity"/>
                </div>
            </div>
            
            {/* section-2 Stats */}
            <div className="container hero-container" >
                <div className="row p-4 align-items-center border shadow-lg">
                    <div className="col-lg-7 col-md-7 p-3 p-lg-5">
                        <h2 className="lh-1">Some Statistics</h2>
                        <p className="lead hero-text">Here are some statistics related to {cause} in India.</p>
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="details-container">
                                    <div className="details-title"><img  className="rounded mx-auto d-block pb-1" src="https://give-marketplace-dev.s3.ap-south-1.amazonaws.com/static/images/home/homev2/Mission+10+Million+Meals/Homepage%2Bicons_A.png" alt="" height="100px" width="100px" /></div>
                                    <p className="details-text">{(stats && stats.stat1) || 'More than a third of the world’s malnourished children live in India'}</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="details-container">
                                    <div className="details-title"><img  className="rounded mx-auto d-block pb-1" src="https://give-marketplace-dev.s3.ap-south-1.amazonaws.com/static/images/home/homev2/Mission+10+Million+Meals/Homepage%2Bicons_B.png" alt="" height="100px" width="100px"/></div>
                                    <p className="details-text">{stats && stats.stat2 || 'More than 2/3rds deaths of under-fives attributed to malnutrition'}</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="details-container">
                                    <div className="details-title"><img  className="rounded mx-auto d-block pb-1" src="https://give-marketplace-dev.s3.ap-south-1.amazonaws.com/static/images/home/homev2/Mission+10+Million+Meals/impactmidday+mea.png" alt="" height="100px" width="100px"/></div>
                                    <p className="details-text">{stats && stats.stat3 || '95.1M children deprived of midday meals at school during COVID-19'}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h5 className='mt-3'>Progress</h5>
                            <p className="card-text mt-1"><small className="text-muted">ETH {fundsRaised} raised of ETH {goal} goal</small></p>
                            <div className="progress my-1">
                                <div className="progress-bar" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" style={{width:`${progress+'%'}`}}>{progress}%</div>
                            </div>
                        </div>

                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 donate-btns">
                            <button type="button" disabled={((fundsRaised / goal) * 100).toFixed(2) >= 100} onClick={openModal} className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Donate</button>
                            <button type="button" onClick={handleTransfer} className="btn btn-success btn-lg px-4 me-md-2 fw-bold">Transfer</button>
                            <button type="button" onClick={handleRevert} className="btn btn-danger btn-lg px-4 me-md-2 fw-bold">Revert</button>
                        </div>

                        <div className="donation-history mt-4 mx-1" onClick={handleDonationHistory}>
                            See donations history
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 shadow-lg p-2">
                        <img className="image-fluid hero-img" src="https://source.unsplash.com/420x380/?technology" alt="" />
                    </div>
                </div>
            </div>

            {/* section-3 more charity info */}
            <div className="container hero-container">
                <div className="row my-5">
                    <div className="col-lg-7 col-md-7 order-2">
                        <h2 className="featurette-heading">Some Notable Work </h2>
                        <p className="lead">{previousWork}</p>
                    </div>
                    <div className="col-lg-5 col-md-5 order-1">
                        <img  className="hero-img" src="https://source.unsplash.com/420x380/?charity,help" />
                    </div>
                </div>
            </div>

            {/* Admin Buttons */}
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 charity-details-admin-buttons">
                <Link to={{pathname:"/charityform", state:{button_name:"update", info:props}}} type="button" className="btn btn-success btn-lg px-4 me-md-2 fw-bold">Update</Link>
                <button onClick={deleteCharity} type="button" className="btn btn-danger btn-lg px-4 me-md-2 fw-bold">Delete</button>
            </div>
        </div>
    )
}
