import './Styles/Projects.css'
import Code from './codequiz.png'

export default function  Projects (){
    return (
        <>
        <header> But....what can you do??</header>
        <h1>
            As a new developer I have never felt more like a tadpole in a huge pond called the tech world.
Especially in Seattle, the market is competitive but, equally fruitful. I learned the hard way that I needed to walk the walk and not just talk the talk.
Yes, I can say I know how to use React, make a CRUD website or, utilize API's but, there is no better way for your skills to stand out than to actually SHOW what you can do!
So...let me show you what this Southern Girl is made of! 🤓
        </h1>
<div className="projcontainer">
<header className="header1"> Test your Coding Knowledge</header>
    <div className="proj1">
<p className="codedesc">
During my time at the UW, a coding quiz was one of the first assignments I had to create.
At that time, I struggled just to understand what I was even looking at. I decided for my portfolio projects, I would utilize React
as much as possible. I find the library so much more streamline! Click <a href="https://multichoicecodequiz.herokuapp.com/"> Here </a> to try it out. (this app is mobile responsive).
</p>
<div className="codeimg">
<img src={Code} alt="Logo" />
</div>
</div>
 <div className="proj2">
 <header className="header2"> Virtual Keyboard</header>
<p>
Lorem ipsum is placeholder text commonly used in the graphic, print, 
and publishing industries for previewing layouts and visual mockups.
</p>
 </div>
 <div className="proj3">
 <header className="header3"> A is for Apple</header>
<p>
Lorem ipsum is placeholder text commonly used in the graphic, print, 
and publishing industries for previewing layouts and visual mockups.
</p>
 </div>
 <div className="proj4">
 <header className="header4"> Weather Dashboard</header>
<p>
Lorem ipsum is placeholder text commonly used in the graphic, print, 
and publishing industries for previewing layouts and visual mockups.
</p>
 </div>
 <div className="proj5">
 <header className="header5"> Wine Festival Project</header>
<p>
Lorem ipsum is placeholder text commonly used in the graphic, print, 
and publishing industries for previewing layouts and visual mockups.
</p>
 </div>


</div>





        </>
    )
}