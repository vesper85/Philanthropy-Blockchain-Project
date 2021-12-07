import React from 'react'
//import photo from "./icons/photo.png"
import avatar from "./icons/avatar.png"
import avatar_rahul from "./icons/avatar_rahul.png";
import avatar_saurabh from "./icons/avatar_saurabh.png";
import avatar_gitesh from "./icons/avatar_gitesh.png";

export default function TeamInfo() {

   
   
    return (
        <section className="team-boxed">
        <div className="container">
            <div className="intro">
                <h2 className="text-center">Team </h2>
                <p className="text-center">our team and some text</p>
            </div>
            <div className="row people">
                <div className="col-md-6 col-lg-3 item ">
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="50" className="box teamBoxShadow"><img className="rounded-circle" src={avatar_saurabh} alt="saurabh" />
                        <h3 className="name">Saurabh Parate</h3>
                        <p className="title">student</p>
                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                        <div className="social"><a href="/"><i className="fa fa-facebook-official"></i></a><a href="/"><i className="fa fa-twitter"></i></a><a href="/"><i className="fa fa-instagram"></i></a></div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 item" >
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="50" className="box teamBoxShadow"><img className="rounded-circle" src={avatar} alt="parikshit D." />
                        <h3 className="name">Parikshit D.</h3>
                        <p className="title">student</p>
                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                        <div className="social"><a href="/"><i className="fa fa-facebook-official"></i></a><a href="/"><i className="fa fa-twitter"></i></a><a href="/"><i className="fa fa-instagram"></i></a></div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 item" >
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="50" className="box teamBoxShadow"><img className="rounded-circle" src={avatar_gitesh} alt="gitesh"  />
                        <h3 className="name">Gitesh Patil</h3>
                        <p className="title">student</p>
                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                        <div className="social"><a href="/"><i className="fa fa-facebook-official"></i></a><a href="/"><i className="fa fa-twitter"></i></a><a href="/"><i className="fa fa-instagram"></i></a></div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 item" >
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="50" className="box teamBoxShadow"><img className="rounded-circle" src={avatar_rahul} alt="rahul" />
                        <h3 className="name">Rahul Sharma</h3>
                        <p className="title">student</p>
                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                        <div className="social"><a href="/"><i className="fa fa-facebook-official"></i></a><a href="/"><i className="fa fa-twitter"></i></a><a href="/"><i className="fa fa-instagram"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
