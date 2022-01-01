import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import Navbar from '../components/Navbar';
import './CharityForm.css'
import cardImage from '../components/sample/india_flood.jpeg'
import charityDefaultImage from '../components/sample/flood.jpg'
import { initializeApp } from "firebase/app";
import firebaseConfig from "../config/firebaseConfig";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Web3 from 'web3';
import Donations from '../contracts/Donations.json';
import Loading from '../components/Loading';

export default function CharityForm(props) {

    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])

    const firebaseApp = initializeApp(firebaseConfig);
    const firebaseStorage = getStorage(firebaseApp);

    const history = useHistory();

    const event = props.location.state.button_name
    const info = props.location.state.info

    const [credentialCharity, setCredentialCharity] = useState({
        charityName: info.title || "",
        walletAddress: info.walletAddress || "",
        description: info.description || "",
        previousWork: info.previousWork || "",
        cause: info.cause || "",
        goal: info.goal || 0,
        city: info.city || "",
        state: info.state || "",
    })

    const [checkbox, setCheckbox] = useState(info.isVerified || false)

    //cover-image
    const [img, setImg] = useState(cardImage)
    const [coverImageUpload, setCoverImageUpload] = useState(false)

    //charity images for carousel
    const [charityImages, setCharityImages] = useState([charityDefaultImage])
    const [charityImgsUpload, setCharityImgsUpload] = useState(false)

    const [submitPressed, setSubmitPressed] = useState(false)

    const [uploadingCoverImage, setUploadingCoverImage] = useState(false)
    const [progressCoverImage, setProgressCoverImage] = useState(0)

    const [uploadingCharityImages, setUploadingCharityImages] = useState(false)
    const [progressCharityImages, setProgressCharityImages] = useState(0)

    const [cause, setCause] = useState(credentialCharity.cause)
    const [stateField, setStateField] = useState(credentialCharity.state)

    const coverImageHandler = (e) => {
        try {
            let file = e.target.files[0];
            setImg(file);
            setCoverImageUpload(true)
        } catch (error) {
            console.error(error.message)
        }
    }

    const imagesHandler = (e) => {
        try {
            let length = e.target.files.length
            let imageArray = []
            for (let i = 0; i < length; i++) {
                let file = e.target.files[i]
                imageArray.push(file)
            }
            setCharityImages(imageArray)
            setCharityImgsUpload(true)
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        loadBlockChain();
    }, [])

    useEffect(() => {
        // To reflect changes in the state of coverImageUpload and charityImgsUpload
        console.log("update cover image:" + coverImageUpload)
        console.log("update carousel images: " + charityImgsUpload)
    }, [coverImageUpload, charityImgsUpload])

    const isValidPublicKey = (key) => {
        const validKeys = [
            // Index 10 to 45 from Ganache with mnemonic - 'animal scissors detect fatigue congress jacket foil benefit write stamp film twelve'
            '0x9079191937192eb14773b802Cecc9AE2fcFe45Bc',
            '0xc13528426E856ed885502f0e924Ac482BCBe554A',
            '0xA7AE8BcC61C991bafd94b96C4Dd0C7f67F8eE63D',
            '0x9826608A8c3ac3A3671EbD199adbaC0E1d13A5a5',
            '0x439239813a30cDb3993553B7bc3d6dD5C1FBC8aA',
            '0x9985fFb35A8D8866cA6b6f144206b246c7A8E974',
            '0xaccD6279340391a90AE0BCE4b4eF693EE2BBaee7',
            '0x3c74f1C3124cfc0f7a1F1e6EBCE448fC3cA5BCbf',
            '0x171c76bCA92fdEF46BBCf4bd78f771a140B30dF9',
            '0x0C5B87D4C9B7350B43A53d24EfF76D5B07ddbBd1',
            '0x4342CD993dd61083860BFa2f24730E3F99057D99',
            '0x1792AC3dE8E58a812c7Cd41E100CdBD15A2FF8EE',
            '0xCC57249c16cb762ce2A027a8D7fA22902E9669F7',
            '0x0B32d9Cc761aEBFc6D0584841D919Bb2C41977f9',
            '0xc073AdD167273486BeC6653E9427fA59069E97d6',
            '0x7038dB1848bB819807B3caf3Aa18310D4d5EdA87',
            '0xe5Af0CaF0f71ee9836686Bd01752a449711C22aE',
            '0xEc2f1C15cb0c9F090EB70A30FA4ea09300176f84',
            '0xAA2a44263da0B8d86f17BD6Ee7a4B4e6309cd7d6',
            '0xeD93124137CbA0F58D445FABBd15b1BaB2DB53e9',
            '0x126adeD5184E7b548BaF52DAdD55eaFEcfbCe1c6',
            '0x589B175A9F26a5189cfDE3CDB68832893dF7ECA5',
            '0x9bf9971EF56050c69c59c3897725116d33B8DAC7',
            '0x293d3574ec402FdAd1E4972a92a5890557dA3F81',
            '0xA3950ba25aC19B476CCf1aD8212Cd54701f3bc14',
            '0x01D4bf7a4836C9dd7983b880ee006dC3175b4582',
            '0x06B678725fcCC7Bb445eC85B4Cd38FA0e6322A6C',
            '0x4ceCcACcEFb3e9417fDfE7776cE732e7440EDE49',
            '0xD828e6DB68EF3684Cb053F40c08277e01c618E58',
            '0xd43f453840A3C9dBA02D0D8e7aAf44946628E3AE',
            '0x524B00a64f117F3412Ad6190F166EeA6B67ae0b1',
            '0xa42F07261d151EB6a4E6901FA3ff1E15b17683fc',
            '0xf9c8265E491Ea467a0bB61C9714eD94B913ac6Dc',
            '0x23Df977C27acf84D814de15CefD9a66db9EEec5e',
            '0x9D907F0d21CBd7F9d12284085b8383943B0dd87d',
            '0x1CeDa3808e35027c7b68b804F0551E488D3e7025'
        ]

        if(validKeys.includes(key)) {
            return true
        } else {
            return false
        }
    }

    const onChangeCharity = async (e) => {
        setCredentialCharity({
            ...credentialCharity, [e.target.name]: e.target.value
        })
    }

    const onSubmitCharity = async (e) => {
        e.preventDefault();
        try {
            setSubmitPressed(true)
            if (event === "Add New") {
                const url = "http://localhost:5000/api/charity/createcharity"

                if(isValidPublicKey(credentialCharity.walletAddress)) {
                    //eslint-disable-next-line
                    const response = await fetch(url,
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                charityName: credentialCharity.charityName,
                                walletAddress: credentialCharity.walletAddress,
                                description: credentialCharity.description,
                                previousWork: credentialCharity.previousWork,
                                cause: cause,
                                goal: credentialCharity.goal,
                                city: credentialCharity.city,
                                state: stateField,
                                isVerified: checkbox
                            })
                        }
                    );
                    if(!checkbox) {
                        console.log(contract)
                        contract.methods.createCharity(credentialCharity.charityName).send({from: account})
                    }
                }
                else {
                    window.scrollTo({ top: 0 })
                }
            }
            else if (event === "update") {
                console.log(credentialCharity)
                const url = "http://localhost:5000/api/charity/updatecharity/" + info.id;
                //eslint-disable-next-line
                const response = await fetch(url,
                    {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            charityName: credentialCharity.charityName,
                            description: credentialCharity.description,
                            previousWork: credentialCharity.previousWork,
                            cause: credentialCharity.cause,
                            goal: credentialCharity.goal,
                            city: credentialCharity.city,
                            state: credentialCharity.state,
                        })
                    }
                );
            }

            if (coverImageUpload) {
                let coverImgRef = ref(firebaseStorage, `charitycover/${credentialCharity.charityName}`);
                const uploadTask = uploadBytesResumable(coverImgRef, img)
                // Register three observers:
                // 1. 'state_changed' observer, called any time the state changes
                // 2. Error observer, called on failure
                // 3. Completion observer, called on successful completion
                
                uploadTask.on('state_changed', 
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    // console.log('Charity cover image upload is ' + progress + '% done');
                    setUploadingCoverImage(true)
                    setProgressCoverImage(progress)

                    switch (snapshot.state) {
                    case 'paused':
                        console.log('Charity cover image upload is paused');
                        break;
                    case 'running':
                        console.log('Charity cover image upload is running');
                        break;
                    }
                }, 
                (error) => {
                    console.log('Error while uploading cover-image: ', error);
                }, 
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('Cover image available at', downloadURL);
                    });
                    setUploadingCoverImage(false)
                });
            }

            if (charityImgsUpload) {
                for (let i = 0; i < charityImages.length; i++) {
                    let charityImgsRef = ref(firebaseStorage, `charityimages/${credentialCharity.charityName}/${i}`);

                    const uploadTask = uploadBytesResumable(charityImgsRef, charityImages[i])
                    // Register three observers:
                    // 1. 'state_changed' observer, called any time the state changes
                    // 2. Error observer, called on failure
                    // 3. Completion observer, called on successful completion
                    
                    uploadTask.on('state_changed', 
                    (snapshot) => {
                        // Observe state change events such as progress, pause, and resume
                        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded

                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Charity image ' + i + ' upload is ' + progress + '% done');

                        setUploadingCharityImages(true)
                        setProgressCharityImages(progress)
                        
                        switch (snapshot.state) {
                        case 'paused':
                            console.log('Charity image ' + i + ' upload is paused');
                            break;
                        case 'running':
                            console.log('Charity image ' + i + ' upload is running');
                            break;
                        }
                    }, 
                    (error) => {
                        console.log('Error while uploading charity image ' + i + ': ', error);
                    }, 
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            console.log('image ' + i + ' is available at', downloadURL);
                            setUploadingCharityImages(false)
                        });
                    });
                }
            }
            if(!coverImageUpload && !charityImgsUpload && isValidPublicKey(credentialCharity.walletAddress)) {
                history.go(-1)
            }
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        if(submitPressed && progressCoverImage ===
             100 && coverImageUpload && !charityImgsUpload) {
            history.go(-2)
        }
        else if(submitPressed && !coverImageUpload && charityImgsUpload && !uploadingCharityImages) {
            history.go(-2)
        }
        else if(submitPressed && coverImageUpload && charityImgsUpload) {
            if(progressCoverImage === 100 && !uploadingCharityImages) {
                history.go(-2)
            }
        }
    }, [progressCoverImage, uploadingCharityImages])

    const causeHandler = (e) => {
        setCause(e.target.value)
    }

    const stateHandler = (e) => {
        setStateField(e.target.value)
        console.log(e)
    }

    // Blockchain code

    const [contract, setContract] = useState(null);
    const [account, setAccount] = useState("");

    let web3;
    async function loadBlockChain() {
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
    }

    const checkboxHandler = () => { 
        setCheckbox(!checkbox)
    }

    return (
        <>
            {
                (uploadingCoverImage || uploadingCharityImages) && 
                <Loading 
                    progressCoverImage={progressCoverImage}
                    uploadingCoverImage={uploadingCoverImage}
                    uploadingCharityImages={uploadingCharityImages}
                    progressCharityImages={progressCharityImages}
                />
            }

            <Navbar />

            {
                (!isValidPublicKey(credentialCharity.walletAddress) && submitPressed) && 
                <div className='alert-pub-key-container'>
                    <div className="alert alert-danger alert-dismissible fade show alert-public-key" role="alert">
                        Public key: '<strong>{credentialCharity.walletAddress}</strong>' is not valid!
                    </div>
                </div>
                
            }

            <div className={uploadingCoverImage ? "cf-container charity-form loading-blur" : "cf-container charity-form"}>
                <div className="cf-container_det">
                    <div className="cf-title">Charity Form</div>
                    <div className="cf-content">
                        <form onSubmit={onSubmitCharity} onChange={onChangeCharity}>
                            <div className="user-details">
                                <div className="input-box" style={{ width: "100%" }}>
                                    <span className="details">Charity Name</span>
                                    <input type="text" name="charityName" placeholder="Enter Charity Name" defaultValue={info.title || ""} required />
                                </div>
                                {/* <div className="input-box" style={{width:"100%"}}>
                                    <span className="details">Cause</span>
                                    <input type="text" name="cause" placeholder="Enter Cause" defaultValue={info.cause || ""} required />
                                </div> */}
                                <div className="input-box" style={{ width: "100%" }}>
                                    <span className="details">Cause</span>
                                    <div className="select">
                                        <select className="form-select select-box select-wrapper" name="cause" defaultValue={cause || "Flood"} onChange={causeHandler} required>
                                            <option value="Flood">Flood</option>
                                            <option value="Earthquake">Earthquake</option>
                                            <option value="Cyclon">Cyclon</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="input-box" style={{ width: "100%" }}>
                                    <span className="details">Public key</span>
                                    <input type="text" name="walletAddress" placeholder="Enter Public key for charity's Ethereum wallet" defaultValue={info.walletAddress || ""} required />
                                </div>
                                <div className="input-box" style={{ width: "100%" }}>
                                    <span className="details">Description</span>
                                    <textarea type="text" name="description" rows="3" placeholder="Enter description" defaultValue={info.description || ""} required style={{ fontSize: "13px" }}></textarea>
                                </div>
                                <div className="input-box" style={{ width: "100%" }}>
                                    <span className="details">Notable Work</span>
                                    <textarea type="text" name="previousWork" rows="3" placeholder="Enter Notable Work" defaultValue={info.previousWork || ""} style={{ fontSize: "13px" }}></textarea>
                                </div>
                                <div className="input-box">
                                    <span className="details">City</span>
                                    <input type="text" name="city" placeholder="Enter City" defaultValue={info.city || ""} required />
                                </div>
                                {/* <div className="input-box">
                                    <span className="details">State</span>
                                    <input type="text" name="state" placeholder="Enter State" defaultValue={info.state || ""} required />
                                </div> */}
                                <div className="input-box">
                                    <span className="details">State</span>
                                    <div>
                                        <select className="form-select select-box" name="state" defaultValue={stateField || ""} onChange={stateHandler} required>
                                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                            <option value="Assam">Assam</option>
                                            <option value="Bihar">Bihar</option>
                                            <option value="Chhattisgarh">Chhattisgarh</option>
                                            <option value="Goa">Goa</option>
                                            <option value="Gujarat">Gujarat</option>
                                            <option value="Haryana">Haryana</option>
                                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                            <option value="Jharkhand">Jharkhand</option>
                                            <option value="Karnataka">Karnataka</option>
                                            <option value="Kerala">Kerala</option>
                                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                                            <option value="Maharashtra">Maharashtra</option>
                                            <option value="Manipur">Manipur</option>
                                            <option value="Meghalaya">Meghalaya</option>
                                            <option value="Mizoram">Mizoram</option>
                                            <option value="Nagaland">Nagaland</option>
                                            <option value="Odisha">Odisha</option>
                                            <option value="Punjab">Punjab</option>
                                            <option value="Rajasthan">Rajasthan</option>
                                            <option value="Sikkim">Sikkim</option>
                                            <option value="Tamil Nadu">Tamil Nadu</option>
                                            <option value="Telangana">Telangana</option>
                                            <option value="Tripura">Tripura</option>
                                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                                            <option value="Uttarakhand">Uttarakhand</option>
                                            <option value="West Bengal">West Bengal</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="input-box">
                                    <span className="details">Goal</span>
                                    <input type="number" name="goal" placeholder="Enter goal amount" defaultValue={info.goal || ""} required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Verified</span>
                                    <div className="verified-checkbox-container">
                                        <span className="verified-box-label">Is the charity verified ?</span>
                                        <input className="verified-box-box" type="checkbox" name="isVerified" checked={checkbox} onChange={checkboxHandler} />
                                    </div>
                                </div>
                                <div className="input-box">
                                    <span className="details">Select Cover Image</span>
                                    <label htmlFor="cover-img-upload" className="custom-file-upload">
                                        <i className="fa fa-cloud-upload"></i>  Upload Cover Image
                                    </label>
                                    <input id="cover-img-upload" accept="image/*" name="imageURL" type="file" onChange={coverImageHandler} style={{ display: "none" }} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Select Charity Images</span>
                                    <label htmlFor="img-upload" className="custom-file-upload">
                                        <i className="fa fa-cloud-upload"></i>  Upload Charity Images
                                    </label>
                                    <input id="img-upload" accept="image/*" name="imageURL" type="file" onChange={imagesHandler} multiple="multiple" style={{display:"none"}}/>
                                </div>
                            </div>
                            <div className="button">
                                <input type="submit" defaultValue={props.button_name}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}