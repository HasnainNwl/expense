'useclient'
import { useState } from "react";

const Shopping = () => {
    const [shop, setshop] = useState([
        { id: 0, name: "Peant", price: 300, isCompleted: false }
    ])
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')


    const AddNewShop = () => {
        if (name.length > 0 && +price > 0) {
            setshop((prev): any => {
                return [...prev, {id: new Date(), name: name, price: price, isCompleted: isCompleted }];
            })
        }
    }
    const deleteshop = (id: any) => {
        setshop(prev => {
          return prev.filter(s => {
            return s.id != id;
          });
        })
      };
      const updateshop = (id: any) => {
        setshop(prev => {
          return prev.map(todo => {
            if (todo.id == id) {
              return { ...todo, isCompleted: ! todo.isCompleted };
            } else {
              return todo;
            }
          });
        })
      }
    return (
        <>
            {
               <ul id="myUL">
               {shop.map((s: any, key: any) => (
                 <li key={key}
                  
                   onClick={() => updateshop(s.id)}
                 >{s.name}
                   <span className='close'
                     onClick={() => deleteshop(s.id)}>x</span>
                 </li>
               ))}
             </ul>
            }
            <form action="">
                <fieldset>
                    <legend>Add Shoping</legend>
                    <label htmlFor="hello">Name:</label>
                    <input type="text" id="hello" onChange={event => setName(event.target.value)} /> <br />
                    <label htmlFor="">Price:</label>
                    <input type="number" name="" onChange={event => setPrice(event.target.value)} id="" />
                    <input type="button" value="Add shopping" onClick={AddNewShop} />
                </fieldset>
            </form>
        </>
    );

}
export default Shopping;