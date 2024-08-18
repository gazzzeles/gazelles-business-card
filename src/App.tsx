import { useEffect, useRef } from "react";
import "./App.css";
import img from "./assets/photo_2024-08-18_12-41-10.jpg";

function App() {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      scrambleText(textElement);
    }
  }, []);
  const scrambleText = (textElement: never) => {
    //@ts-ignore
    const spans = textElement.querySelectorAll<HTMLSpanElement>("span");
    const randomChars = "ぁあぃいぅうぇえぉおかがきぎくぐ";

    function getRandomChar() {
      return randomChars[Math.floor(Math.random() * randomChars.length)];
    }

    spans.forEach(
      (
        span: {
          textContent: string;
          style: { animationDelay: string };
          classList: { add: (arg0: string) => void };
        },
        index: number
      ) => {
        const originalChar = span.textContent;
        let scrambleCount = 0;
        const interval = setInterval(() => {
          if (scrambleCount < 4) {
            span.textContent = getRandomChar();
            scrambleCount++;
          } else {
            clearInterval(interval);
            span.textContent = originalChar;
            span.style.animationDelay = `${index * 0.1}s`;
            span.classList.add("animate");
          }
        }, 2 * (index + 1));
      }
    );
  };

  const handleTextHover = () => {
    const textElement = textRef.current;
    if (textElement) {
      scrambleText(textElement);
    }
  };

  return (
    <>
      <div className="header">
        <div className="hero-container">
          <div className="environment"></div>
          <h2 className="hero glitch layers" data-text="GAZELLES">
            <span>GAZELLES</span>
          </h2>
        </div>
      </div>
      <div className="allmain">
        <section className="bio">
          <div className="text" ref={textRef} onMouseEnter={handleTextHover}>
            <p>
              {Array.from(
                "Приветствую меня зовут Роман и я Frontend/Fullstack-разработчик с 3-х летним опытом  работы.      Мои основные технологии - React и TypeScript. За время работы в IT сталкивался с самыми разными кейсами и всегда был готов брать на  себя тяжелые задачи."
              ).map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </p>
          </div>
          <div className="photo">
            <img src={img} alt="Описание изображения" />
          </div>
        </section>
        <div className="ST" title="404">
          MY STACK
        </div>
        <section className="stack">
          <div className="front">
            <li>REACT</li>
            <li>REDUX</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS/TS</li>
            <li>WebFlow</li>
          </div>
          <div className="back">
            <ul>
              <li>EXPRESS.js</li>
              <li>SEQULIZE</li>
              <li>postgresSQL</li>
              <li>NODE.js</li>
              <li>REST API</li>
              <li>AJAX</li>
            </ul>
          </div>
        </section>

        <div className="ST" title="404">
          MY LINKS
        </div>
        <footer className="footer">
          <div className="contact-info">
            <ul>
              <li>Email: lbodriy@mail.com</li>
              <li>Телефон: +7 (985) 586-53-25</li>
              <li>
                Telegram:{" "}
                <a
                  href="https://t.me/ggazzelles"
                  className="tg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @ggazzelles
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
