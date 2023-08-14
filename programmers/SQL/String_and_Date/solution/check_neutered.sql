/*
    # 제목: 중성화 여부 파악하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/59409?language=mysql
*/

SELECT
            ANIMAL_ID,
            NAME,
            CASE
            WHEN LOWER(SEX_UPON_INTAKE) LIKE '%Neutered%' OR LOWER(SEX_UPON_INTAKE) LIKE '%Spayed%' THEN 'O'
            ELSE 'X'
            END AS '중성화'
FROM
            ANIMAL_INS
ORDER BY
            ANIMAL_ID