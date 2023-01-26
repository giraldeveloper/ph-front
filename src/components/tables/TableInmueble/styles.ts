import css from "styled-jsx/css";

export default css`

  table, tr{
    border: 1px solid #ccc;
    border-collapse: collapse;
    text-align: center;
    font-size: 18px
  }

  tr:nth-child(odd) {
	  background: #f7f7f7;
  }

  tr:first-child{
    background: #eee;
    font-weight: 700;
  }

  td{
    padding: 5px 10px;
  }
`