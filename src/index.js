import ReactDOM from 'react-dom'
import "./index.css"

function Booklist(){
    return (<div className='booklist'> 
           <Book/>
           <Book/>
           <Book/>
           <Book/>
           <Book/>
           <Book/>
           <Book/>
           <Book/>
    </div>)
}

function Book(){
   return( <article className='book'>
         <Img/>
         <Title/>
         <Aurther/>
          </article>
   )
}

const Img=()=> <img width={'300px'} src='https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL600_SR600,400_.jpg' alt=''/>

const Title =()=> <p>I Love You to the Moon and Back</p>

const Aurther=()=> <p>Amelia Hepworth</p>

ReactDOM.render(<Booklist/>,document.getElementById("root"))
