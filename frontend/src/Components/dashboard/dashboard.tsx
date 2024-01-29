import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button, Modal } from 'flowbite-react';
import './dashboard.css'
function DashboardComponent(): JSX.Element {
		const [openModal, setOpenModal] = useState(false);
		const [searchParams] = useSearchParams();
		let accessToken: any, provider: any, firstLogin:any
		function stringToBoolean(str: string): boolean 
		{
			return str === "true";
		}
	accessToken = searchParams.get("accessToken");
	provider = searchParams.get("provider")
	firstLogin = searchParams.get("firstLogin")
	useEffect(() => {
		if (accessToken) localStorage.setItem('accessToken', accessToken);
		if (provider) localStorage.setItem('provider', provider);
		if (firstLogin) setOpenModal(stringToBoolean(firstLogin));
		}, [accessToken, provider, firstLogin]);
	const ele: Element | null = document.querySelector('[role=dialog]');
	var btn: HTMLButtonElement | null;
	if (ele && ele != null)
	{
    	btn = ele?.querySelector("button");
    	if (btn) 
			btn.style.display = "none";
  	}	
	return (
			<Modal show={openModal} >
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
			</Modal>
		
		)
}

export default DashboardComponent;
