import {Component} from "react";
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.fruits = ['apple', 'banana', 'mango', 'grapes']
        this.state = {
            monsters: []
        }
        console.log("constructor")
    }

    // * Happens first time the Component renders
    // * stick API Calls in this.
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((users) => this.setState(() => {
                    return {monsters: users}
                },
                () => console.log(this.state)
                )
            )
        console.log("componentDidMount")
    }

    // Takes in onChange event and State
    // Returns shallow copy of state where query matches entry in state.
    // updates state
    filterMonsters(arr, query) {
        return arr.filter((el) => el.name.toLowerCase().includes(query.toLowerCase()))

    }

    render() {
        console.log("render")
        return (
            <div className="App">
                <input className='search-box'
                       type='search'
                       placeholder='Search Monsters'
                       onChange={(e) => {
                            this.setState(() => {
                                        return {monsters: this.filterMonsters(this.state.monsters, e.target.value)}
                                        }
                                )
                            }
                       }
                />
                {
                    this.state.monsters.map((monster) => {
                            return <h1 key={monster.name}>{monster.name}</h1>
                        }
                    )
                }

            </div>
        )

    }

}


export default App;
