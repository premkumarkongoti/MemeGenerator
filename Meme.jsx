import React from "react"
import Data from "./Data"

export default function Meme(){
    const [memeImage, setMemeImage] = React.useState("")

//let memeArray
//let rabomNumber
const [meme,setMeme] = React.useState({
    topText: "",
    bottomText:"",
    randomImage:"http://i.imgflip.com/1bij.jpg"
})

const [allmemeImages, setAllMemeImages] = React.useState(Data)


function getMemeImage(){
    const memesArray = allmemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))

}

    return (
        
        <main>
        <div className="form">
                <input type="text" placeholder="Top-text" className="form-input"/>
                <input type="text" placeholder="Bottom-text" className="form-input"/>
                <button className="form-button" onClick={getMemeImage}>Get a new image </button>
            
            </div>
            <img  src={meme.randomImage} className="meme-Image"/>
        </main>
    
    );
}