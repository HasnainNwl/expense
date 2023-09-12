import AddHistoryItem from "./AddHistoryItem";
const Histroy = () => {
    const task = [
        { title: "rent", amount: -50000 },
        { title: "salary", amount: +100000 },
        { title: "shopping", amount: -25000 },
        { title: "Food", amount: -10000 },
        { title: "shop rent", amount: +20000 }
    ]


    return (
        <>
           

                <h3>History</h3>
                <ul id="myUL">
            {task.map(obj => (
                <AddHistoryItem key="obj.title" transtion={(obj)} />
                
            ))}
        </ul>
          


        </>

    );
}
export default Histroy;