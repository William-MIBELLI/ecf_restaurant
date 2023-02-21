import { Outlet } from "react-router-dom"


const Navigation = () => {
    return (
        <div>
            <div>Je suis Navigation</div>
            <Outlet/>
        </div>
    )
}

export default Navigation