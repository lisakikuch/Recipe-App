import React from 'react';

function About() {
    return (
        <section className='about-section'>
            <div className='container'>
                <div className='row clearfix'>

                    {/* content column */}
                    <div className='content-column col-md-6 col-sm-13 col-sx-12'>
                        <div className='inner-col'>
                            <div className='title-sec'>
                                <div className='title'>About</div>
                                <h2>Welcome to GreatCooks—Your Ultimate Recipe Resource!</h2>
                            </div>
                            <div className='about'>
                            At GreatCooks, we’re passionate about making cooking easy, accessible, and enjoyable for everyone. Whether you're a seasoned chef or just starting out in the kitchen, our goal is to help you find the perfect recipe for any occasion. From savory dishes to sweet treats, GreatCooks provides you with all the ingredients and step-by-step instructions you need to create delicious meals with confidence.
                            </div>

                            <a href='Recipes' className='theme=btn btn-style-three'>Explore Recipes</a>
                            <div className='about-why'>Why GreatCooks?</div>
                        </div>
                        
                        {/** Image column */}
                        <div className='image-column col-md-6 col-sm-12 col-xs-12'>
                            <div className='inner-col'> 
                                <div className='image'>
                                    <img src="https://images.pexels.com/photos/3622643/pexels-photo-3622643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></img>
                                    <div className='box'>
                                        <div>With over 1000 Recipes!</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                          
                        


                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;