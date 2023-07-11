/*
    # 제목: 입양 시각 구하기(1)
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/59412?language=mysql
*/

SELECT
            DATE_FORMAT(DATETIME, '%H') AS HOUR,
            COUNT(*) AS COUNT
FROM
            ANIMAL_OUTS
GROUP BY
            HOUR
HAVING
            HOUR BETWEEN 9 AND 19
ORDER BY
            HOUR ASC