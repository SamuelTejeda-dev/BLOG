import { memo, useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "../../config/editorTools";
import "./Editor.css";
import "../../App.css";
import { createPost } from "../../services/posts";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const Editor = ({ data, onChange, editorBlock }: any) => {
  const ref = useRef<EditorJS | null>(null);
  const [slug, setSlug] = useState<string>("");
  const [authorName, setAuthorName] = useState<string>("");
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

  const {
    mutate: sendData,
    isError,
    isPending,
  } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      console.log("Post Creato");
    },
    onError: (error: any) => {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || "Errore generico";
        console.error("Errore:", message);
        alert(message);
      }
    },
  });

  const handleChange = (data: any) => {
    postData.current = data;
  };

  return (
    <div className="container">
      <h1 className="title">Create the article</h1>
      <h2>Enter the title of the article</h2>
      <input
        className="editor-input"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        required
        placeholder="Write the title..."
        type="text"
      />
      <h2>Enter the name of the author</h2>
      <input
        className="editor-input"
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
        required
        placeholder="Write the name of the author..."
        type="text"
      />
      <h2>Write the content of the article</h2>
      <div id={editorBlock}></div>
      <div className="container-options">
        <button
          className="main-button"
          disabled={isPending}
          onClick={() =>
            sendData({ slug, author: authorName, content: postData.current })
          }
          onKeyDown={(e) =>
            e.key === "Enter" &&
            sendData({ slug, author: authorName, content: postData.current })
          }
        >
          CREATE
        </button>
      </div>
      {isError && <p className="error"></p>}
    </div>
  );
};

export default memo(Editor);
