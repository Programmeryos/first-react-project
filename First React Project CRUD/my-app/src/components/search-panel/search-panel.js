import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const searchData = e.target.value;
        this.setState({term: searchData});
        this.props.onUpdateSearch(searchData);
    }

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder = "Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdateSearch}/>
        )
    }
}

export default SearchPanel;