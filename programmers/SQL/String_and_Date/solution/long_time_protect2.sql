/*
    # 제목: 오랜 기간 보호한 동물(2)
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/59411?language=mysql
*/

SELECT
            INS.ANIMAL_ID,
            INS.NAME
FROM
            ANIMAL_INS AS INS, ANIMAL_OUTS AS OUTS
WHERE
            INS.ANIMAL_ID = OUTS.ANIMAL_ID
ORDER BY
            DATEDIFF(OUTS.DATETIME, INS.DATETIME) DESC
LIMIT 2