/*
    # 제목: 조회수가 가장 많은 중고거래 게시판의 첨부파일 조회하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/164671?language=mysql
*/

SELECT
            CONCAT('/home/grep/src/', FILE.BOARD_ID, '/', FILE.FILE_ID, FILE.FILE_NAME, FILE.FILE_EXT) AS FILE_PATH
FROM
            USED_GOODS_BOARD AS BOARD, USED_GOODS_FILE AS FILE
WHERE
            BOARD.BOARD_ID = FILE.BOARD_ID
AND
            BOARD.VIEWS = (
                            SELECT MAX(VIEWS) AS MAX_VIEWS
                            FROM USED_GOODS_BOARD
                          )
ORDER BY
            FILE.FILE_ID DESC