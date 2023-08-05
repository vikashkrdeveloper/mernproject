import React, { useState } from 'react'
import './Addproject.css';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
function Addproject() {
  const [getdata, setdata] = useState({ producttitle: "", discription: "", productimage: "", category: "", subcategory: "", price: "", country: "" })
const navigate= useNavigate();
  const changevalue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setdata({ ...getdata, [name]: value });
  }

  const submitfun = async (event) => {
    event.preventDefault();
    try {
      const { producttitle, discription, productimage, category, subcategory, price, country } = getdata;
      const res = await fetch('/ashboard/addproduct', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ producttitle, discription, productimage, category, subcategory, price, country })
      })

      if (res.status === 200) {
        toast.success('Product add sucessfully');
        navigate('/dashboard/products',{replace:true})
      }
      else if (res.status === 500) {
        toast.error('All field require');
      }
      else if (res.status === 404) {
        toast.error('Sum technical issues');
      }

    }
    catch (error) {
      toast.error('This time sum technical issues pleased try after sum time');
    }


  }

  return (


    <>
      <main className='addproject-main-container'>
        <div className="heading-project-container">
          <h1 className='heading-project'>Create product</h1>
        </div>
        <div className="product-input-container">
          <form action="" method="POST" className='form-box-create' onSubmit={submitfun}>
            <div className="input-box-container">
              <div className="input-container-product">
                <p className='titlename'>Product tittle</p>
                <input type="text" name='producttitle' id='producttitle' value={getdata.producttitle} onChange={changevalue} placeholder='Writing' className='inputfield-box-con' />
              </div>

              <div className="input-container-product">
                <p className='titlename'>Label</p>
                <textarea name="discription" id="label" cols="10" rows="4" value={getdata.discription} onChange={changevalue} placeholder='Type here'></textarea>
              </div>
              <div className="input-container-product">
                <p className='titlename'>Images</p>
                <input type='file' name='productimage' id='productimage' value={getdata.productimage} onChange={changevalue}  multiple/>
              </div>
              <div className="input-container-product-box">
                <div className="input-container-product">
                  <p className='titlename'>Category</p>
                  <select name="category" id="" className='inputfield-box-con' value={getdata.category} onChange={changevalue}>
                    <option value="">Select</option>
                    <option value="digital-services">digital services</option>
                    <option value="cosmetics-and-body-care">cosmetics and body care</option>
                    <option value="food-and-beverage">food and beverage</option>
                    <option value="furniture-and-decor">furniture and decor</option>
                    <option value="health-and-wellness">health and wellness</option>
                    <option value="household-items">household items</option>
                    <option value="pet-care">media</option>
                    <option value="media">pet care</option>
                    <option value="office-equipment">office equipment</option>
                  </select>
                </div>
                <div className="input-container-product">
                  <p className='titlename'>Sub category</p>
                  <select name="subcategory" id="" className='inputfield-box-con' value={getdata.subcategory} onChange={changevalue}>
                    <option value="">Select</option>
                    <option value="digital-services">digital services</option>
                    <option value="cosmetics-and-body-care">cosmetics and body care</option>
                    <option value="food-and-beverage">food and beverage</option>
                    <option value="furniture-and-decor">furniture and decor</option>
                    <option value="health-and-wellness">health and wellness</option>
                    <option value="household-items">household items</option>
                    <option value="pet-care">media</option>
                    <option value="media">pet care</option>
                    <option value="office-equipment">office equipment</option>
                  </select>
                </div>

              </div>

              <div className="input-container-product-box">

                <div className="input-container-product-box-cn">
                  <p className='titlename'>Price</p>
                  <input type="text" name="price" id="" className='inputfield-box-con' placeholder='Type here' value={getdata.price} onChange={changevalue} />
                </div>
                <div className="input-container-product-cn-amount">
                  <select name="country" id="" className='inputfield-box-con' value={getdata.country} onChange={changevalue} >
                    <option value="">Country</option>
                    <option value="india">India</option>
                    <option value="china">CHINA</option>
                    <option value="usa">USA</option>
                  </select>
                </div>

              </div>

              <div className="submit-button-container">
                <input type="submit" id='submit-item' value='Submit item' />

              </div>


            </div>
          </form>



        </div>

      </main>
    </>
  )
}

export default Addproject
