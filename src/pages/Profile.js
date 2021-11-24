import React from 'react'
import Navbar from '../components/Navbar';
import './Profile.css';

export const Profile = () => {
    return (
	<>
	<Navbar/>
    <div className="main-content">
		{/* <!-- Header --> */}
		<div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style={{minHeight: "600px" , backgroundImage: "url(https://www.jattdisite.com/wp-content/uploads/2016/03/Night-Abstract-Facebook-Timeline-Profile-Cover-1.jpg)", backgroundSize: "cover", backgroundPosition: "center top"}}>

			{/* <!-- Mask --> */}
			<span className="mask bg-gradient-default opacity-8"></span>

			{/* <!-- Header container --> */}
			<div className="container-fluid d-flex align-items-center">
				<div className="row">
					<div className="col-lg-7 col-md-10">
					<h1 className="display-2 text-white">Hello Jesse</h1>
					<p className="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
					<a href="/" className="btn btn-info">Edit profile</a>
					</div>
				</div>
			</div>
		</div>

	{/* <!-- Page content --> */}
		<div className="container-fluid mt--7">
			<div className="row">
				<div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
					<div className="card card-profile shadow">
						<div className="row justify-content-center">
							<div className="col-lg-3 order-lg-2">
								<div className="card-profile-image">
									<a href="/">
									<img  src="https://www.pngitem.com/pimgs/m/287-2876223_no-profile-picture-available-hd-png-download.png" alt = "image" className="rounded-circle"/>
									</a>
								</div>
							</div>
						</div>
						{/* <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
							<div className="d-flex justify-content-between">
							<a href="/" className="btn btn-sm btn-info mr-4">Connect</a>
							<a href="/" className="btn btn-sm btn-default float-right">Message</a>
							</div>
						</div> */}
						<div className="card-body-1 pt-0 pt-md-4">
							<div className="row">
								<div className="col">
									<div className="card-profile-stats d-flex justify-content-center" style={{margin:"100px"}} >
									<div>
										<span className="heading">22</span>
										<span className="description">Friends</span>
									</div>
									<div>
										<span className="heading">10</span>
										<span className="description">Photos</span>
									</div>
									<div>
										<span className="heading">89</span>
										<span className="description">Comments</span>
									</div>
									</div>
								</div>
							</div>
							<div className="text-center">
							<h3>
								Jessica Jones<span className="font-weight-light">, 27</span>
							</h3>
							
							<div className="h5 mt-4">
								<i className="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
							</div>
							<div>
								<i className="ni education_hat mr-2"></i>University of Computer Science
							</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-8 order-xl-1">
					<div className="card bg-secondary shadow">
						<div className="card-header bg-white border-0">
							<div className="row align-items-center">
								<div className="col-8">
									<h3 className="mb-0">My account</h3>
								</div>
							</div>
						</div>
						<div className="card-body-1">
							<form/>
							<h6 className="heading-small text-muted mb-4">User information</h6>
							<div className="pl-lg-4">
								<div className="row">
								<div className="col-lg-6">
									<div className="form-group focused">
									<label className="form-control-label " style={{fontSize:"20px"}} htmlFor="input-username">First Name</label>
									<div>
										Rahul 
									</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="form-group">
									<label className="form-control-label" htmlFor="input-email">Last Name</label>
									
									</div>
								</div>
								</div>
								<div className="row">
								<div className="col-lg-6">
									<div className="form-group focused">
									<label className="form-control-label" htmlFor="input-first-name"> User Name</label>
									
									</div>
								</div>
								<div className="col-lg-6">
									<div className="form-group focused">
									<label className="form-control-label" htmlFor="input-last-name">Email Address</label>
									
									</div>
								</div>
								</div>
							</div>
							
							<hr className="my-4"/>
							{/* <!-- Address --> */}
							<h6 className="heading-small text-muted mb-4">Contact information</h6>
							<div className="pl-lg-4">
								<div className="row">
								<div className="col-md-8">
									<div className="form-group focused">
									<label className="form-control-label" htmlFor="input-address">Address</label>
									
									</div>
								</div>
								</div>
								<div className="row">
								<div className="col-lg-4">
									<div className="form-group focused">
									<label className="form-control-label" htmlFor="input-city">Phone Number</label>
									
									</div>
								</div>
								
								<div className="col-lg-4">
									<div className="form-group">
									<label className="form-control-label" htmlFor="input-country">Email</label>
									
									</div>
								</div>
								</div>
							</div>
							<hr className="my-4"/>

							{/* <!-- Address --> */}

							<h6 className="heading-small text-muted mb-4">Donation Information </h6>
							<div className="pl-lg-4">

								<div className="row">
								<div className="col-lg-4">
									<div className="form-group focused">
									<label className="form-control-label" htmlFor="input-city">Charity Id</label>
									
									</div>
								</div>
								
								<div className="col-lg-4">
									<div className="form-group">
									<label className="form-control-label" htmlFor="input-country">Time Stamp</label>
									
									</div>
								</div>
								<div className="col-lg-4">
									<div className="form-group">
									<label className="form-control-label" htmlFor="input-country">Amount</label>
									
									</div>
								</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</>
    )
}
