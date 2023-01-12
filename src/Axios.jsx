import axios from "axios"
import { useEffect, useState } from "react"

const p=[
    {
      "dis_section": "off",
      "dis_section 2": 49,
      "per_txt": "%",
      "pro_detail_href": "https://www.jiomart.com/p/homeandkitchen/clean-india-black-medium-garbage-bags-3-pack-of-30-pcs-19-inch-x-21-inch-pack-of-3-90-bags/590996188",
      "url": "https://www.jiomart.com/images/product/150x150/rvham41x95/clean-india-black-medium-garbage-bags-3-pack-of-30-pcs-19-inch-x-21-inch-pack-of-3-90-bags-urls-orvham41x95-p590996188-0-202201112009.jpg",
      "clsgetname": "Clean India - Black Medium Garbage..",
      "final_price": "₹ 199.00",
      "price": "M.R.P:",
      "price 2": "₹ 392.00",
      "save_price": "Save ₹ 193.00"
    },
    {
      "dis_section": "off",
      "dis_section 2": 10,
      "per_txt": "%",
      "pro_detail_href": "https://www.jiomart.com/p/homeandkitchen/the-honest-home-company-food-wrapping-paper-oilproof-reusable-parchment-paper-for-wrapping-roti-paratha-and-sandwich-paper-11-inch-x-21-m/591852026",
      "url": "https://www.jiomart.com/images/product/150x150/rvs7wqercz/the-honest-home-company-food-wrapping-paper-oilproof-reusable-parchment-paper-for-wrapping-roti-paratha-and-sandwich-paper-11-inch-x-21-m-urls-orvs7wqercz-p591852026-0-202209151059.jpg",
      "clsgetname": "The Honest Home Company Food Wrappi..",
      "final_price": "₹ 175.00",
      "price": "M.R.P:",
      "price 2": "₹ 195.00",
      "save_price": "Save ₹ 20.00"
    },
    {
      "dis_section": "off",
      "dis_section 2": 5,
      "per_txt": "%",
      "pro_detail_href": "https://www.jiomart.com/p/homeandkitchen/the-honest-home-company-2-ply-toilet-paper-tissue-roll-4-rolls-1200-pulls/591852065",
      "url": "https://www.jiomart.com/images/product/150x150/rvhd8mpfsa/the-honest-home-company-2-ply-toilet-paper-tissue-roll-4-rolls-1200-pulls-urls-orvhd8mpfsa-p591852065-0-202210201016.jpg",
      "clsgetname": "The Honest Home Company 2 Ply Toile..",
      "final_price": "₹ 185.00",
      "price": "M.R.P:",
      "price 2": "₹ 195.00",
      "save_price": "Save ₹ 10.00"
    },
    {
      "dis_section": "off",
      "dis_section 2": 10,
      "per_txt": "%",
      "pro_detail_href": "https://www.jiomart.com/p/homeandkitchen/origami-2-ply-kitchen-towel-60-pulls-pack-of-4/590307595",
      "url": "https://www.jiomart.com/images/product/150x150/rvtbhfkgvj/origami-2-ply-kitchen-towel-60-pulls-pack-of-4-urls-orvtbhfkgvj-p590307595-0-202207301751.jpg",
      "clsgetname": "Origami 2-Ply Kitchen Towel 60 Pull..",
      "final_price": "₹ 297.00",
      "price": "M.R.P:",
      "price 2": "₹ 330.00",
      "save_price": "Save ₹ 33.00"
    },
    {
      "dis_section": "off",
      "dis_section 2": 16,
      "per_txt": "%",
      "pro_detail_href": "https://www.jiomart.com/p/homeandkitchen/ezee-tissue-paper-napkins-50-pieces-pack-of-6/590362575",
      "url": "https://www.jiomart.com/images/product/150x150/rv7miycppw/ezee-2-ply-tissue-paper-napkins-50-pcs-pack-of-6-urls-orv7miycppw-p590362575-0-202211180945.jpg",
      "clsgetname": "Ezee 2 Ply Tissue Paper Napkins 50..",
      "final_price": "₹ 269.00",
      "price": "M.R.P:",
      "price 2": "₹ 324.00",
      "save_price": "Save ₹ 55.00"
    },
    {
      "dis_section": "off",
      "dis_section 2": 23,
      "per_txt": "%",
      "pro_detail_href": "https://www.jiomart.com/p/groceries/surf-excel-matic-top-load-liquid-detergent-2-l/491436153",
      "url": "https://www.jiomart.com/images/product/150x150/491436153/surf-excel-matic-top-load-liquid-detergent-2-l-urls-o491436153-p491436153-0-202203170632.jpg",
      "clsgetname": "Surf Excel Matic Top Load Liquid De..",
      "final_price": "₹ 330.00",
      "price": "M.R.P:",
      "price 2": "₹ 430.00",
      "save_price": "Save ₹ 100.00"
    },
    {
      "dis_section": "",
      "dis_section 2": "",
      "per_txt": "",
      "pro_detail_href": "https://www.jiomart.com/p/homeimprovement/monkey-555-broom-regular/595260462",
      "url": "https://www.jiomart.com/images/product/150x150/rvwri0ttgg/monkey-555-broom-regular-urls-orvwri0ttgg-p595260462-0-202212271231.jpg",
      "clsgetname": "Monkey 555 Broom-Regular",
      "final_price": "₹ 145.00",
      "price": "",
      "price 2": "",
      "save_price": ""
    },
    {
      "dis_section": "off",
      "dis_section 2": 60,
      "per_txt": "%",
      "pro_detail_href": "https://www.jiomart.com/p/groceries/5-ld/595320439",
      "url": "https://www.jiomart.com/images/product/150x150/rv1nor9yhf/5-ld-urls-orv1nor9yhf-p595320439-0-202211150927.jpg",
      "clsgetname": "Shatras 5 Liter Laundry Liquid Dete..",
      "final_price": "₹ 399.00",
      "price": "M.R.P:",
      "price 2": "₹ 999.00",
      "save_price": "Save ₹ 600.00"
    }]

export default function Axios(){
    const [data,setData] = useState(p)

  const getData=()=>{
    axios.get("https://mock-sever-app.onrender.com/products").then((res)=>{
      console.log(res.data)
      setData(res.data)
    }).catch((res)=>{
        console.log(res,"api not working")
    })
  }

  useEffect(()=>{
    getData()
  },[])
  return(
    <div>
    <h1 className="text-[40px]">JIO MART</h1>
    <div className="grid grid-cols-4 gap-4 px-10 py-5 bg-red-400">
        {
            data.length > 0 && data.map((ele,index)=>(
                <div key={index} className="px-10 py-10 border-4 cursor-pointer rounded-3xl group" title={ele.clsgetname} >
                
                <div className="rotate-0 scale-100 group-hover:rotate-[360deg] group-hover:scale-125 duration-500  ">
                     <img className="w-full h-full rounded-3xl" src={ele.p_cover} alt="jio-mart" />

                </div>
                <h1 className="mt-8 font-extrabold text-teal-400 text-md">{ele.clsgetname}</h1>
               <button className="px-8 py-2 my-4 font-extrabold bg-sky-400 text-slate-100 rounded-xl"><a href={ele.url} >Buy</a></button> 
                </div>
            ))
        }
    </div>

    </div>
  )
}