import React from 'react'
import secLogo1 from "./icons/secLogo1.png"
import secLogo2 from "./icons/secLogo2.png"
import secLogo3 from "./icons/secLogo3.png"
import secLogo4 from "./icons/secLogo4.png"

export default function Security() {
    return (
        <div>
            <div className="container pt-5 pb-3" id="featured-3">
                <h3 className="sec-header pb-2 border-bottom border-info">Security {'&'} Controls</h3>
                <div className="row g-4 px-5 py-4 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 ">
                    <div className="feature">
                        <div className="feature-icon col-sm-1">
                            <img  className="rounded mx-auto d-block pb-4" src={secLogo1} alt="seclogo1" />
                        </div>
                        <h2 className="sec-subtitle pb-2">Ease of Use</h2>
                        <p className="sec-text">Logical and legible operation design makes it easy to get started. The intuitive UI enables friendly user experience. A platform dedicated towards social cause.</p>
                    </div>
                    <div className="feature">
                        <div className="feature-icon col-sm-1">
                            <img  className="rounded mx-auto d-block pb-4" src={secLogo2} alt="seclogo2" />
                        </div>
                        <h2 className="sec-subtitle pb-2">Security</h2>
                        <p className="sec-text">Based on blockchain technology, this sysyem provides a secure platform and keeps the hackers away. There is no central authority here, so the transactions are peer to peer.</p>
                    </div>
                </div>
                <div className="row g-4 px-5 pt-3 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                    <div className="feature">
                        <div className="feature-icon col-sm-1">
                            <img  className="rounded mx-auto d-block pb-4" src={secLogo3} alt="seclogo3" />
                        </div>
                        <h2 className="sec-subtitle pb-2">Inclusiveness</h2>
                        <p className="sec-text">Integration of diversified Dapps in various use cases gets you closer to the blockchain world. Blockchain technology creates a secured digital ledger for cryptocurrency transactions , and that is why it is used by many organizations worldwide.</p>
                    </div>
                    <div className="feature">
                        <div className="feature-icon col-sm-1">
                            <img  className="rounded mx-auto d-block pb-4" src={secLogo4} alt="seclogo4" />
                        </div>
                        <h2 className="sec-subtitle pb-2">Fast Transactions</h2>
                        <p className="sec-text"> A completely Decentralised system without a central authority, thereby eliminating the third party trust issues and makes the transactions faster as the money is in digital form.  </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
