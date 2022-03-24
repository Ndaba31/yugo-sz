import React from 'react';
import Image from 'next/image';

const Hero = () => {
	return (
		<div className=' lg:block hero min-h-screen bg-base-200'>
			<div className='hero-content flex-col lg:flex-row'>
				<div className='h-300'>
					<Image
						width={200}
						height={400}
						alt='yugo products'
						src='/yugo-video.gif'
						className='rounded-lg shadow-2xl'
					/>
				</div>
				<div className='text-primary'>
					<h1 className='capitalize text-3xl mt-3 text-neutral text-center '>
						thrift & accessories online store
					</h1>
					<p className='py-1 text-center '>
						Clothes are thrifted so their condition may not be 100%
					</p>
					<p className='py-2 text-center '>
						We will however state each item&apos;s condition out of 10 when posting it
						and point out whatever issue there is with that item.
					</p>
					<p className='py-1 text-center '>Our accessories are ALL NEW!!!</p>
					<p className='py-2 text-center '>And in PERFECT condition!!!</p>
					<p className='py-1 text-center '>Deliveries are done on weekdays ONLY!!</p>
					<p className='py-1 text-center  uppercase'>No returns allowed!!</p>
					<p className='py-2 text-center '>Limited stock... First come first serve!</p>
					<p className='py-2 text-center '>
						Deliveries will be around Manzini and Mbabane in places close to or in
						town...
					</p>
					<p className='py-1 text-center '>
						To secure an ordered item... a 50% deposit is paid via e-wallet or mobile
						money to this contact
					</p>
					<p className='py-2 text-center text-error text-lg'>76159444</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
