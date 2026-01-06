// Question 02. Create a component that returns a list of 3 fruits using <ul><li>. - Beginner level

function PrintList () {
    const items = ["apple", "mango", "grapes", "pine-apple"];

    return (
        
        <ul>
            <li>heyy</li>
            {items.map((item) =>{
               return <li >{item}</li>
            })}
        </ul>

        
    );
}

export default PrintList;