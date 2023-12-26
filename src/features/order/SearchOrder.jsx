import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    function submitHandle(e) {
        console.log(e);
        e.preventDefault()
        if (query) navigate(`/order/${query}`);
        setQuery("");
    }
    return (
        <form onSubmit={(e) => submitHandle(e)}>
            <input
                type="text"
                placeholder="Search order#"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </form>
    );
}

