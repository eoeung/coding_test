/*
    # 제목: 최솟값 구하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/59038?language=mysql
*/

SELECT
            DATETIME AS '시간'
FROM
            ANIMAL_INS
ORDER BY
            DATETIME ASC
LIMIT 1