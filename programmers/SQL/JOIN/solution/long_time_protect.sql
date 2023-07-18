/*
    # 제목: 오랜 기간 보호한 동물(1)
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/59044?language=mysql
*/

SELECT
            INS.NAME,
            INS.DATETIME
FROM
            ANIMAL_INS AS INS
LEFT OUTER JOIN
            ANIMAL_OUTS AS OUTS
ON
            INS.ANIMAL_ID = OUTS.ANIMAL_ID
WHERE
            OUTS.DATETIME IS NULL
ORDER BY
            INS.DATETIME ASC
LIMIT 3