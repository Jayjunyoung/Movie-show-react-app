import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from 'react';

function App() {
  const[counter, setValue] = useState(0);
  const[keyword, setKeyWord] = useState("");
  const onChange = (event) => {
    setKeyWord(event.target.value);
  }
  const onClick = () => {
    setValue((prev) => prev + 1);
  };
  console.log("run all time");
  const iRunOnlyOnce = () => {
    console.log("Call the API");

  }//첫번재인자: 한번 실행 되어야 할 함수 -> Call the API
  useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5) {//검색을 해야 SEARCHFOR이 뜸
      console.log("SEARCH FOR", keyword);
    } //5가 넘어가야 search for이 뜸
  }, [keyword]);//keyword가 변화할때만
  //코드를 실행
  useEffect(() => {
    console.log("keyword & counter change");
  }, [keyword, counter]);
  return ( //app.module.css의 title을 객체로 적용
    <div>
      <input value = {keyword} onChange={onChange} type="text" placeholder="Search here..."></input>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
      <Button text={"Continue"}/> 
    </div>
  );//Button이라는 컴포넌트에  text를 넘기고({text}) return해서 button에다 css까지 적용시킴

}//h1에도 css 주기위해 임포트 해오고 className={styles.title}

export default App;
