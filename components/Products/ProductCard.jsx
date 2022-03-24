import React from 'react';
import Image from 'next/image';

const ProductCard = ({ image, description, price, name }) => {
	return (
		<button
			className='carousel-item card w-84 bg-white shadow-md focus:bg-accent transition ease-in-out delay-150 focus:-translate-y-1 focus:scale-105
    duration-300'
		>
			<div className='w-full'>
				<figure className='m-1'>
					<Image
						src={image.url}
						alt={name}
						width={235}
						height={235}
						className='rounded-xl'
					/>
				</figure>
			</div>
			<div className='card-body items-center text-center'>
				<h2 className='card-title text-primary-2'>{name}</h2>
				<div className='card-actions'>
					<div className='text-error'>{price.formatted_with_symbol}</div>
				</div>
			</div>
		</button>
	);
};

export default ProductCard;
