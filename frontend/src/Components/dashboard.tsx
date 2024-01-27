import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button, Modal, ModalBody } from 'flowbite-react';
import INTRA from './../assets/ping-pong-high-resolution-logo-white.svg';
import GITHUB from './../assets/Vector.svg';
import GOOGLE from './../assets/google.png'
import PING from './../assets/PhotoReal_Design_a_captivating_and_userfriendly_login_page_for_2.jpg'
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
			<header className="backk">
				<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
					<div className="flex lg:flex-1">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							
						</a>
					</div>
				</nav>
			</header>
		</>
	)
}

export default DashboardComponent