/*
    # 제목: 이름에 el이 들어가는 동물 찾기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/59047?language=mysql
*/

SELECT
            ANIMAL_ID,
            NAME
FROM
            ANIMAL_INS
WHERE
            LOWER(NAME) LIKE '%el%'
AND
            ANIMAL_TYPE = 'Dog'
ORDER BY
            NAME