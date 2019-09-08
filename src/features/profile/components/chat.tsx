import React from "react";
import { AppContextConsumer } from "../../../components/App/AppState";

const Chat: React.FC = () => {
  return (
    <div>
      <AppContextConsumer>
        {changeText => (
          <>
            <input
              id="username"
              type="text"
              onChange={event => {
                changeText.changeText(event.target.value);
              }}
            />
            <p>{changeText.text}</p>
          </>
        )}
      </AppContextConsumer>
    </div>
  );
};

export default Chat;
