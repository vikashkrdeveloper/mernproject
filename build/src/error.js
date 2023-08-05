import React from 'react'
import './Error.css';
function Error() {
    return (
        <>
            <div className="error-container">
                <section class="page_404">
                     
                                <div class="col-sm-10 col-sm-offset-1  text-center">
                                    <div class="four_zero_four_bg">
                                        <h1 class="text-center ">404</h1>
                                    </div>

                                    <div class="contant_box_404">
                                    <div className="contant_box">
                                    <h3 class="h2">
                                           Ooops page not found
                                        </h3>

                                        <p>the page you are looking for not avaible!</p>

                                        <a href="/" class="link_404">Go to Home</a>

                                    </div>
                                       
                                    </div>
                                </div>
                           
                </section>
            </div>
        </>
    )
}

export default Error
