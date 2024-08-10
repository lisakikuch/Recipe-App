import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
    
    return (
        <div className="home-container">
            {/* Header Section */}
            <header className="header-section">
                <div className="overlay">
                    <div className="header-content">
                        <h1>Welcome to GreatCooks</h1> 
                        <form className="search-form">
                            <input type="text" placeholder="Search for a recipe, ingredient or category" />
                            <button type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </header>

            {/* Carousel Section */}
            <Carousel className="carousel-section">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.eatwell101.com/wp-content/uploads/2020/10/Garlic-Herb-Roasted-Potatoes-Carrots-and-Zucchini-recipe.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Delicious Recipes</h3>
                        <p>Discover new and exciting recipes to try out.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://del.h-cdn.co/assets/17/31/1600x1066/gallery-1501791674-delish-chicken-curry-horizontal.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Healthy Meals</h3>
                        <p>Enjoy a variety of healthy and tasty meals.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.simplyrecipes.com/thmb/L5AtvTCeVBey_TRNI-gccSWn-1E=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Buffalo-Chicken-Tacos-LEAD-3-82f888e8a7364048bbdb27ba367919d9.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Easy to Cook</h3>
                        <p>Simple recipes that anyone can cook.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.simplyrecipes.com/thmb/p4qQ5PiTG3ZKDIEt5Wn7KguU0p4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Chop-Suey-LEAD-06-34a1a2b71183454480c39c3f9deac92c.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Easy to Cook</h3>
                        <p>Simple recipes that anyone can cook.</p> 
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Category Section */}
            <div className="category-section">
                <button className="category-button">Pancake Recipes</button>
                <button className="category-button">Desserts</button>
                <button className="category-button">Vegan Recipes</button>
                <button className="category-button">Quick Meals</button>
            </div>

            {/* Featured Recipes Section */}
            <div className="featured-section">
                <h2>Popular Recipes</h2>
                <div className="recipe-cards">
                    <div className="recipe-card">
                        <img src="https://www.example.com/recipe1.jpg" alt="Colorful Pancakes" />
                        <h3>Colorful Pancakes</h3>
                        <p>⭐️⭐️⭐️⭐️⭐️ (50)</p>
                    </div>
                    <div className="recipe-card">
                        <img src="https://www.simplyrecipes.com/thmb/GOyKGckn88muqRjnnnZT9nUfU0s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Skillet-Cacio-e-Pepe-Tortellini-LEAD-2-1a81287e04004a53932c00e05da3df18.jpg" alt="Pistachio Dessert" />
                        <h3>Tortellini</h3>
                        <p>⭐️⭐️⭐️⭐️⭐️ (45)</p>
                    </div>
                    <div className="recipe-card">
                        <img src="https://www.simplyrecipes.com/thmb/Vv2ctLOkddIknx0enOQbINB7r-o=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Bulgogi-SEO-daf49e25a78d41ccbf66aba56b50520f.jpg" alt="Sweet Treats" />
                        <h3>Beef Bulgogi</h3>
                        <p>⭐️⭐️⭐️⭐️⭐️ (30)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Home;