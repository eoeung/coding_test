/*
    # 제목: 고양이와 개는 몇 마리 있을까
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/59040?language=mysql
*/

SELECT
            ANIMAL_TYPE,
            COUNT(ANIMAL_TYPE) AS 'count'
FROM
            ANIMAL_INS
GROUP BY
            ANIMAL_TYPE
ORDER BY
            ANIMAL_TYPE ASC -- 고양이를 개보다 먼저 → cat dog → 올림차순으로 해야 한다.