import {Link} from "react-router-dom";
import {Container, Overview, OverviewItem} from "./Coin/Coin";
import {Header} from "./Coin/Coins";


function Home() {
    return (
        <Container>
            <Header>
                <Overview>
                    <OverviewItem>
                        <Link to="/coin">
                            코인
                        </Link>
                    </OverviewItem>
                </Overview>
                <Overview>

                    <OverviewItem>
                        <Link to="/todo">
                            Todo
                        </Link>
                    </OverviewItem>
                </Overview>



            </Header>
        </Container>
    )
}

export default Home