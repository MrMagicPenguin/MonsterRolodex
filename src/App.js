import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import {useEffect, useState} from "react";


const App = () => {
    const [searchField, setSearchField] = useState('')
    const [monsters, setMonsters] = useState([])
    const [filteredMonsters, setFilteredMonsters] = useState(monsters)

    console.log("render")

    // initial data load
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((users) => setMonsters(users))
    }, [])

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField)
        })

        setFilteredMonsters(newFilteredMonsters)
    }, [monsters, searchField])

    const onSearchChange = (e) => {
        const searchFieldString = e.target.value.toLowerCase()
        setSearchField(searchFieldString)
    }

    return (
        <div className='App'>
            <h1 className='app-title'>Kitty Rolodex</h1>

            <SearchBox
                className='monsters-search-box'
                onChangeHandler={onSearchChange}
                placeholder='Search kitties'
            />

            <CardList
                monsters={filteredMonsters}
            />

        </div>

    )
}

export default App
