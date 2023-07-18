/*
    # 제목: 주문량이 많은 아이스크림들 조회하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/133027?language=mysql
*/

SELECT
            HALF.FLAVOR
FROM
            FIRST_HALF AS HALF,
            (SELECT
                    FLAVOR, SUM(TOTAL_ORDER) AS TOTAL_ORDER
             FROM
                    JULY
            GROUP BY
                    FLAVOR) A
WHERE
            HALF.FLAVOR = A.FLAVOR
GROUP BY
            HALF.FLAVOR
ORDER BY
            SUM(HALF.TOTAL_ORDER + A.TOTAL_ORDER) DESC
LIMIT 3