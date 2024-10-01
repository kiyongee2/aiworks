 // 문자형 배열 선언
 let seasons = ["봄", "여름", "가을", "겨울"];
 console.log(seasons);
 console.log(typeof(seasons));

 // 배열의 크기
 let size = seasons.length;
 console.log("배열의 크기:", size);

 // 인덱스로 검색
 console.log(seasons[2]);

 // 전체 조회 - for문 사용
 for(let i = 0; i < seasons.length; i++ ){
     console.log(seasons[i]);
 }

 // 숫자형 배열 선언
 let score = []; //빈 배열

 // 요소 추가
 score[0] = 80;
 score[1] = 70;
 score[2] = 85;
 score[3] = 80;
 console.log(score);

 // 요소 수정
 score[1] = 90;
 console.log(score);

 // 요소 삭제
 // delete score[2]
 console.log(score);

 // 전체 조회 - (for ~ in문)
 for(let i in score){
     console.log(score[i]);
 }

