/*
    # 제목: NULL 처리하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/59410?language=mysql
*/

SELECT
            ANIMAL_TYPE,
            IF(NAME IS NOT NULL, NAME, 'No name') AS NAME,
            SEX_UPON_INTAKE
FROM
            ANIMAL_INS
ORDER BY
            ANIMAL_ID ASC