import { useState, useEffect } from "react";
import React from 'react'

export default function Search(props) {

    const[items, setItems] = useState('');
    const[filter,setFilter] = useState('');
    const[history, setHistory] = useState([]);
    const handleOnChange = (e) => {
        setFilter(e.target.value)
        setHistory(e.target.value)
    }
    const fetchData = (category) => {
        fetch(`https://hn.algolia.com/api/v1/search?query=${category}&page=0`)
          .then(response => {
            return response.json()
          })
          .then(data => {
            setItems(JSON.stringify(data))
          })
    }
    
    useEffect(() => {
        fetchData(filter)
    }, [])

    

  return (
    <div>
        <h1>My Hacker Stories</h1>
        <label>Search:</label>
        <textarea value = {filter} onChange={handleOnChange} rows={1}></textarea>
        {/* history */}
        <button>Submit</button><br/>
        items.map((item) => {
            <textarea rows={1}>{this.state.items.title} by {items.author}</textarea>
        })  
        
    </div>
  )
}
