import styled from "styled-components";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;

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
const CoinList = styled.ul`
`
const Coin = styled.li`
  background-color: white;
  color: ${props => props.theme.bgColor};
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 1px 1px 5px whitesmoke;

  a {
    padding: 10px;
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
  }

  &:hover {
    a {
      color: ${props => props.theme.accentColor};
    }
  }
`
export const Title = styled.h1`
  color: ${props => props.theme.accentColor};
  font-size: 48px;
`

export const Loader = styled.span`
  text-align: center;
  display: block;
`

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;

`

interface CoinInterface {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string
}


function Coins() {
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await response.json()
            setCoins(json.slice(0, 100))
            setLoading(false);
        })()
    }, [])

    return (
        <Container>
            <Header>
                <Title>coins</Title>
            </Header>

            {
                loading ? <Loader>Loading...</Loader>
                    :
                    <CoinList>
                        {
                            coins.map((coin, idx) => (
                                <Coin key={coin.id}>
                                    <Link to={{
                                        pathname: `/${coin.id}`,
                                        state: {name: coin.name},

                                    }}>
                                        <Img
                                            src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}/>
                                        {coin.name} &rarr;
                                    </Link>

                                </Coin>
                            ))
                        }
                    </CoinList>
            }
        </Container>
    )
}

export default Coins