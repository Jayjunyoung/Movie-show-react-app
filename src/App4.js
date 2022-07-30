import {//react router dom에서 컴포넌트를 가져와 쓰는것
    BrowserRouter as Router,
    Routes,
    Route,//react router dom  사용하는 방법
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";//렌더링 해주기위해 임포트는 필수이다
function App4() {//라우터 라우츠 라우트
    return (<Router>
        <Routes>
            <Route path="/movie/:id" element={<Detail />}/>
            <Route path= {`${process.env.PUBLIC_URL}/`}  element={<Home />}/>
        </Routes>
    </Router>
    );
}
//:id or :tomato => 내가 받게될 변수의 이름이 된다

export default App4;