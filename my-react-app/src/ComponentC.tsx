import { useContext } from "react";
import { UserContext } from "./ComponentA.tsx";
import ComponentD from "./ComponentD.tsx";

function ComponentC(){

    const user = useContext(UserContext)

    return(
        <div className="box">
            <h1>ComponentC</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentD />
        </div>
    )

}

export default ComponentC;