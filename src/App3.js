import {useEffect, useState } from 'react';

function App3() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);//json 데이터들을 컴포넌트에 넣기위해

    useEffect(() => {//로딩될때 한번만 실행할거야
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then(response => response.json())//json을 가져오는 함수
        .then(json => {
            setCoins(json);
            setLoading(false);
        });
    }, []);//json에는 지금 저 링크에 있는 데이터가 모두 있는것
    return (//network에 api 정보를 얻을수있다.
    <div>
        <h1>The Coins!: {loading ? "" : `(${coins.length})`}</h1>
        {loading ? <strong>Loading</strong> : <select>
            {coins.map((coin, index) => <option key={index}> = {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</option>)}
        </select>}
    </div>
    )//map을 하고 li에는 key 안줘도됌
}//html에서 자바스크립트 변수 쓸려면 {} 필수

//코드 챌린지 해보기!!

export default App3