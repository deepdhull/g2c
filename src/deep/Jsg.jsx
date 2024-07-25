const { useState } = require("react")

function Jsg() {
   
    var [chu, chngeChu] = useState(); //69/
    // const [person, setPerson] = useState({
    //     father: "",
    // });

    // function handleUpdate(event) {
    //     const { name, value } = event.target;
    //     setPerson({ ...person, [name]: value });
    // }
    
    function doUp(event)
    {
        // chu = event.target.value;

        chngeChu(event.target.value);

    }

    return (
        <>
            <div>Father</div>
            <br />
            <input type="text" name="father" onChange={doUp}  />
            {chu}
            {/* Additional JSX can go here */}
        </>
    );
}
export default Jsg;