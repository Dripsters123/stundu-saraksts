import Stunda from "./Stunda";

function Diena(props){
 const stundasJSX = props.stundas.map((stunda) => {
return <Stunda nosaukums= {stunda} />
 });
    return (
        <>
        <h2>{props.diena}</h2>
        <ol>
  {stundasJSX}
    </ol>
   

        </>
        
    )
}
export default Diena;