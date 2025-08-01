import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WithLayout from "./components/Layout/WithLayout";
import EditorJS from "./pages/Editor/Editor";
import { useState } from "react";
import WithoutLayout from "./components/Layout/WithoutLayout";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Gradient from "./components/gradient/Gradient";

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
        text: "Type here...",
        level: 1,
      },
    },
  ],
};

function App() {
  const [data, setData] = useState<editorData>(INITIAL_DATA);

  return (
    <Router>
      <Routes>
        <Route element={<WithLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/prova" element={<Gradient />}></Route>
        </Route>

        <Route path="manage/contacts" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<WithoutLayout />}>
            <Route
              path="manage/resources"
              element={
                <EditorJS
                  data={data}
                  onChange={(newData: any) => {
                    console.log("Editor changed:", newData);
                    setData(newData); // ✅ OK: chiaro che stai ricevendo solo `data`, non un evento
                  }}
                  editorBlock="editorjs-container"
                />
              }
            />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
