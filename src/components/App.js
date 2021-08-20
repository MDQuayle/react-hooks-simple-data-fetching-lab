import React, { useEffect, useState } from "react";
function App(){
    const [newImage, setNewImage] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(()=> {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then ((response) => response.json())
        .then (data => {setNewImage(data.message)
        setIsLoaded(true);
        })
    },[])
    if (!isLoaded) return <p>Loading...</p>;
    return (
        <img src={newImage} alt="A Random Dog"></img>
    )
}

export default App;