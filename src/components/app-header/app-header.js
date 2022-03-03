import './app-header.css';


const AppHeader = () => {
    return (
        <div className="app-header-block">
            <ul className="app-header-item-list">
                <li>
                    <a href="#" className="app-header-item-list_main-logo">
                        <span>Marvel</span> information portal
                    </a>
                </li>
                <li className="app-header-item-list_links">
                    <a href="#">Characters </a>
                    <a href="#">/ Comics</a>
                </li>
            </ul>
        </div>
    )
}

export default AppHeader;