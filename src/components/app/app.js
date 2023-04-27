import AppInfo from '../app-info/app-info';
import SerachPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';


function App() {

    const data = [
        {name: 'Lalo S.', salary: 2800, increase: false, promotion: false,id:1},
        {name: 'Soul G.', salary: 3400, increase: false, promotion: false,id:2},
        {name: 'Walter W.', salary: 5000, increase: false, promotion: false,id:3},
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SerachPanel/>
                <AppFilter/>               
            </div>

            <EmployersList data={data}/>
            <EmployersAddForm/>
        </div>
    );
}

export default App;