
import About from './About';
import './App.css';
import Navbar from './Navbar';
 import TextForm from './TextForm';



function App() {
  return (
    <>
    
<Navbar titile= "TextUtils"  aboutText = "About Textutils" />
<div className="container  my-3">
 <TextForm  heading ="Enter the Text to Analyze Below "/>  
<About/>
</div>


    </>
  );
}

export default App;

// the above code is a combination of html and javascript and hence it is know as JSX.
