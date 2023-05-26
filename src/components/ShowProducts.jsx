import React from 'react'

function ShowProducts() {
    const imageArray = [
      {
        id:1,
        name: "Aglaonema Lady Valentine",
        imageTag: "product-1.jpg",
        price: 13.95
      },
      {
        id:2,
        name: "Anthurium Jenmanii",
        imageTag: "product-2.jpg",
        price: 14.25
      },
      {
        id:3,
        name: "Ficus Abidjan",
        imageTag: "product-3.jpg",
        price: 13.95
      },
      {
        id:4,
        name: "Philodendron imperial",
        imageTag: "product-4.jpg",
        price: 13.95
      },
      {
        id:5,
        name: "Spathiphyllum Sweet Romano",
        imageTag: "product-5.jpg",
        price: 5.95
      },
      {
        id:6,
        name: "dieffenbachia amy",
        imageTag: "product-6.jpg",
        price: 10.95
      },
      {
        id:7,
        name: "ficus melany",
        imageTag: "product-7.jpg",
        price: 34.00
      },
      {
        id:8,
        name: "philodendron birkin",
        imageTag: "product-8.jpg",
        price: 22.45
      },
    ];
  return (
    <div class="row px-xl-5 pb-3">
      {imageArray.map((i) => {
        return (
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
              <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  class="img-fluid w-100"
                  src={"img/" + i.imageTag}
                  alt=""
                ></img>
              </div>
              <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">{i.name}</h6>
                <div class="d-flex justify-content-center">
                  <h6>${i.price}</h6>
                  {/* <h6 class="text-muted ml-2"><del>$123.00</del></h6> */}
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between bg-light border">
                <a href={`/product/${i.id}`} class="btn btn-sm text-dark p-0">
                  <i class="fas fa-eye text-primary mr-1"></i>View Detail
                </a>
                <a href="" class="btn btn-sm text-dark p-0">
                  <i class="fas fa-shopping-cart text-primary mr-1"></i>Add To
                  Cart
                </a>
              </div>
            </div>
          </div>
        );
      })}
      <div class="col-12 pb-1">
        <nav aria-label="Page navigation">
          <ul class="pagination justify-content-center mb-3">
            <li class="page-item disabled">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ShowProducts