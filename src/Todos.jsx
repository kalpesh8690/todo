import React, { useState } from "react";
import "./App.css";
import { Box, Typography, Input, Button } from "@mui/material";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { ArrowRight } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const Clear = styled(Button)`
  &:hover {
    background: red;
    color: white;
  }
`;
const TaskComplete = styled(Button)`
  &:hover {
    background: green;
    color: white;
  }
`;

export default function Todos() {
  const [todo, setTodo] = useState([]);
  const [complateTodo, setComplateTodo] = useState([]);
  const [complateTodoPrint, setComplateTodoPrint] = useState([]);
  var value;

  const TodoSet = () => {
    value === undefined
      ? window.alert("Please Enter Value")
      : setTodo([...todo, value]);
  };
  const handleChange = (e) => {
    value = e.target.value;
  };
  const ClearTodo = () => {
    setTodo([]);
  };

  const getData = (i) => {
    setComplateTodo([...complateTodo, i]);
    const idData = todo.filter((d) => d !== i);
    setTodo(idData);
  };

  const ComplateT = () => {
    setComplateTodoPrint(complateTodo);
  };

  return (
    <>
      <div className="todo-main">
        <Box
          sx={{
            margin: "5px",
            height: "auto",
            width: "500px",
            border: "white solid 1px",
            background:
              "linear-gradient(rgb(32, 32, 32,20%),rgb(32, 32, 32,20%))",
          }}
        >
          <Typography
            sx={{
              color: "white",
              textAlign: "center",
              fontSize: "50px",
              fontFamily: "sans-serif",
            }}
          >
            My Todos
          </Typography>
          <div className="input-main">
            <TextSnippetIcon
              sx={{
                color: "white",
                marginTop: "15px",
              }}
              size="large"
              margin="0px"
              color="undefined"
            ></TextSnippetIcon>
            <Input
              color="primary"
              placeholder="input todo text"
              autoFocus="true"
              autoComplete="true"
              inputComponent="input"
              sx={{
                color: "white",
                margin: "15px",
              }}
              onChange={(e) => handleChange(e)}
            ></Input>
            <Button
              size="undefined"
              variant="contained"
              sx={{
                marginTop: "15px",
                marginLeft: "-10px",
                height: "2rem",
                cursor: "pointer",
                display: "flex",
                justifySelf: "center",
              }}
              onClick={() => TodoSet()}
            >
              Set
            </Button>
          </div>

          {todo.map((d, i) => {
            return (
              <div className="todo-map">
                <div className="todo-list-main">
                  <Typography
                    key={i}
                    sx={{
                      color: "white",
                      overflow: "hidden",
                      textAlign: "left",
                      minWidth: "300px",
                      maxWidth: "300px",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    <RocketLaunchIcon
                      sx={{
                        color: "yellow",
                        fontSize: "15px",
                        textAlign: "center",
                        marginRight: "10px",
                      }}
                    />
                    {d}
                  </Typography>
                </div>
                <div>
                  <p onClick={() => getData(d)} className="clr">
                    x
                  </p>
                </div>
              </div>
            );
          })}
          <div className="todo-btn">
            <TaskComplete
              size="undefined"
              onClick={() => ComplateT()}
              variant="contained"
              sx={{
                marginTop: "15px",
                height: "2rem",
                background: "transparent",
                color: "white",
                border: "green solid 2px",
                cursor: "pointer",
                display: "flex",
                justifySelf: "center",
              }}
            >
              Task Completed
            </TaskComplete>
            <Clear
              size="undefined"
              onClick={() => ClearTodo()}
              variant="text"
              sx={{
                marginTop: "15px",
                background: "transparent",
                height: "2rem",
                cursor: "pointer",
                display: "flex",
                color: "white",
                border: "red solid 2px",
                justifySelf: "center",
              }}
            >
              Clear
            </Clear>
          </div>
          {complateTodoPrint.map((d, i) => {
            return (
              <div className="todo-map">
                <div className="todo-list-main">
                  <Typography
                    key={i}
                    sx={{
                      color: "white",
                      overflow: "hidden",
                      textAlign: "left",
                      minWidth: "300px",
                      maxWidth: "300px",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    <ArrowRight
                      sx={{
                        color: "green",
                        fontSize: "15px",
                        textAlign: "center",
                        marginRight: "10px",
                      }}
                    />
                    {d}
                  </Typography>
                </div>
                <div>
                  <p
                    onClick={() => getData(d)}
                    style={{ color: "green" }}
                    className="clr"
                  >
                    DONE
                  </p>
                </div>
              </div>
            );
          })}

          <div className="todo-btn">
            <Clear
              size="undefined"
              onClick={() => {
                setComplateTodoPrint([]);
                setTodo([]);
                setComplateTodo([]);
              }}
              variant="text"
              sx={{
                marginTop: "15px",
                background: "transparent",
                height: "2rem",
                cursor: "pointer",
                display: "flex",
                color: "white",
                border: "red solid 2px",
                justifySelf: "center",
              }}
            >
              All Clear
            </Clear>
          </div>
        </Box>
      </div>
    </>
  );
}
