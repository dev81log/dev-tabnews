import React, { useState } from 'react';

const App = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [showHeart, setShowHeart] = useState(false);

    const handleClick = () => {
        setShowMessage(true);
        setShowHeart(true);
        const heartsContainer = document.createElement('div');
        heartsContainer.className = 'hearts-container';
        document.body.appendChild(heartsContainer);

        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animationDelay = `${Math.random() * 2}s`;
            heartsContainer.appendChild(heart);
        }

        setTimeout(() => {
            heartsContainer.remove();
        }, 3000);
    };

    return (
        <div className="main-container">
            <h1>Tenho uma mensagem para você!</h1>
            <h3>Clique na carta abaixo para ver a mensagem.</h3>
            {!showHeart && (
                <button onClick={handleClick} style={{ fontSize: '5rem', color: 'black' }}>📜</button>
            )}
            {showHeart && (
                <button style={{ fontSize: '5rem', color: 'red' }}>❤️</button>
            )}
            {showMessage && <h1>Laís, amo você!</h1>}
            <style jsx>{`
                body, html {
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .main-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    width: 100%;
                    height: 100%;
                }
                .hearts-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    overflow: hidden;
                }
                .heart {
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    background: red;
                    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                    animation: fall 3s linear infinite;
                }
                @keyframes fall {
                    0% {
                        transform: translateY(-100vh);
                    }
                    100% {
                        transform: translateY(100vh);
                    }
                }
            `}</style>
        </div>
    );
};

export default App;