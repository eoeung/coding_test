-- 제목: 여러 기준으로 정렬하기
-- URL: https://school.programmers.co.kr/learn/courses/30/lessons/59404?language=mysql

-- 코드를 입력하세요
SELECT
            ANIMAL_ID,
            NAME,
            DATETIME
FROM
            ANIMAL_INS
ORDER BY
            NAME,
            DATETIME DESC