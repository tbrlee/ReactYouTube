import React, {Component} from 'react'; //const Component = React.Component

/*const SearchBar = () => {
    return <input />;
}*/

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''}
    }

    render() {
        
            return (
                <div>
                    <input 
                        value={this.state.term}
                        onChange={e => this.setState(e.target.value)}/> 
                </div>
                   );
             }

    /*
        //onChange={this.onInputChange}
        onInputChange(e) {
        console.log(e.target.value)
    }*/
}

export default SearchBar;