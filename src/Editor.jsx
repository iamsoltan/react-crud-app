import React, { Component, useEffect } from 'react';
import './Editor.css';
import { NavLink,useParams } from 'react-router-dom';

function Editor(props) {
    let { iDelete } = useParams();
    const getDataEditor = () => {
        return [document.getElementById("list-table-title").value, document.getElementById("list-table-rate").value, document.getElementById("list-table-poster").value, document.getElementById("list-table-description").value, document.getElementById("list-table-trailer").value]
    }
    const getDataAdder = () => {
        return [document.getElementById("list-table-titleAdder").value, document.getElementById("list-table-rateAdder").value, document.getElementById("list-table-posterAdder").value, document.getElementById("list-table-descriptionAdder").value, document.getElementById("list-table-trailer").value]
    }



    if (props.mode === "add") {
        return (

            <div id="list-container">
                <table id="list-table">
                    <tr>
                        <th>Movie Title</th>
                        <td><input id="list-table-title" type="text" /></td>
                    </tr>
                    <tr>
                        <th><span className="fa fa-star star-checked" /> Rating</th>
                        <td><input id="list-table-rate" type="number" min="1" max="5" /></td>
                    </tr>
                    <tr>
                        <th>Poster</th>
                        <td><input id="list-table-poster" type="text" /></td>
                    </tr>
                    <tr>
                        <th>Trailer</th>
                        <td><input id="list-table-trailer" type="text" /></td>
                    </tr>
                    <tr>
                        <th>description</th>
                        <td><textarea id="list-table-description" rows="5" cols="100" /></td>
                    </tr>
                </table>
                <div className="cancel-submit">
                    <NavLink exact to="/"><button id="cancel">Cancel</button></NavLink>
                    <NavLink exact to="/"><button id="submit" onClick={() => { props.addMovie(getDataEditor()) }}>Add</button></NavLink>
                </div>
            </div>
        )
    } else if (props.mode === "edit") {
        return (

            <div id="list-container">
                <table id="list-table">
                    <tr>
                        <th>Movie Title</th>
                        <td><input id="list-table-titleAdder" type="text" defaultValue={props.e[iDelete][0] + ""} /></td>
                    </tr>
                    <tr>
                        <th><span className="fa fa-star star-checked" /> Rating</th>
                        <td><input id="list-table-rateAdder" type="number" min="1" max="5" defaultValue={props.e[iDelete][1] * 1} /></td>
                    </tr>
                    <tr>
                        <th>Poster</th>
                        <td><input id="list-table-posterAdder" type="text" defaultValue={props.e[iDelete][2]} /></td>
                    </tr>
                    <tr>
                        <th>Trailer</th>
                        <td><input id="list-table-trailer" type="text" defaultValue={props.e[iDelete][4]} /></td>
                    </tr>
                    <tr>
                        <th>description</th>
                        <td><textarea id="list-table-descriptionAdder" rows="5" cols="100" defaultValue={props.e[iDelete][3]} /></td>
                    </tr>
                </table>
                <div className="cancel-submit">
                    <NavLink exact to="/"><button id="cancel">Cancel</button></NavLink>
                    <NavLink exact to="/"><button id="submit" onClick={() => { props.updateMovie(getDataAdder(), iDelete) }}>Update</button></NavLink>
                    <NavLink exact to="/"><button id="delete" onClick={() => { props.deleteMovie(iDelete) }}>Delete</button></NavLink>
                </div>
            </div>
        )
    }

}

export default Editor;