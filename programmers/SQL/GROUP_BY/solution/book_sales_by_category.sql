/*
    # 제목: 카테고리 별 도서 판매량 집계하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/144855?language=mysql
*/

SELECT
            BOOK.CATEGORY,
            SUM(SALES.SALES) AS TOTAL_SALES
FROM
            BOOK AS BOOK
JOIN
            BOOK_SALES AS SALES
ON
            BOOK.BOOK_ID = SALES.BOOK_ID
WHERE
            DATE_FORMAT(SALES.SALES_DATE, '%Y%m') = '202201'
GROUP BY
            BOOK.CATEGORY
ORDER BY
            BOOK.CATEGORY ASC