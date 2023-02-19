const Person = (props) => {
    let ageCheck = props.age >= 18 ? "Go vote!" : "Go Study";
    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);

    return(
        <div>
         <p>learn some information about this person</p>
        <ul>
            <li>Name: {props.name.slice(0, 6)}</li>
            <li>Age: {props.age}</li>
            <ul>
                Hobbies
                {hobbies}
            </ul>
        </ul>        
        <h3>{ageCheck}</h3>
        </div>
    );
}