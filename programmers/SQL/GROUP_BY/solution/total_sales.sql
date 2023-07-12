/*
    # 제목: 조건에 맞는 사용자와 총 거래금액 조회하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/164668?language=mysql
*/

SELECT
            USER.USER_ID,
            USER.NICKNAME,
            SUM(BOARD.PRICE) AS TOTAL_SALES
FROM
            USED_GOODS_BOARD BOARD
JOIN
            USED_GOODS_USER USER
ON
            BOARD.WRITER_ID = USER.USER_ID
WHERE
            BOARD.STATUS = 'DONE'
GROUP BY
            WRITER_ID
HAVING
            TOTAL_SALES >= 700000
ORDER BY
            TOTAL_SALES ASC