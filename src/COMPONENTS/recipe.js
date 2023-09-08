import React from "react";

class Recipe extends React.Component{
    render() {
        return (
            <div className="recipes-section">
            <h1>Your taste buds will thank you</h1>
            <div className="recipe-container">
              <div className="recipe-col">
                <div className="img-col">
                  <img src="https://assets.website-files.com/6461e47502e4c76cc75be687/64636532fc1f8b26e47140a0_avocado-chickpeas-toast-p-500.webp" />
                  <div className="recipe-cat">vegan</div>
                </div>
                <div className="recipe-text">Chickpeas and Avocado on toast</div>
              </div>
              <div className="recipe-col">
                <div className="img-col">
                  <img src="https://assets.website-files.com/6461e47502e4c76cc75be687/64636527aa7aae1186978883_caprese-salad-p-500.webp" />
                  <div className="recipe-cat">made in 15min</div>
                </div>
                <div className="recipe-text">
                  The Best Caprese Salad: with 3 Ingredients Only
                </div>
              </div>
  
              <div className="recipe-col">
                <div className="img-col">
                  <img src="https://assets.website-files.com/6461e47502e4c76cc75be687/6463651ee680dea524c33df5_pasta-bolognese-p-500.webp" />
                </div>
                <div className="recipe-text">
                  Pasta Bolognese - the Italian Way
                </div>
              </div>
              <div className="recipe-col">
                <div className="img-col">
                  <img src="https://assets.website-files.com/6461e47502e4c76cc75be687/64636511236c4d9dee6b0326_roasted-asparagus-p-500.webp" />
                </div>
                <div className="recipe-text">
                  Roasted Asparagus: Garlicky and Delicious
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Recipe;