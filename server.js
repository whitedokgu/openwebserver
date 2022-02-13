const express = require('express');     //express라이브러리를 참고해 달라
const app = express();

app.listen(8080, function(){            //8080포트로 접속시 실행할 코드
    console.log('listening on 8080')
});

app.get('/level',function(요청, 응답){  //'/level'로 접속시 '이게 보이면 응답된것'을 표기
    응답.send('이게 보이면 응답된것');
});

app.get('/', function(요청, 응답){      // '/'은 홈이라는 뜻이며 접속시 index.html을 띄운다
    응답.sendFile(__dirname + '/index.html');
});