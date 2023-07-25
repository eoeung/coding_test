/*
    # 제목: 조건에 부합하는 중고거래 상태 조회하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/164672?language=mysql
*/

SELECT
            BOARD_ID,
            WRITER_ID,
            TITLE,
            PRICE,
            CASE
            WHEN STATUS = 'SALE' THEN '판매중'
            WHEN STATUS = 'RESERVED' THEN '예약중'
            WHEN STATUS = 'DONE' THEN '거래완료'
            END AS STATUS
FROM
            USED_GOODS_BOARD
WHERE
            DATE_FORMAT(CREATED_DATE, '%Y%m%d') = '20221005'
ORDER BY
            BOARD_ID DESC