import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import EditorJS from "./pages/Editor";
import { useState } from "react";

type editorData = {
  time: number;
  blocks: {
    type: string;
    data: {
      text: string;
      level: number;
    };
  }[];
};

const INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        text: "This is a tutorial of Editor js",
        level: 1,
      },
    },
  ],
};

function App() {
  const [data, setData] = useState<editorData>(INITIAL_DATA);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="manage/resources"
          element={
            <EditorJS
              data={data}
              onChange={setData}
              editorBlock="editorjs-container"
            />
          }
        ></Route>
        <Route path="/contact" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
