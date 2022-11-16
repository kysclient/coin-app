import {BrowserRouter, Route, Switch} from "react-router-dom";
import Coin from "./routes/Coin/Coin";
import Coins from "./routes/Coin/Coins";
import Home from "./routes/Home";
import ToDoList from "./routes/Todo/ToDoList";

interface IRouterProps {
}

function Router({}: IRouterProps) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/:coinId">
                    <Coin />
                </Route>


                <Route path="/">
                    {/*<Coins />*/}
                    <ToDoList />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router