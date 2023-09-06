import { useState } from "react";
import Button from "../Button";
import "./navBar.css";

export default function NavBar(props) {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
    props.toggleSidebar(); // Llama a la función del padre para abrir/cerrar la barra lateral
  };

  return (
    <div className={`menu-btn ${sidebarActive ? "active" : ""}`} >
      <div className="hamburger" onClick={toggleSidebar}></div>
      <div className="hamburger" onClick={toggleSidebar}></div>
      <div className="hamburger" onClick={toggleSidebar}></div>
      <div className={`sidebar ${sidebarActive ? "active" : ""}`} id="sidebar">
        <Button text="sdafsafs"  onClick={() => console.log("asdas")} />
        <Button text="sdafsafs"  onClick={() => console.log("asdas")} />
        <Button text="sdafsafs"  onClick={() => console.log("asdas")} />
        <Button text="sdafsafs"  onClick={() => console.log("asdas")} />
        <Button text="sdafsafs"  onClick={() => console.log("asdas")} />
      </div>
    </div>
  );
}
