/*
    # 제목: 조건에 맞는 사용자 정보 조회하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/164670?language=mysql
*/

SELECT
            USER_ID,
            NICKNAME,
            CONCAT_WS(' ', CITY, STREET_ADDRESS1, STREET_ADDRESS2) AS '전체주소',
            CONCAT_WS('-', LEFT(TLNO, 3), SUBSTRING(TLNO, 4, 4), RIGHT(TLNO, 4) ) AS '전화번호'
            -- CONCAT_WS(separator, string1, string2, ...) // cs → concatenation with separator
FROM
            USED_GOODS_USER
WHERE
            USER_ID IN (
                            SELECT WRITER_ID
                            FROM USED_GOODS_BOARD
                            GROUP BY WRITER_ID
                            HAVING COUNT(*) >= 3
                       )
ORDER BY
            USER_ID DESC