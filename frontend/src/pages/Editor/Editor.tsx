import { memo, useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "../../config/editorTools";
import "./Editor.css";
import "../../App.css";
import { createPost } from "../../services/posts";
const Editor = ({ data, onChange, editorBlock }: any) => {
  const ref = useRef<EditorJS | null>(null);
  const postData = useRef<any>(null);

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: editorBlock,
        data: data,
        tools: EDITOR_JS_TOOLS,
        async onChange(api, _) {
          const savedData = await api.saver.save();
          handleChange(savedData);

          onChange(savedData);
        },
      });
      ref.current = editor;
    }

    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  const handleChange = (data: any) => {
    postData.current = data;
  };

  const handleCreatePost = async () => {
    if (!postData.current) return;
    try {
      const response = await createPost(postData.current);
      console.log(response);
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Create the article</h1>
      <div id={editorBlock}></div>
      <div className="container-options">
        <button className="main-button" onClick={handleCreatePost}>
          SEND
        </button>
      </div>
    </div>
  );
};

export default memo(Editor);
