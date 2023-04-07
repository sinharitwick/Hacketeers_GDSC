import Navbar from '../components/Navbar';
import Feed from "../components/Feed";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState, useEffect } from "react";
import Rightbar from '../components/Rightbar';
import Sidebar from "../components/Sidebar";
import Add from '../components/Add';
import axios from "axios"

function Feedpage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = axios.get("http://localhost:3000/api/blog/")
      console.log(res)
    };
    fetchPosts();
  }, [])
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
   <>
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
   </>
  );
}

export default Feedpage;