import React from 'react'
import Memedata from './Memedata'

function Meme() {
 const [meme, setMeme] = React.useState({
  topText: "",
  bottomText : "",
  randomImage: "./Images/image-2.jpg"
 })

function getMemeImage() {
  const memesArray = Memedata.data.memes
  const randomNumber = Math.floor(Math.random() * memesArray.length)
   const image = memesArray[randomNumber].img  
  setMeme(prevMeme => ({
    ...prevMeme,
    randomImage: image
  }))
}
  return (
    <main>
      <form action="" className='form'>
        <input 
            type="text" 
            className='form--input'
            placeholder='First-text'/>
        <input
            type="text"
            className='form--input'
            placeholder='Second-text' />
        <button className='form--button' onClick={getMemeImage}>Get a new meme image 🖼</button>
        <img src={meme.randomImage} alt='' className='meme--image' />
      </form>
    </main>
  )
}

export default Meme
