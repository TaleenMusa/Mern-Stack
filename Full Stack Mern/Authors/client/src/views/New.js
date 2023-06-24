import React, { useState} from 'react';
import CreateForm from '../components/CreateForm'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const New = () => {
    const [allAuthor, setAllAuthor] = useState([]);
    const navigate = useNavigate();

    const handelSubmit = (name) => {

        axios.post('http://localhost:8000/api/authors', {name}

        )
            .then(res => {

                setAllAuthor([...allAuthor, res.data.authors])
            })
            .catch(err => console.log(err));
        navigate("/");
    }

    return (
        <div>
            <CreateForm initialName="" myFun={handelSubmit} />

        </div>
    )
}

export default New
