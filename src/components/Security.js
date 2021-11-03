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
                <div className="row g-4 px-5 py-4 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 ">
                    <div className="feature col">
                        <div className="feature-icon col-sm-1">
                            <img  class="rounded mx-auto d-block pb-4" src={secLogo1}/>
                        </div>
                        <h2 className="sec-subtitle pb-2">Ease of Use</h2>
                        <p className="sec-text">Logical and legible operation design makes it easy to get started. The intuitive UI enables friendly user experience. Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon col-sm-1">
                            <img  class="rounded mx-auto d-block pb-4" src={secLogo2}/>
                        </div>
                        <h2 className="sec-subtitle pb-2">Security</h2>
                        <p className="sec-text">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words. Paragraph of text beneath the heading to explain the heading.</p>
                    </div>
                </div>
                <div className="row g-4 px-5 pt-3 row-cols-sm-1 row-cols-md-1 row-cols-lg-2">
                    <div className="feature col">
                        <div className="feature-icon col-sm-1">
                            <img  class="rounded mx-auto d-block pb-4" src={secLogo3}/>
                        </div>
                        <h2 className="sec-subtitle pb-2">Inclusiveness</h2>
                        <p className="sec-text">Integration of diversified Dapps in various use cases gets you closer to the blockchain world. Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon col-sm-1">
                            <img  class="rounded mx-auto d-block pb-4" src={secLogo4}/>
                        </div>
                        <h2 className="sec-subtitle pb-2">Reliable Access to Assets</h2>
                        <p className="sec-text"> Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words. Paragraph of text beneath the heading to explain the heading.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
