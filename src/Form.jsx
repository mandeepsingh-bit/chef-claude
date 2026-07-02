//component s
import { useState } from "react"

export default function Form(){
    const [ingredients, setIngredients] = useState([])
      

      const [recipieshown, setRecipeshown] = useState(false)

      function togglerecipie(){
        setRecipeshown(prevShown => !prevShown)
      }


    function addIngredient(FormData){
         
        const newIngredient = FormData.get("ing")
        if(newIngredient){
        setIngredients(prevthings => [...prevthings, newIngredient])
        
    }   
        
    }

    const ingredientsListItems = ingredients.map(items => (
            <li key={items}>{items}</li>
    ))
        return(
            <>
        
            <form action={addIngredient}>
            <input type="text" placeholder="eg.oregano" name="ing"/>
             
         
            <button>+ Add ingredient</button> 
            </form>

            {ingredients.length > 0 && (
                <section>
                <h2>Ingredients in hand:</h2>
                <ul className="ingredients-list">{ingredientsListItems}</ul>
                {ingredients.length>3 && <div className="getrecipie" >
                    <div>
                        <h3> ready for a recipie?</h3>
                        <p>Generate a recipie from your list of ingredients.</p>

                    </div>
                    <button onClick={togglerecipie}> Get a recipie</button>
                </div>}
                     
                
            </section>)}


        {recipieshown && (
            <section className="suggested-recipe-container">
            <h2> Chef claude recommendation:</h2>
            <article  className="suggested-recipe-post">
                <p> 
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Sapiente sint officiis
                     aliquid dicta aliquam. Temporibus fugit
                      quibusdam officia, corrupti, cum repudiandae 
                      vero aspernatur nemo ut blanditiis tempore ad totam 
                      s  apiente.
                </p>

            </article>
            </section>)}
        
         
        </>
        )
}






