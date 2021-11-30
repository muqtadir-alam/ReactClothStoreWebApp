import React from 'react';

export const Header = () => {
	return (
		<div className='ui fixed menu'>
			<div className='ui container center '>
				<h1
					style={{
						color: 'red',
						fontFamily: 'cursive',
						fontWeight: 'bolder',
						margin: '3rem',
					}}>
					WelcomeToShopingWorld
				</h1>
			</div>
		</div>
	);
};
