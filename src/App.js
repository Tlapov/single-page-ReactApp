import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './components/home/home';
import NewPost from './components/newPost/newPost';
import Post from './components/post/post';
import About from './components/about/about';
import Missing from './components/missing/missing';
import PostsPage from './components/postsContent/PostsPage';
import EditPost from './components/editPost/EditPost';
import { useState, useEffect } from "react";
import { format } from "date-fns";
import api from "./api/data";


function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const displaydata = async () => {
      try {
        const fetch = await api.get("/posts");
        setPosts(fetch.data);
      } catch (err) {
        console.log(err)
      }
    }
    displaydata();
  }, [])

  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));

    setSearchResult(filteredResults.reverse());
  }, [posts, search])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const date = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: newPostTitle, date, body: newPostBody };

    try {
      const fetch = await api.post("/posts", newPost);
      setPosts([...posts, fetch.data])
      setNewPostTitle("");
      setNewPostBody("");
      navigate("/");
    } catch (err) {
      console.log(`Greška: ${err}`)
    }
  };
  const handleEdit = async (id) => {
    const date = format(new Date(), "MMMM dd, yyyy pp");
    const editPost = { id, title: editTitle, date, body: editBody }
    try {
      const response = await api.put(`/posts/${id}`, editPost)
      setPosts(posts.map(post => post.id === id ? { ...response.data } : post));
      setEditTitle('');
      setEditBody('');
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  const handleDelete = async (deleteItem) => {
    try {
      await api.delete(`/posts/${deleteItem}`)
      let newPosts = posts.filter((post => post.id !== deleteItem))
      setPosts(newPosts)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <Routes>
      <Route path='/' element={<Home search={search} setSearch={setSearch} />} >
        <Route index element={<PostsPage posts={searchResult} />} />
        <Route path='post'>
          <Route index element={
            <NewPost newPostTitle={newPostTitle}
              setNewPostTitle={setNewPostTitle}
              newPostBody={newPostBody}
              setNewPostBody={setNewPostBody}
              handleSubmit={handleSubmit}
            />}
          />
          <Route path=':id' element={<Post posts={posts} handleDelete={handleDelete} />} />
        </Route>
        <Route path='/edit/:id' element={
          <EditPost
            posts={posts}
            editTitle={editTitle}
            setEditTitle={setEditTitle}
            editBody={editBody}
            setEditBody={setEditBody}
            handleEdit={handleEdit}
          />}
        />
        <Route path='about' element={<About />} />
        <Route path='missing' element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
