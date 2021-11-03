import React from 'react'
import photo from "./icons/photo.png"

export default function TeamInfo() {
    return (
        <div>
            <div className="container mb-4 pt-5 pb-3">
            <h3 className="sec-header mb-4 pb-2 border-bottom border-info">Team Info</h3>
                <div className="row ps-5" >
                    <div className="col-lg-3 team-container">
                        <div className="team-name"><img className=" rounded-circle" src={photo}></img></div>
                        <h2 className="sec-subtitle team-name pt-3">Saurabh Parate</h2>
                        <p className="team-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut aspernatur obcaecati eligendi iusto. Ducimus praesentium esse illum ab, dolorum laboriosam iusto dicta architecto atque.</p>
                    </div>
                    <div className="col-lg-3 team-container">
                        <div className="team-name"><img className=" rounded-circle" src={photo}></img></div>
                        <h2 className="sec-subtitle team-name pt-3">Parikshit Deshmukh</h2>
                        <p className="team-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores odio at aliquam consectetur quo adipisci dignissimos, nobis vel nisi, hic ipsum, deleniti saepe? Soluta nesciunt </p>
                    </div>
                    <div className="col-lg-3 team-container">
                    <   div className="team-name"><img className=" rounded-circle" src={photo}></img></div>
                        <h2 className="sec-subtitle team-name pt-3">Gitesh Patil</h2>
                        <p className="team-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti cumque accusamus vitae, in accusantium. Ad libero, reprehenderit omnis cupiditate voluptatibus </p>
                    </div>
                    <div className="col-lg-3 team-container">
                        <div className="team-name"><img className=" rounded-circle" src={photo}></img></div>
                        <h2 className="sec-subtitle team-name pt-3">Rahul Sharma</h2>
                        <p className="team-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut aspernatur obcaecati eligendi iusto. Ducimus praesentium esse illum ab, dolorum laboriosam iusto dicta architecto atque.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
