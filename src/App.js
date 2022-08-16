import React, { useState } from 'react'
import './App.css'
import butcherPigImage from './assets/butcherPig.jpeg'

const App = () => {

  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState("")
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {

    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map(eachWord => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter(vowel => {
        return (
          vowel === "a" || 
          vowel === "e" || 
          vowel === "i" || 
          vowel === "o" || 
          vowel === "u"
        )
     })
      console.log("vowelsArray:", vowelsArray)

      // ACTION ITEM: your Pig Latin logic goes here!

// In order to see English words converted to Pig Latin, as the user of the application, I need to see words beginning with a vowel translated to add "way" the end.

// PSUEDOCODE: 

// variables already declared: 

    //  const translatedWordsArray = arrayOfUserInput.map(eachWord => {
      // console.log("eachWord:", eachWord)

    //   const vowelsArray = eachWord.split("").filter(vowel => {
    //     return (
    //       vowel === "a" || 
    //       vowel === "e" || 
    //       vowel === "i" || 
    //       vowel === "o" || 
    //       vowel === "u"
    //     )
    //  })



  // step 1: if eachWords first letter starts with the value at the first index in vowelsArray, return eachWord + "way"
  // step 2: if eachWord contain "q" and "u"
  // declare a variable name beforeQu to slice string at the index of 0 plus 1 
  // declare a variable named afterQu to store the string that is after the vowel plus 1 
  // reassign eachWord to be assigned afterQu + beforeQu + "ay"
  // step 3: if eachWord does not contain vowels other than "y" but contain the letter "y" return all consonants at the end + "ay"
  // declare a variable named to index of "y"
  // declare a variable named beforeY to slice eachWord at index of 0 & yindex 
  // declare a variable named afterY to slice at yindex
  // reassign eachWord to string together afterY+beforeY+"ay"
  // step 4: if eachWord has multiple consonants, locate indexOfVowel
  // declare a variable called beforeCons to slice the eachWord idex at 0 and indexOfVowel
  // delcare a variable called afterCons to slice indexOfVowel 
  // resassign eachWord to string afterCons + beforeCons + "ay"

  let indexOfVowel = eachWord.indexOf(vowelsArray[0])

  if(eachWord.charAt(0) === vowelsArray[0]) {
return eachWord + "way"
  } else if(eachWord[indexOfVowel] === "u" && eachWord[indexOfVowel -1] === "q") {
    let beforeQu = eachWord.slice(0, indexOfVowel +1) 
    let afterQu = eachWord.slice(indexOfVowel + 1)
      eachWord = afterQu + beforeQu + "ay"
  } else if(eachWord[0] !== "y" && eachWord.includes ("y")) {
    let yindex = eachWord.indexOf("y")
    let beforeY = eachWord.slice(0, yindex)
    let afterY = eachWord.slice(yindex)
    eachWord = afterY + beforeY + "ay"
  } else if(eachWord[0] !== vowelsArray[0]) {
    let afterCons = eachWord.slice(0,indexOfVowel)
    let beforeCons = eachWord.slice(indexOfVowel)
    eachWord = beforeCons + afterCons + "ay"
  }


  // In order to see English words converted to Pig Latin, as the user of the application, I need to see words that have one or more consonants translated by moving all the consonant to the end and add "ay".**


      // ACTION ITEM: this return will be the output of your Pig Latin'd code
      return eachWord 
    })

    // console.log(firstVowel(eachWord))
    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <>
      <h1>Pig Latin Translator</h1>
      <img
        src={butcherPigImage}
        alt="pig with butcher cut names in pig latin"
        className="butcher-pig-image"
      />
      <div className="input-section">
        <h4>Enter phrase to be translated:</h4>
        <input
          type="text"
          className="user-input"
          onChange={handleInput}
          value={userInput}
        />
        <br />
        <button onClick={setUpPreventDefault}>Submit</button>
        <button onClick={restartGame}>Clear</button>
      </div>
      <p>{inputTranslated}</p>
      <footer>&copy; 2022 | Coded by: Your Names Here!</footer>
    </>
  )
}

export default App