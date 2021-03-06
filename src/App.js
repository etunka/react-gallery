import React, {useState} from "react";
import "./App.scss";
import { Button } from './components/Button';
import { DisplayedImage } from './components/DisplayedImage';
import { ThumbnailImage } from './components/ThumbnailImage';


const imageList = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
const defaultIndex = 0;

function goToNext(length, currentIndex){
  let newIndex
  if(currentIndex < length - 1) {
    newIndex = currentIndex + 1
  } else {
    newIndex = 0
  }
  return newIndex;
}

function goToPrevious(length, currentIndex){
  let newIndex
  if(currentIndex <= 0) {
    newIndex = length - 1
  } else {
    newIndex = currentIndex - 1
  }
  return newIndex;
}

export default function App() {
  const [displayedIndex, setImageIndex] = useState(defaultIndex);

  return (
    <div className="App">
      <h1>React Image Gallery</h1>
      <div className="full-img">
        <DisplayedImage src={`images/${imageList[displayedIndex]}`}/>
        <div className="overlay hidden"></div>
        <Button buttonClass={"nav-btn nav-btn--left"} onClick = {() => setImageIndex(goToPrevious(imageList.length, displayedIndex))}><img src="./left-chevron.png" alt="left"/></Button>
        <Button buttonClass={"nav-btn nav-btn--right"} onClick = {() => setImageIndex(goToNext(imageList.length, displayedIndex))}><img src="./right-chevron.png" alt="right"/></Button>
      </div>
      <div className="thumb-bar">
        {imageList.map((image, index) => <ThumbnailImage src={`./images/${image}`} key={index} onClick = {() => setImageIndex(index)}  /> )}
      </div>
    </div>
  );
}
