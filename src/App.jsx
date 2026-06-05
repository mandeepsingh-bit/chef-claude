  import Chef from "./Chef";
  import Form from "./Form";
  import image from './image.png'
 
/*import { useState } from "react";
*/
  export default function App(){
    /*
    const [favthings , setFavthings] = useState([])
    const allfavthings = ["butterchicken", "mango mania"]
    const things = favthings.map(things => <p key={things}>{things}</p>)
    
     */
    <img src={image} />
    /** 
    function data(event){
      const FormData = new FormData(event.currentTarget)
    const newdata = FormData.get("fav")
    
    
    }

    function addfavthings(){
      setFavthings(prevthings => [...prevthings, newdata ])
    }
*/
      return (
        <>
      <Chef />
       <Form />
        
     
      
      </>
  );

}


/*import { useState } from "react";

export default function App() {
  // 1. This is the only list that matters for the UI
  const [favthings, setFavthings] = useState(["butterchicken", "mango mania"]);

  // 2. This maps your state to HTML paragraphs
  const thingsElements = favthings.map((item) => <p key={item}>{item}</p>);

  function handleFormSubmit(event) {
    event.preventDefault(); // Prevents the page from refreshing!
    
    const formData = new FormData(event.currentTarget);
    const newDish = formData.get("fav");

    if (newDish) {
      // 3. Update the state directly with the new dish
      setFavthings((prev) => [...prev, newDish]);
      
      // 4. Clear the input box
      event.currentTarget.reset();
    }
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="enter your fav dish" name="fav" />
        <button type="submit">Add to List</button>
      </form>
      
      <div>{thingsElements}</div>
    </>
  );
}
*/
  
