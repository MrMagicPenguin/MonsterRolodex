import {Component} from "react";
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";


class App extends Component {
    constructor() {
        super()

        this.state = {
            monsters: [],
            searchField: ''
        }
        console.log("constructor")
    }

    // * Happens first time the Component renders
    // * stick API Calls in this.
    componentDidMount() {
        this.fetchMonsters()
        console.log("componentDidMount")
    }

    fetchMonsters() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((users) => this.setState(() => {
                    return {monsters: users}
                    },
                ))
    }

    onSearchChange = (e) => {
        const searchField = e.target.value.toLowerCase()
        this.setState(() => {
            return {searchField: searchField}
        })
    }

    render() {
        const {monsters, searchField} = this.state
        const {onSearchChange} = this;

        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField)
        })

        return (
            <div className="App">
                <h1 className='app-title'>kitty rolodex</h1>
                <SearchBox
                    className='monsters-search-box'
                    placeholder='Search Monsters'
                    onChangeHandler={onSearchChange}
                />
                <CardList monsters={filteredMonsters}/>

            </div>
        )

    }

}


export default App;
