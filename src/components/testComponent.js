import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TestComponent() {
    const [data, setData] = useState(null); // 서버에서 가져온 데이터를 저장
    const [error, setError] = useState(null); // 에러 상태 관리

    useEffect(() => {
        // Axios로 GET 요청
        axios.get('http://localhost:8080/api/test') // Spring Boot 서버의 엔드포인트
            .then(response => {
                setData(response.data); // 서버에서 받은 데이터를 상태에 저장
            })
            .catch(err => {
                setError(err.message); // 에러 발생 시 에러 메시지를 저장
            });
    }, []); // 빈 배열을 넣어 컴포넌트가 처음 렌더링될 때만 실행

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Test Component</h1>
            <p>Data from server: {JSON.stringify(data)}</p>
        </div>
    );
}

export default TestComponent;
