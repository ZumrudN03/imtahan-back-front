import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../../Components/Header'
import NewArrivalSection from '../../Components/NewArrivalSection'
import CaregorySection from '../../Components/CategorySection'
import BlogSection from '../../Components/BlogSection'
import SubscribeSection from '../../Components/SubscribeSection'
import BestSellerSection from '../../Components/BestSellerSection'


function Home() {
  return (
    <>
    <Helmet>
        <title>Home</title>
    </Helmet>
    <div>
      <Header/>
      <CaregorySection/>
      <NewArrivalSection/>
      <BestSellerSection/>
      <BlogSection/>
      <SubscribeSection/>
    </div>
    </>
  )
}

export default Home