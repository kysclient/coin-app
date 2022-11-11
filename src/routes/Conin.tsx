import {useLocation, useParams} from "react-router-dom";
import {useState} from "react";
import styled from "styled-components";

interface RouteParams {
    coinId: string;
}
interface RouteState {
    name:string;
}

export const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`
export const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Title = styled.h1`
  color: ${props => props.theme.accentColor};
  font-size: 48px;
`

export const Loader = styled.span`
  text-align: center;
  display: block;
`

function Coin() {
    const [loading, setLoading] = useState(true);
    const { coinId } = useParams<RouteParams>();
    const { state } = useLocation<RouteState>();
    return (
        <Container>
            <Header>
                <Title>{state?.name || "Loading"}</Title>
            </Header>

            {
                loading ? <Loader>Loading...</Loader>
                    : <h1> hi </h1>
            }
        </Container>
    )
}

export default Coin