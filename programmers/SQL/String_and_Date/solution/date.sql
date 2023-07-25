/*
    # 제목: DATETIME에서 DATE로 형 변환
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/59414?language=mysql
*/

SELECT
            ANIMAL_ID,
            NAME,
            DATE_FORMAT(DATETIME, '%Y-%m-%d') AS '날짜'
FROM
            ANIMAL_INS
ORDER BY
            ANIMAL_ID