/*
    # 제목: 인기 있는 아이스크림
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/133024?language=mysql
*/

SELECT
            FLAVOR
FROM
            FIRST_HALF
ORDER BY
            TOTAL_ORDER DESC, SHIPMENT_ID ASC