import {BrowserRouter, Route, Switch} from "react-router-dom";
import Coin from "./routes/Coin/components/Coin";
import Coins from "./routes/Coin/Coins";
import Home from "./routes/Home";
import ToDoList from "./routes/Todo/ToDoList";
import Test from "./routes/Test/Test";
import DragDrop from "./routes/DragDrop/DragDrop";

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
                    {/*<ToDoList />*/}
                    <DragDrop />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router