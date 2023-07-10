import React, { useState } from "react";
import "./App.css";

const App = () => {
  async function handleChat1(humanMsg) {
    const response = await fetch(
      `http://127.0.0.1:8080/chat1?human_msg=${text}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ human_msg: humanMsg }),
      }
    );
    const data = await response.json();
    return data.response;
  }
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const [data, setData] = useState("");
  const showOutput = async (e) => {
    e.preventDefault();
    const chatResponse = await handleChat1(text);
    setData(chatResponse);
    setShow(true);
  };
  return (
    <>
      <h1>Project Idea Analyzer</h1>
      <div className="main">
        <form method="post">
          <input
            type="text"
            placeholder="Explore Your Idea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            name="idea"
          />
          <input type="submit" value="Generate" onClick={showOutput} />
        </form>
      </div>
      {show && (
        <div className="output">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Related Systems</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Similar Systems that have been built having the nearly the same
                idea
              </h6>
              <hr />
              <p className="card-text">
                <ol>
                  <li>{data}</li>
                  <li>Slack</li>
                  <li>Trello</li>
                </ol>
              </p>
            </div>
          </div>{" "}
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Research Papers</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Research done based on the similar idea
              </h6>
              <hr />

              <p className="card-text">
                <ol>
                  <li>
                    <a href="#" className="card-link">
                      Jira
                    </a>
                  </li>
                  <li>
                    <a href="#" className="card-link">
                      Trello
                    </a>
                  </li>
                  <li>
                    <a href="#" className="card-link">
                      Slack
                    </a>
                  </li>
                </ol>
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Recommended Technologies</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Recommended Technology/Stack to build this system
              </h6>
              <hr />

              <p className="card-text">
                <ol>
                  <li>React</li>
                  <li>Node</li>
                  <li>Mongo</li>
                </ol>
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Platform</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Wed/App Based
              </h6>
              <hr />

              <p className="card-text">Web Based</p>
            </div>
          </div>{" "}
        </div>
      )}

      {/* <table>
          <tr>
            <th>Related Systems</th>
            <th>Research Papers</th>
            <th>Recommended Technologies</th>
            <th>Platform</th>
          </tr>
          <tr>
            <td>
              <ol>
                <li>Jira</li>
                <li>Slack</li>
                <li>Trello</li>
              </ol>
            </td>
            <td>
              <ol>
                <li>https://www.google.com</li>
                <li>https://www.google.com</li>
                <li>https://www.google.com</li>
              </ol>
            </td>
            <td>
              <ol>
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
              </ol>
            </td>
            <td>Web Based</td>
          </tr>
        </table> */}
    </>
  );
};

export default App;
