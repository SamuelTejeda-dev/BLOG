import { memo, useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "../../config/editorTools";
import { createPost } from "../../services/posts";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { generateSlug } from "../../utils/generateSlug";

const themeOptions = [
  "Frontend",
  "Backend",
  "DevOps",
  "React",
  "Express",
  "Design",
  "AI",
  "Database",
  "Security",
];

const Editor = ({ data, onChange, editorBlock }: any) => {
  const ref = useRef<EditorJS | null>(null);
  const [title, setTitle] = useState<string>("");
  const [authorName, setAuthorName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [themes, setThemes] = useState<string[]>([]);
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

  const handleThemeChange = (theme: string, isChecked: boolean) => {
    setThemes((prev) =>
      isChecked ? [...prev, theme] : prev.filter((t) => t !== theme)
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-darkBackground">
      <div className="flex flex-col bg-lightBackground p-8 m-16 text-darkText w-full max-w-7xl  ">
        <h1 className="text-6xl text-center p-4">Create the article</h1>
        <span className="text-2xl">Enter the title of the article</span>
        <input
          className="border-2 border-black p-2 my-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Write the title..."
          type="text"
        />
        <span className="text-2xl">Enter the description</span>
        <input
          className="border-2 border-black p-2 my-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="Write the title..."
          type="text"
        />
        <span className="text-2xl">Enter the name of the author</span>
        <input
          className="border-2 border-black p-2 my-2"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          required
          placeholder="Write the name of the author..."
          type="text"
        />
        <div className="flex flex-wrap gap-4 my-4">
          {themeOptions.map((theme) => (
            <label key={theme} className="flex items-center gap-2 text-lg">
              <input
                type="checkbox"
                checked={themes.includes(theme)}
                onChange={(e) => handleThemeChange(theme, e.target.checked)}
              />
              {theme}
            </label>
          ))}
        </div>
        <span className="text-2xl">Write the content of the article</span>
        <div className="border-2 border-black p-2 my-2" id={editorBlock}></div>
        <div className="mt-4 self-end">
          <button
            className="btn responsive-btn text-darkText font-normal px-4 py-2 rounded-lg"
            disabled={isPending}
            onClick={() =>
              sendData({
                slug: generateSlug(title),
                title,
                author: authorName,
                content: postData.current,
                description,
                themes,
              })
            }
            onKeyDown={(e) =>
              e.key === "Enter" &&
              sendData({
                slug: generateSlug(title),
                title,
                author: authorName,
                content: postData.current,
                description,
                themes,
              })
            }
          >
            CREATE
          </button>
        </div>
        {isError && <span className="text-lg text-red-600"></span>}
      </div>
    </div>
  );
};

export default memo(Editor);
