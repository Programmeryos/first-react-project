import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {
    constructor (props) {
        super(props);
        this.state = {
            filter: ''
        }
    }

    render() {
        const btnsData = [
            {name: 'all', label: 'Все сотрудники'},
            {name: 'like', label: 'На повышение'},
            {name: 'moreThen1000', label: 'Зарплата больше 1000$'}
        ];

        const buttons = btnsData.map(({name, label}) => {
            const active = this.props.filter === name;
            const clazz = active ? 'btn-light' : 'btn-outline-light'
            return (
                <button
                    className={`btn ${clazz}`}
                    type="button"
                    key={name}
                    onClick={() => this.props.onFilterSelect(name)}>
                        {label}
                </button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

export default AppFilter;