"use Client"
import { useState } from "react";

const Car = () => {
    const [car, setcars] = useState([
        { name: "Audio", color: "green", price: 30000000 },
        { name: "Farrari", color: "White", price: 40000000 },
        { name: "Range Rover", color: "Black", price: 50000000 },
        { name: "Bugati", color: "Yellow", price: 60000000 },
        { name: "Banetly", color: "Red", price: 70000000 }
    ])

    const [name, setName] = useState('')
    const [color, setColor] = useState('')
    const [price, setPrice] = useState('')

    const AddNewCar = () => {
        if (name.length > 0 && color.length > 0 && +price > 0) {
            setcars((prev): any => [...prev, { name: name, color: color, price: price }])
            setName('')
            setColor('')
            setPrice('')
        } else {

        }


    }
    return (
        <>
            {
                car.map(car => (
                    <article>
                        <h3>{car.name} ----<span>{car.color}</span> ------<span>{car.price}</span></h3>
                    </article>
                ))
            }
            <fieldset>
                <legend>Add cars</legend>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
                <label htmlFor="">Color:</label>
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} /><br />
                <label htmlFor="">price: </label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} /> <br /> <br />
                &nbsp; &nbsp;
                <input type="button" onClick={AddNewCar} value="Submit" />

            </fieldset>
        </>
    );
}
export default Car;