/*
    # 제목: 루시와 엘라 찾기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/59046?language=mysql
*/

SELECT
            ANIMAL_ID,
            NAME,
            SEX_UPON_INTAKE
FROM
            ANIMAL_INS
WHERE
            NAME IN ('Lucy', 'Ella', 'Pickle', 'Rogan', 'Sabrina', 'Mitty')
ORDER BY
            ANIMAL_ID