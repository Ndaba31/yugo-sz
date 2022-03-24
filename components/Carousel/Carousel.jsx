/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ProductContext } from '../../pages';
import ProductCard from '../Products/ProductCard';

const Carousel = () => {
	const products = React.useContext(ProductContext);
	console.log(products);
	return (
		<div className='lg:hidden p-5 w-full'>
			<div className='carousel carousel-center w-full p-4 space-x-4 bg-transparent rounded-box text-white '>
				{[
					...products,
					...products,
					...products,
					...products,
					...products,
					...products,
					...products,
					...products,
				].map(({ image, name, price }, id) => (
					<ProductCard key={id} image={image} price={price} name={name} />
				))}
			</div>
		</div>
	);
};

export default Carousel;
