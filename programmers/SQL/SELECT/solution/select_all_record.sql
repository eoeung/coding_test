/*
    # 제목: 모든 레코드 조회하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/59034?language=mysql
*/

SELECT
        ai.ANIMAL_ID,
        ai.ANIMAL_TYPE,
        ai.DATETIME,
        ai.INTAKE_CONDITION,
        ai.NAME,
        ai.SEX_UPON_INTAKE
FROM
        ANIMAL_INS as ai
ORDER BY
        ai.ANIMAL_ID