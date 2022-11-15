import styled from "styled-components";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;
import { useQuery } from "react-query";
import {fetchCoins} from "../api";

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

interface ICoin {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string
}


function Coins() {
    const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins)

    return (
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>

            {
                isLoading ? <Loader>Loading...</Loader>
                    :
                    <CoinList>
                        {
                            data?.slice(0, 100).map((coin, idx) => (
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