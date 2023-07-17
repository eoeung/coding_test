/*
    # 제목: 조건에 맞는 도서와 저자 리스트 출력하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/144854?language=mysql
*/

SELECT
            BOOK.BOOK_ID,
            AUTHOR.AUTHOR_NAME,
            DATE_FORMAT(BOOK.PUBLISHED_DATE, '%Y-%m-%d') AS PUBLISHED_DATE
FROM
            BOOK, AUTHOR
WHERE
            BOOK.AUTHOR_ID = AUTHOR.AUTHOR_ID
AND
            BOOK.CATEGORY = '경제'
ORDER BY
            PUBLISHED_DATE ASC