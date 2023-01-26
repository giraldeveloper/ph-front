import css from "styled-jsx/css";

export default css`
  main{
    display: grid;
    min-height: 100vh;
    place-items: center;
  }

  table, td{
    border: 1px solid black;
    border-collapse: collapse;
  }

  td{
    padding: 5px 10px
  }
`