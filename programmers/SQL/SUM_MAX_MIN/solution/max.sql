/*
    # 제목: 최댓값 구하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/59415?language=mysql
*/

SELECT
        DATETIME AS '시간'
FROM
        ANIMAL_INS
ORDER BY
        DATETIME DESC
LIMIT 1