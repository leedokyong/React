import logo from './logo.svg';
import './App.css';

function Header(props) {
    console.log('props', props, props.title);
    return <header>
        <h1><a href={"/"}>{props.title}</a></h1>
    </header>
}

function Nav(props) {
    const lis = []
    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        lis.push(<li key={t.id}><a href={'/read'+t.id}>{t.title}</a></li>);
    }
    return <nav>
        <ol>
            {lis}
        </ol>
    </nav>
}

function Article(props) {
    console.log('props', props, props.title)
    return <article>
        <h2>{props.title}</h2>
        {props.body}
    </article>
}

function App() {
    // const를 주면 뒤에 변수를 변경불가능하다 코드가 더 튼튼해짐
    const topics = [
        {id:1, title:'html', body:'html is ...'},
        {id:2, title:'css', body:'css is ...'},
        {id:3, title:'javascript', body:'javascript is ...'}
    ]
    return (
        // 이걸 컴퍼넌트라고 한다.
        <div>
            <Header title="REACT"></Header>
            <Nav topics = {topics} ></Nav>
            <Article title="Welcome" body="Hello, WEB"></Article>
        </div>
    );
}

export default App;
