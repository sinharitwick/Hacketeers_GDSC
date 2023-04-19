import Navbar from '../components/Navbar';
import Feed from "../components/Feed";
import FeedAll from "../components/FeedAll";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState, useEffect } from "react";
import Rightbar from '../components/Rightbar';
import Sidebar from "../components/Sidebar";
import Add from '../components/Add';
import axios from "axios"
import { useNavigate } from 'react-router';
function Feedpage() {
  let navigate= useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [userdata, setUserdata] = useState({});
  const [posts, setPosts] = useState([]);
  let id=localStorage.getItem('auth-token')
  const fetchPosts = async () => {
    // const res =await  axios.get(`http://localhost:5000/api/blog/post/${id}`)
    const res =await  axios.get(`https://gdsc_clique-1-x1004983.deta.app/api/blog/post/${id}`)
   const data=res.data;
    console.log(data.blogs)
    setBlogs(data.blogs);
  };
  const [blogsall, setBlogsall] = useState([])
  const fetchallblogs=async()=>{
    // const res =await  axios.get(`http://localhost:5000/api/blog/`)
    const res =await  axios.get(`https://gdsc_clique-1-x1004983.deta.app/api/blog/`)
   const data=res.data;
    console.log(data.blogs)
    setBlogsall(data.blogs);
  }
  const fetchdata=async()=>{
      // const ress=await axios.get(`http://localhost:5000/api/user/getuser/${id}`);
      const ress=await axios.get(`https://gdsc_clique-1-x1004983.deta.app/api/user/getuser/${id}`);
      const d=ress.data;
      setUserdata(d.data);
  }
  useEffect(() => {
if(!localStorage.getItem('auth-token'))
navigate('/login');
  
    fetchPosts();
    fetchdata();
    fetchallblogs()
  }, [])
  const [switchfeed, setSwitchfeed] = useState(false);
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
        <Sidebar setMode={setMode} mode={mode} setSwitchfeed={setSwitchfeed} switchfeed={switchfeed}/>
          {!switchfeed? <FeedAll blogsall={blogsall}   fetchposts={fetchallblogs}/>: <Feed blogs={blogs} user={userdata}  fetchposts={fetchPosts} /> }
          <Rightbar />
        </Stack>
        <Add user={userdata} fetchposts={fetchPosts}/>
      </Box>
    </ThemeProvider>
   </>
  );
}

export default Feedpage;