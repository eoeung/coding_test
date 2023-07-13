/*
    # 제목: 저자 별 카테고리 별 매출액 집계하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/144856?language=mysql
*/

SELECT
            DISTINCT AUTHOR.AUTHOR_ID,
            AUTHOR.AUTHOR_NAME,
            BOOK.CATEGORY,
            SUM(BOOK.PRICE * BOOK_SALES.SALES) OVER (PARTITION BY AUTHOR.AUTHOR_ID, BOOK.CATEGORY) AS TOTAL_SALES
FROM
            BOOK
JOIN
            AUTHOR
ON
            BOOK.AUTHOR_ID = AUTHOR.AUTHOR_ID
JOIN
            BOOK_SALES
ON
            BOOK.BOOK_ID = BOOK_SALES.BOOK_ID
WHERE
            DATE_FORMAT(BOOK_SALES.SALES_DATE, '%Y%m') = '202201'
ORDER BY
            AUTHOR.AUTHOR_ID ASC, BOOK.CATEGORY DESC