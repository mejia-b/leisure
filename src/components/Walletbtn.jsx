import React, { useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import { truncateAddress } from '../helpers/formatters';

function Walletbtn() {

	const { authenticate, isAuthenticated, isAuthenticating, user, logout } = useMoralis();

	const login = async () => {
		
		if (!isAuthenticated) {
			console.log("Trying to connect wallet");
			await authenticate({signingMessage: "Log in using Moralis" })
				.then(function (user) {
					console.log("Logged in user:", user);
					console.log("User address:", user.get("ethAddress"));
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	}
  
	const logOut = async () => {
		await logout();
		console.log("User logged out");
	}
  
	return (
		<div>
			{isAuthenticated 
				? <button className='bg-[#6433C4] hover:bg-[#4A23A4] text-white font-bold py-4 px-8 shadow rounded-full'
					onClick={logOut}
					disabled={isAuthenticating}
				>
					{truncateAddress(user.get("ethAddress"))}
				</button> 
				: <button className='bg-[#6433C4] hover:bg-[#4A23A4] text-white font-bold py-4 px-8 shadow rounded-full'
					onClick={login}
				>
					Connect Wallet
				</button> 
			}
		</div>
	);
}

export default Walletbtn;
