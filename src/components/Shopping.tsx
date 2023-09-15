import { useState } from "react";

const Shopping = () =>{
    const [shop, setshop] = useState([
        {name: "Peant" , price: 300}
    ])
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const AddNewShop = () =>{
        if(name.length > 0 && +price > 0){
           setshop((prev):any =>{
               return [...prev, { name: name, price: price }];
           })
    }
    return(
        <>
       {
         shop.map( s=> (
            <article>
                <h3>{s.name} <span>{s.price}</span></h3>
            </article>
         ))
       }
       <form action="">
        <fieldset>
            <legend>Add Shoping</legend>
            <label htmlFor="hello">Name:</label>
            <input type="text" id="hello" onChange={event=> setName(event.target.value)} /> <br />
            <label htmlFor="">Price:</label>
            <input type="number" name="" onChange={event => setPrice(event.target.value)} id="" />
            <input type="button" value="Add shopping"  onClick={AddNewShop}/>
        </fieldset>
       </form>
       </>
    );
}
}