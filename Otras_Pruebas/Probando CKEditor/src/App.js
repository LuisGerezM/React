import "./App.css";
import { Button } from "react-bootstrap";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function App() {
  const [state, setState] = useState({
    content: "",
  });

  const updateContent = (newContent) => {
    setState({
      content: newContent,
    });
  };

  const onChange = (evt, editor) => {
    console.log("onChange fired with event info: ", evt);
    console.log("onChange data: ", editor.getData());
    var newContent = editor.getData();
    setState({
      content: newContent,
    });
  };

  const onBlur = (evt) => {
    console.log("onBlur event called with event info: ", evt);
  };

  const afterPaste = (evt) => {
    console.log("afterPaste event called with event info: ", evt);
  };

  return (
    <div className="App d-flex justify-content-center align-items-center" style={{ background: "gray", minHeight: "100vh" }}>
      <CKEditor activeClass="p10" editor={ClassicEditor} content={state.content} onChange={(event, editor) => onChange(event, editor)} />
    </div>
  );
}

export default App;
