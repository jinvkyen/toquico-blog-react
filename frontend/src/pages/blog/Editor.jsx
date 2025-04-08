import React, { createContext, useContext, useState } from "react";
import { UserContext } from "@/App";
import { Navigate } from "react-router-dom";

const blogStructure = {
  title: "",
  banner: "",
  content: [],
  tags: [],
  des: "",
  author: { personal_info: {} },
};

export const EditorContext = createContext({
  blog: blogStructure,
  setBlog: () => {},
  editorState: "editor",
  setEditorState: () => {},
});

const Editor = () => {
  const [blog, setBlog] = useState(blogStructure);
  const [editorState, setEditorState] = useState("editor");

  let {
    userAuth: { access_token },
  } = useContext(UserContext);

  const contextValue = {
    blog,
    setBlog,
    editorState,
    setEditorState,
  };

  return (
    <EditorContext.Provider value={contextValue}>
      {access_token === null ? (
        <Navigate to='/login' />
      ) : editorState === "editor" ? (
        <Navigate to='/blog-editor' />
      ) : (
        <Navigate to='/publish-form' />
      )}
    </EditorContext.Provider>
  );
};

export default Editor;
