import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button, Modal, ModalBody } from 'flowbite-react';
import Intra from './../assets/42.jpeg';
import GITHUB from './../assets/Vector.svg';
import GOOGLE from './../assets/google.png'
import PING from './../assets/PhotoReal_Design_a_captivating_and_userfriendly_home_page_for_0.jpg'
import './dashboard.css'
import { Avatar } from 'flowbite-react';
import AVATAR from './../assets/leonardo-logo.svg';
function DashboardComponent(): JSX.Element {

	const [openModal, setOpenModal] = useState(false);
	const [searchParams] = useSearchParams();
	let accessToken: any, provider: any, firstLogin: any
	function stringToBoolean(str: string): boolean {
		return str === "true";
	}
	accessToken = searchParams.get("accessToken");
	provider = searchParams.get("provider")
	firstLogin = searchParams.get("firstLogin")
	// if (accessToken)
	// 	localStorage.setItem('accessToken', accessToken)
	// if (provider)
	// 	localStorage.setItem('provider', provider)
	// if (firstLogin) {
	// 	setOpenModal(stringToBoolean(firstLogin))
	// }

	useEffect(() => {
		if (accessToken) localStorage.setItem('accessToken', accessToken);
		if (provider) localStorage.setItem('provider', provider);
		if (firstLogin) setOpenModal(stringToBoolean(firstLogin));
	}, [accessToken, provider, firstLogin]);
	const ele: Element | null = document.querySelector('[role=dialog]');
	var btn: HTMLButtonElement | null;
	if (ele && ele != null) {
		btn = ele?.querySelector("button");
		if (btn)
			btn.style.display = "none";
	}

	return (
		<>
			{/* <Modal show={openModal} >
				<Modal.Header >Terms of Service</Modal.Header>
				<Modal.Body>
					<div className="space-y-6">
						<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
							With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
							companies around the world are updating their terms of service agreements to comply.
						</p>
						<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
							The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
							to ensure a common set of data rights in the European Union. It requires organizations to notify users as
							soon as possible of high-risk data breaches that could personally affect them.
						</p>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={() => setOpenModal(false)}>I accept</Button>
					<Button color="gray" onClick={() => setOpenModal(false)}>
						Decline
					</Button>
				</Modal.Footer>
			</Modal> */}
			<div className="w-screen h-screen backk">
				<Modal show={true} size='500' style={{ margin: '0' }} className="sm:p-7 sm:mt-7 modall">
					<ModalBody style={{ padding: '0' }} className="overflow-hidden">
						<div className="flex">
							<div className="w-full sm:w-1/4 p-4 left">
								<div className="flex justify-center items-center space-x-4 rounded mx-auto my-auto" style={{ width: '100px', height: '100px' }}>
									<div className="relative">
										<img alt="" src={AVATAR} className="rounded" style={{ width: '100%', height: '100%' }} />
									</div>
								</div>
								<p className="text-center text-md font-thin text-white mt-3" >
									Sign up or log in with
								</p>
								<div className="flex items-center space-x-2  text-white p-2 rounded-lg box mt-4">
									<img src={Intra} alt="" className="rounded-full h-8 w-8" />
									<span className="font-semibold">Intra</span>
								</div>
								<div className="flex items-center space-x-2  text-white p-2 rounded-lg box mt-4">
									<img src={GITHUB} alt="" className="rounded-full h-8 w-8" />
									<span className="font-semibold">Github</span>
								</div>
								<div className="flex items-center space-x-2  text-white p-2 rounded-lg box mt-4">
									<img src={GOOGLE} alt="" className="rounded-full h-8 w-8" />
									<span className="font-semibold">Google</span>
								</div>
							</div>
							<div className="hidden sm:block">
								<img src={PING} alt="Your Image" className="w-full h-full object-cover" />
							</div>
						</div>
					</ModalBody>
				</Modal>
			</div>


		</>
	)
}

export default DashboardComponent;