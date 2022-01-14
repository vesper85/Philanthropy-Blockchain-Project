import React from 'react'
//import photo from "./icons/photo.png"
import avatar from "./icons/avatar.png"
import avatar_rahul from "./icons/avartar_rahul.jpeg";
import avatar_saurabh from "./icons/Saurabh.jpg";
import avatar_gitesh from "./icons/avatar_gitesh.png";
import Mentor from "./icons/Mentor.png";

export default function TeamInfo() {



    return (
        <section className="team-boxed">
            <div className="container">
                <div className="intro">
                    <h2 className="text-center">Team </h2>
                </div>
                <div className="row people">
                    <div className="col-md-6 col-lg-3 item ">
                        <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="50" className="box teamBoxShadow"><img className="rounded-circle" src={avatar_saurabh} alt="saurabh" />
                            <h3 className="name">Saurabh Parate</h3>
                            <p className="title">student</p>
                            <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                            <div className="social"><a href="https://github.com/SaurabhParate04" target="_blank"><i className="fa fa-github"></i></a><a href="https://www.linkedin.com/in/saurabh-parate-2044921b0/" target="_blank"><i className="fa fa-linkedin"></i></a><a href="https://www.instagram.com/saurabh_parate/" target="_blank"><i className="fa fa-instagram"></i></a></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 item" >
                        <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="50" className="box teamBoxShadow"><img className="rounded-circle" src={avatar} alt="parikshit D." />
                            <h3 className="name">Parikshit D.</h3>
                            <p className="title">student</p>
                            <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                            <div className="social"><a href="https://github.com/vesper85" target="_blank"><i className="fa fa-github"></i></a><a href="
                            https://www.linkedin.com/in/parikshit-deshmukh-a717091a3/" target="_blank"><i className="fa fa-linkedin"></i></a><a href="https://www.instagram.com/da7aiii/?hl=en" target="_blank"><i className="fa fa-instagram"></i></a></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 item" >
                        <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="50" className="box teamBoxShadow"><img className="rounded-circle" src={avatar_gitesh} alt="gitesh" />
                            <h3 className="name">Gitesh Patil</h3>
                            <p className="title">student</p>
                            <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                            <div className="social"><a href="https://github.com/Gitesh2435" target="_blank"><i className="fa fa-github"></i></a><a href="https://www.linkedin.com/in/gitesh-patil-81962b212/" target="_blank"><i className="fa fa-linkedin"></i></a><a href="https://www.instagram.com/gitesh_patil_29/" target="_blank"><i className="fa fa-instagram"></i></a></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 item" >
                        <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="50" className="box teamBoxShadow"><img className="rounded-circle" src={avatar_rahul} alt="rahul" />
                            <h3 className="name">Rahul Sharma</h3>
                            <p className="title">student</p>
                            <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                            <div className="social"><a href="https://github.com/RahulSharma7780" target="_blank"><i className="fa fa-github"></i></a><a href="https://www.linkedin.com/in/rahul-sharma-320480202/" target="_blank" ><i className="fa fa-linkedin"></i></a><a href="https://www.instagram.com/_rahul_._sharma/" target="_blank"><i className="fa fa-instagram"></i></a></div>
                        </div>
                    </div>
                </div>
                <div className="intro">
                    <h2 className="text-center">Mentor </h2>
                    {/* <p className="text-center">our team and some text</p> */}
                </div>
                <div className="row people">
                    <div className="col-12 item d-flex justify-content-center">
                        <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="50" className="box teamBoxShadow"  style={{width: "25rem", maxHeight: "32rem"}}><img className="rounded-circle" src={Mentor} alt="saurabh" />
                            <h3 className="name">Swati Jadhav</h3>
                            <p className="title">Asst. Professor</p>
                            <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                            <div className="social"><a href="/" target="_blank"><i className="fa fa-github"></i></a><a href="/" target="_blank"><i className="fa fa-linkedin"></i></a><a href="/" target="_blank"><i className="fa fa-instagram"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
