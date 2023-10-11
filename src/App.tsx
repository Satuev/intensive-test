import { useState } from 'react';
import './App.css';
import { getSum } from './getSum';

function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    return (
        <>
            <h1 style={{ color: 'green' }}>Ваха муха ву хьо???</h1>
            <h1>intensive-test</h1>
            <div className="card">
                <button onClick={() => setCount1((count) => count + 1)}>
                    count is {count1}
                </button>
                &nbsp;
                <button onClick={() => setCount2((count) => count + 1)}>
                    count is {count2}
                </button>
            </div>
            <h2>{getSum(count1, count2)}</h2>
        </>
    );
}

export default App;
