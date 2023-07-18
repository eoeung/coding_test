/*
    # 제목: 없어진 기록 찾기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/59042?language=mysql
*/

SELECT
            OUTS.ANIMAL_ID,
            OUTS.NAME
FROM
            ANIMAL_INS INS
RIGHT OUTER JOIN
            ANIMAL_OUTS OUTS
ON
            INS.ANIMAL_ID = OUTS.ANIMAL_ID
WHERE
            INS.ANIMAL_ID IS NULL
ORDER BY
            OUTS.ANIMAL_ID ASC