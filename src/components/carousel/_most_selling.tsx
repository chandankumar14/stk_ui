"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const data = [
    {
        image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
        title: 'Iphone 5G Phone',
    },
    {
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        title: 'Samsung 5G Phone',
    },
    {
        image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        title: 'Intel 5G Phone',
    },
    {
        image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        title: 'Poco 5G Phone',
    },
    {
        image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
        title: 'Techno 5G Phone',
    }
]

function MostSellingProduct() {
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
    };

    return (
        <div className=' bg-pink-100 mt-4'>
            <div className='w-4/5 m-auto pt-4 pb-4'>
                <h1 className="text-center text-lg">Most Selling Product </h1>
                <Slider {...settings}>
                    {data.map((item, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    <img src={item.image}
                                        className='w-96 h-52 
                                        block p-4 mix-blend-multiply' />
                                    <div className=''>
                                        <p className='font-semibold  text-center'>{item.title}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </Slider>
            </div>
        </div>
    );
}

export default MostSellingProduct;
