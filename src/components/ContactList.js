export const ContactList = ({items}) => {
    return(
        <ul>
            {items.map(item => 
            <li key={item.id}>
                {item.name}: {item.number}
            </li>)}
        </ul>
    )
}