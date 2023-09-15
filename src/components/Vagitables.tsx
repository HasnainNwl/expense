import { use, useState } from "react";

const Vagitables = () => {
    const [Vagitables, setVagitables] = useState([
        { name: "Turnip", price: 50 }
    ])
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const AddNewVagitables =()=>{
        if(name.length > 3 && +price > 0){
            setVagitables((prev:any) =>{
                return [...prev, {name: name, price : price}]
        });
        setName('')
        setPrice('')
        }else {
            alert("Your input in invalide"); 
        }
       
    }
    return (
        <>
        {Vagitables.map(s => (
            <article>
                <h3>{s.name} --- ---- <span>{s.price}</span></h3>
            </article>
        ))}

        
            <fieldset>
                <legend>Add NEW Vagitables</legend>
                <label htmlFor="">NAme:</label> 
                <input type="text" value={name}  onChange={(event)=> setName(event.target.value) }/>
                <br />
                <label htmlFor="">Price:</label>
                <input type="number" value={price} onChange={(event)=> setPrice(event.target.value) } />
                <input type="button" value="Submit" onClick={AddNewVagitables} />
            </fieldset>
      


        </>
    );

}
export default Vagitables;