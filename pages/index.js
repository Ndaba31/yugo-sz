import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'
import commerce from '../commerce'

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

export default function Home({ categories, products }) {
  console.log(products, categories);

  return (
    <div data-theme="garden">
      <Navbar/>
      {/* {products.map((product, id) => <p key={id}>{}</p>)} */}
    </div>
  )
}
