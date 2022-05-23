import './app-info.css';

const AppInfo = ({data}) => {

    const counter = data.filter(item => item.increase).length;

    return (
        <div className="app-info">
            <h1>Учёт сотрудников в комании:</h1>
            <h2>Общее количество сотрудников: {data.length}</h2>
            <h2>Премию получат: {counter}</h2>
        </div>
    )
}

export default AppInfo;