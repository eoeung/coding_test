/*
    # 제목: 있었는데요 없었습니다
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/59043?language=mysql
*/

SELECT
            INS.ANIMAL_ID,
            INS.NAME
FROM
            ANIMAL_INS AS INS, ANIMAL_OUTS AS OUTS
WHERE
            INS.ANIMAL_ID = OUTS.ANIMAL_ID
AND
            INS.DATETIME - OUTS.DATETIME > 0
ORDER BY
            INS.DATETIME ASC