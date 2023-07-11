/*
    # 제목: 조건에 맞는 회원수 구하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/131535?language=mysql
*/

SELECT
            COUNT(*) AS USER_ID
FROM
            USER_INFO
WHERE
            DATE_FORMAT(JOINED, '%Y') = '2021'
AND
            AGE BETWEEN 20 AND 29