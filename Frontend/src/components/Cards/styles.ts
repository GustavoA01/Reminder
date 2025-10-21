import styled from "styled-components"

export const ReminderDate = styled.div`
  width: 63.5rem;
  height: 5.4rem;
  display: flex;
  align-items: center;
  padding-left: 1.4rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme["light-green"]};
  animation: date-apear 0.7s ease-in;

  @keyframes date-apear {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translatey(0);
      opacity: 100%;
    }
  }

  span {
    font-size: 2.1rem;
  }
`

export const RemindersEmpty = styled.div`
  background-color: ${(props) => props.theme["input-background"]};
  text-align: center;
  height: 10rem;
  margin-top: 2rem;
  border-radius: 8px;
  align-content: center;
  animation: apear 0.7s ease-in;

  span {
    font-size: 2rem;
    opacity: 45%;
  }

  @keyframes apear {
    from {
      transform: translateY(-100px);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 100%;
    }
  }
`
