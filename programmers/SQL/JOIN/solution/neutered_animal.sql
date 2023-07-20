/*
    # 제목: 보호소에서 중성화한 동물
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/59045?language=mysql
*/

SELECT
            AI.ANIMAL_ID,
            AI.ANIMAL_TYPE,
            AI.NAME
FROM
            ANIMAL_INS AS AI, ANIMAL_OUTS AS AO
WHERE
            AI.ANIMAL_ID = AO.ANIMAL_ID
AND
            AI.SEX_UPON_INTAKE <> AO.SEX_UPON_OUTCOME
ORDER BY
            AI.ANIMAL_ID ASC