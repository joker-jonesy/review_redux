import React from "react";
import {Route, Routes} from "react-router-dom";
import Muppets from "./components/muppets";
import Movies from "./components/movies";
import Navigation from "./components/navigation";
import MuppetPage from "./components/muppets/MuppetPage";
import MoviePage from "./components/movies/MoviePage";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Routes>
                <Route index element={<Muppets/>}/>
                <Route path={"movies"} element={<Movies/>}/>
                <Route path={"muppets/:id"} element={<MuppetPage/>}/>
                <Route path={"movies/:id"} element={<MoviePage/>}/>
            </Routes>
        </div>
    );
}

export default App;
