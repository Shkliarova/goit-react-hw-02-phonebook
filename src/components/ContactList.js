export const ContactList = ({items, onDelete}) => {
    return(
        <ul>
            {items.map(item => 
            <li key={item.id}>
                {item.name}: {item.number}
                <button onClick={()=>onDelete(item.id)}>delete</button>
            </li>)}
        </ul>
    )
}