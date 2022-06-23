import "./Styles/Home.css"
import TypeAnimation from 'react-type-animation';
export default function  Home (){
    return (
        <>
<div className="homeContainer">
<TypeAnimation
className="textanimation"
      cursor={true}
      sequence={["IF YOU'RE GOING TO LIVE, LEAVE A LEGACY. MAKE A MARK ON THE WORLD THAT CAN'T BE ERASED.-MAYA ANGELOU", 4000, '']}
      wrapper="h2"
    />
   </div>
 </>

    ) 


}