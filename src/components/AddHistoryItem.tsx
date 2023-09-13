import { title } from "process";

const AddHistoryItem = ({ transtion }: any) => {
  const { title, amount } = transtion;
  return (

    
      <li className={amount < 0 ? "minus" : "plus"}>
        {title} <span>{amount}</span><button className="delete-btn">x</button>
      </li>
    

  );
}
export default AddHistoryItem;