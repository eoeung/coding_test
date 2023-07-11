/*
    # 제목: 조건에 맞는 도서 리스트 출력하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/144853?language=mysql
*/

SELECT
            BOOK_ID,
            DATE_FORMAT(PUBLISHED_DATE, '%Y-%m-%d') AS PUBLISHED_DATE
FROM
            BOOK
WHERE
            DATE_FORMAT(PUBLISHED_DATE, '%Y') = '2021'
AND
            CATEGORY = '인문'
ORDER BY
            PUBLISHED_DATE ASC