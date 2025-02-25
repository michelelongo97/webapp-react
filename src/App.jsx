import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}
