/*
    # 제목: 조건에 부합하는 중고거래 댓글 조회하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/164673?language=mysql
*/

SELECT
            BOARD.TITLE,
            REPLY.BOARD_ID,
            REPLY.REPLY_ID,
            REPLY.WRITER_ID,
            REPLY.CONTENTS,
            DATE_FORMAT(REPLY.CREATED_DATE, '%Y-%m-%d') AS CREATED_DATE
FROM
            USED_GOODS_BOARD AS BOARD
JOIN
            USED_GOODS_REPLY AS REPLY
ON
            BOARD.BOARD_ID = REPLY.BOARD_ID
WHERE
            DATE_FORMAT(BOARD.CREATED_DATE, '%Y%m') = '202210'
ORDER BY
            CREATED_DATE ASC, BOARD.TITLE ASC