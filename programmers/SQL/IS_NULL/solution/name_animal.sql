/*
    # 제목: 이름이 있는 동물의 아이디
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/59407?language=mysql
*/

SELECT
            ANIMAL_ID
FROM
            ANIMAL_INS
WHERE
            NAME IS NOT NULL
ORDER BY
            ANIMAL_ID ASC