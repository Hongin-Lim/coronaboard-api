const express = require("express");
const bodyParser = require("body-parser");

// express 인스턴스 생성
const app = express();

// Content-Type이 application/json인 HTTP 요청의 바디를 파싱 할 수 있도록 설정
app.get("/", (req, res) => {
  res.json({ message: "Hello CoronaBoard!" });
});

const port = process.env.PORT || 8080; // 포트 기본값을 8080으로 설정
app.listen(port, () => {
  console.log(`Server is running on port 8080.`);
});
