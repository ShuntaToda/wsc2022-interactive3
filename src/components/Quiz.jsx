import React from 'react'
import quizTitleImg1 from "../images/scene-1/quiz-title.png"
import quizTitleImg2 from "../images/scene-2/quiz-title.png"
import quizTitleImg3 from "../images/scene-3/quiz-title.png"

import quizCloseBtn from "../images/scene-1/close-button.png"
import corner from "../images/scene-1/corner.png"


export const Quiz = ({ quiz, scene, setQuiz, setBarriers }) => {
  const closeQuiz = () => {
    setQuiz({})
  }
  const getQuizTitle = () => {
    const quizTitleImgs = [quizTitleImg1, quizTitleImg2, quizTitleImg3]
    return quizTitleImgs[scene]
  }

  const selectAnswer = (index) => {
    if (index === quiz.answerIndex) {
      setBarriers(barriers => {
        barriers.splice(quiz.questionIndex, quiz.questionIndex + 1)
        console.log(barriers);
        return barriers
      })
    }
    setQuiz()
  }
  return (
    <div style={{
      width: 1280,
      height: 720,
      border: "solid gray 1px",
      position: "relative",
      background: "#FFF30C"
    }}>
      <div style={{
        border: "solid 5px #663300",
        background: "#FFFFCC",
        width: 1135,
        height: 590,
        zIndex: 1,
        position: "absolute",
        top: 385,
        left: 552,
        translate: "-490px -50%",
        padding: 100,
        display: 'flex',
        flexDirection: "column",
      }}>
        <div style={{ height: 180, fontSize: "1.7rem", fontWeight: "bold" }}>{quiz.title}</div>
        <div style={{
          display: "grid",
          gap: 10,
          gridTemplateRows: "1fr 1fr",
          gridTemplateColumns: "1fr 1fr",
          flexGrow: 1
        }}>
          {quiz?.choices.map((item, index) => (
            <div onClick={() => selectAnswer(index)} style={{
              border: "solid 3px brown",
              borderRadius: 20,
              width: "100%",
              height: "100%",
              background: "#FFF30C",
              display: 'flex',
              alignItems: "center",
              padding: "10px 30px",
              fontSize: "1.5rem",
              fontWeight: 'bold'
            }}>
              {item}
            </div>
          ))}
        </div>

      </div>
      <img src={getQuizTitle()} alt="quizTitleImg" style={{
        position: "absolute",
        top: 87,
        left: 236,
        width: 445,
        height: 82,
        translate: "-50% -50%",
        rotate: "-5deg",
        zIndex: 2
      }} />
      <div onClick={closeQuiz} style={{
        position: "absolute",
        top: 70,
        left: 1198,
        width: 87,
        height: 87,
        translate: "-50% -50%",
        zIndex: 99
      }}>
        <img src={quizCloseBtn} alt="close" />
      </div>
      <img src={corner} alt="corner" style={{
        position: "absolute",
        top: 614,
        left: 100,
        width: 145,
        height: 155,
        translate: "-50% -50%",
        zIndex: 3
      }} />
      <img src={corner} alt="corner" style={{
        position: "absolute",
        top: 614,
        left: 1151,
        width: 145,
        height: 155,
        translate: "-50% -50%",
        scale: "-1 1",
        zIndex: 3
      }} />
    </div>
  )
}
