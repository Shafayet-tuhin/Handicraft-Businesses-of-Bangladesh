import React from 'react'

const Parts = () => {




    return (
        <div className='mt-[8.25rem] mb-32 '>
            <div className='flex flex-col gap-5 items-center mb-12'>
                <p className='font-bold text-xl text-[#FF3811]'>Popular Products</p>
                <p className='font-bold text-[2.8125rem] text-center'>Browse Our Products</p>
                <p className='text-[#737373] font-normal text-base leading-loose text-center lg:w-[44.8125rem]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem omnis quidem dolores est reiciendis veniam illo velit, minus deserunt, tempora iusto facere, soluta libero nobis a. Perferendis inventore debitis in!</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6'>

                <div className="card w-96 bg-base-100 shadow-xl shadow-slate-600 items-center ">
                    <figure className="px-10 pt-10">
                        <img src='https://www.mitre10.com.au/media/catalog/product/6/8/6870505-0_6.jpg?optimize=high&fit=bounds&height=840&width=840&canvas=840:840' alt="Shoes" className="rounded-xl w-52 h-52" />
                    </figure>
                    <div className="card-body ">
                        <h2 className=" text-xl mb-2 font-bold">Handcrafted Rattan Chair</h2>
                        <div className="flex items-center justify-end">
                            <p className='text-[#FF3811] font-semibold text-xl'>Price : 4500 BDT</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl shadow-slate-600 items-center ">
                    <figure className="px-10 pt-10">
                        <img src='https://assets.wfcdn.com/im/37051862/resize-h800-w800%5Ecompr-r85/9709/97092055/Wood+Wall+Clock.jpg' alt="Shoes" className="rounded-xl w-52 h-52" />
                    </figure>
                    <div className="card-body ">
                        <h2 className=" text-xl mb-2 font-bold">HandCarved Wooden Wall Clock</h2>
                        <div className="flex items-center justify-end">
                            <p className='text-[#FF3811] font-semibold text-xl'>Price : 3200 BDT</p>
                        </div>
                    </div>
                </div>
          
                <div className="card w-96 bg-base-100 shadow-xl shadow-slate-600 items-center ">
                    <figure className="px-10 pt-10">
                        <img src='https://m.media-amazon.com/images/I/51M6p3FKJHL._SY300_SX300_QL70_FMwebp_.jpg' alt="Shoes" className="rounded-x w-52 h-52" />
                    </figure>
                    <div className="card-body ">
                        <h2 className=" text-xl mb-2 font-bold">Batik Printed Table Runner</h2>
                        <div className="flex items-center justify-end">
                            <p className='text-[#FF3811] font-semibold text-xl'>Price : 1200 BDT</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl shadow-slate-600 items-center ">
                    <figure className="px-10 pt-10">
                        <img src='https://m.media-amazon.com/images/I/71pD8T903HL._AC_SL1500_.jpg' alt="Shoes" className="rounded-x w-52 h-52" />
                    </figure>
                    <div className="card-body ">
                        <h2 className=" text-xl mb-2 font-bold">Ceramic Flower Vase</h2>
                        <div className="flex items-center justify-end">
                            <p className='text-[#FF3811] font-semibold text-xl'>Price : 2800 BDT</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl shadow-slate-600 items-center ">
                    <figure className="px-10 pt-10">
                        <img src='https://cdn.shopify.com/s/files/1/0279/9277/files/cotton-rope-hammock-yellow-leaf-high-end-catalina.jpg?v=1713663633' alt="Shoes" className="rounded-xl w-52 h-52" />
                    </figure>
                    <div className="card-body ">
                        <h2 className=" text-xl mb-2 font-bold">Handwoven Cotton Hammock</h2>
                        <div className="flex items-center justify-end">
                            <p className='text-[#FF3811] font-semibold text-xl'>Price : 5000 BDT</p>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl shadow-slate-600 items-center ">
                    <figure className="px-10 pt-10">
                        <img src='https://epica.com/cdn/shop/collections/medievale-leather-journals_aae723d3-59df-4014-8bd0-e28dea03657c_537x.jpg?v=1531527193' alt="Shoes" className="rounded- w-52 h-52" />
                    </figure>
                    <div className="card-body ">
                        <h2 className=" text-xl mb-2 font-bold">Leather-bound Journal</h2>
                        <div className="flex items-center justify-end">
                            <p className='text-[#FF3811] font-semibold text-xl'>1800 BDT</p>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Parts