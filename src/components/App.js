// create your App component here
import React, {useState, useEffect} from "react";

function App () {

    const [isLoaded, setIsLoaded] = useState(false);
    const [image, setImage] = useState("");

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            setImage(data.message);
            setIsLoaded(true);
        });
    }, []);

    if (!isLoaded) {
        return <p>Loading...</p>
    }

    return (
        <img alt="A Random Dog" src={image} ></img>
    )
}

export default App;