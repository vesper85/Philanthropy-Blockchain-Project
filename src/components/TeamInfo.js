import React from 'react'
//import photo from "./icons/photo.png"
import avatar from "./icons/avatar.png"
import avatar_rahul from "./icons/avatar_rahul.png";
import avatar_saurabh from "./icons/avatar_saurabh.png";
import avatar_gitesh from "./icons/avatar_gitesh.png";

export default function TeamInfo() {

    if (window.innerWidth < 768) {
        [].slice.call(document.querySelectorAll('[data-bss-disabled-mobile]')).forEach(function (elem) {
            elem.classList.remove('animated');
            elem.removeAttribute('data-bss-hover-animate');
            elem.removeAttribute('data-aos');
        });
    }
   
    return (
        <section class="team-boxed">
        <div class="container">
            <div class="intro">
                <h2 class="text-center">Team </h2>
                <p class="text-center">our team and some text</p>
            </div>
            <div class="row people">
                <div class="col-md-3 col-lg-3 item ">
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="50" class="box teamBoxShadow"><img class="rounded-circle" src={avatar_saurabh} />
                        <h3 class="name">Sarurabh Parate</h3>
                        <p class="title">student</p>
                        <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                        <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                    </div>
                </div>
                <div class="col-md-3 col-lg-3 item" >
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="50" class="box teamBoxShadow"><img class="rounded-circle" src={avatar} alt="parikshit D." />
                        <h3 class="name">Parikshit D.</h3>
                        <p class="title">student</p>
                        <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                        <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                    </div>
                </div>
                <div class="col-md-3 col-lg-3 item" >
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="50" class="box teamBoxShadow"><img class="rounded-circle" src={avatar_gitesh} />
                        <h3 class="name">Gitesh Patil</h3>
                        <p class="title">student</p>
                        <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                        <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                    </div>
                </div>
                <div class="col-md-3 col-lg-3 item" >
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="50" class="box teamBoxShadow"><img class="rounded-circle" src={avatar_rahul} />
                        <h3 class="name">Rahul Sharma</h3>
                        <p class="title">student</p>
                        <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                        <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
