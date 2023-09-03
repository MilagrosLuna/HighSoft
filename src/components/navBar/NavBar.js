import Button from "../Button";
import "./navBar.css";

export default function NavBar(props) {
  return (
    <div className="menu-btn" >
      <div className="hamburger" onClick={props.toggleSidebar}></div>
      <div className="hamburger" onClick={props.toggleSidebar}></div>
      <div className="hamburger" onClick={props.toggleSidebar}></div>
      <div className="sidebar" id="sidebar">
        <Button text="sdafsafs"  onclick={()=>console.log("asdas")} />
        <Button text="sdafsafs"  onclick={()=>console.log("asdas")} />
        <Button text="sdafsafs"  onclick={()=>console.log("asdas")} />
        <Button text="sdafsafs"  onclick={()=>console.log("asdas")} />
        <Button text="sdafsafs"  onclick={()=>console.log("asdas")} />
      </div>
    </div>
  );
}
