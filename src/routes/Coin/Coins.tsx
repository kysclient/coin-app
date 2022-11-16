import styled from "styled-components";
import {Link, Route, Switch, useHistory} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;
import { useQuery } from "react-query";
import {fetchCoins} from "../../apis/coin-api";
import {Helmet} from "react-helmet";
import {useSetRecoilState} from "recoil";
import {isDarkAtom} from "../../atoms";
import {BackBtn} from "./Coin";

export const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`
export const Header = styled.header`
  position:relative;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CoinList = styled.ul`
`
const Coin = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${props => props.theme.textColor};
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid white;
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

interface ICoinsProps {
}

function Coins() {
    const setDarkAtom = useSetRecoilState(isDarkAtom)
    const toggleDarkAtom = () => setDarkAtom(prev => !prev)
    const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins)
    return (
        <Container>
            <Helmet>
                <title>코인</title>
            </Helmet>
            <Header>
                {/*<Link to="/">*/}
                {/*    <BackBtn>&larr;</BackBtn>*/}
                {/*</Link>*/}

                <Title>코인</Title>
                <button onClick={toggleDarkAtom}>Toggle</button>

            </Header>

            {
                isLoading ? <Loader>Loading...</Loader>
                    :
                    <>
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


                    </>

            }
        </Container>
    )
}

export default Coins