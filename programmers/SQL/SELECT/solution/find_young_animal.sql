/*
    # 제목: 어린 동물 찾기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/59037?language=mysql
*/

SELECT
            ANIMAL_ID,
            NAME
FROM
            ANIMAL_INS
WHERE
            INTAKE_CONDITION != 'Aged'