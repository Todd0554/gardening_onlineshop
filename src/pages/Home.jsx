import React from 'react'
import OurService from '../components/OurService';
import ShowProducts from '../components/ShowProducts';
import Subscribe from '../components/Subscribe';

function Home() {
  return (
    <div>
      <OurService />
      <Subscribe />

      <div class="container-fluid pt-5">
        <div class="text-center mb-4">
          <h2 class="section-title px-5"><span class="px-2">Our Products</span></h2>
        </div>
        <ShowProducts />
      </div>
    </div>

  )
}

export default Home