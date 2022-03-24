import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'
import commerce from '../commerce'
import NavbarSecondary from '../components/Navbar/NavbarSecondary'
import Carousel from '../components/Carousel/Carousel'

export const ProductContext = React.createContext();
export const CategoryContext = React.createContext();

export async function getStaticProps() {
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      categories,
      products,
    },
  };
}

export default function Home({products, categories}) {

  return (
    <ProductContext.Provider value={products}>
      <CategoryContext.Provider value={categories}>        
        <div data-theme="garden">
          <Navbar/>
          <NavbarSecondary/>
          <h1 className='capitalize text-center text-3xl mt-3 text-neutral'>thrift & accessories online store</h1>
          <Carousel/>
          {/* {products.map((product, id) => <p key={id}>{}</p>)} */}
        </div>
      </CategoryContext.Provider>
    </ProductContext.Provider>
  )
}
