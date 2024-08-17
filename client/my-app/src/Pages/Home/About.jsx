import React from 'react'
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
import Swal from 'sweetalert2'


const About = () => {

    const handleInfo = () => {
        Swal.fire({
            icon: "error",
            title: "Eitar Kaaj kori nai 😥 ,Niche Service er Kaaj korsi",

            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }

    return (
        <div className="mt-24 ">
            <div className="hero-content flex-col lg:flex-row">
                <div className=' relative'>
                    <img src={person} className="w-[80%] rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2  absolute right-5 top-1/2 rounded-lg border-8 border-white" />
                </div>
                <div >

                    <h1 className="text-xl font-bold text-[#FF3811] mb-5">About Section</h1>

                    <p className=" text-5xl font-bold mb-7 ">Handicrafts of Bangladesh: A Celebration of Cultural Heritage and Skilled Craftsmanship.</p>

                    <p className='text-[#737373] font-normal text-base mb-5'>Handicrafts in Bangladesh are a vibrant expression of the country's rich cultural heritage and skilled craftsmanship. These products, ranging from handwoven textiles like Jamdani sarees to intricately carved wooden items and eco-friendly jute goods, are not just functional but also artistic.</p>

                    <p className='text-[#737373] font-normal text-base mb-7'>The handicraft sector provides livelihoods to thousands of artisans, especially in rural areas, and supports the preservation of traditional skills passed down through generations.</p>

                    <a href='https://idlc.com/mbr/article.php?id=604#:~:text=The%20popular%20handicrafts%20in%20Bangladesh,%2C%20vases%2C%20and%20so%20on.' target='_blank'  className="bg-[#FF3811] text-white font-semibold text-lg px-4 py-2 rounded-lg" >Get More Info</a>
                </div>
            </div>
        </div>
    )
}

export default About