/*
    # 제목: 성분으로 구분한 아이스크림 총 주문량
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/133026?language=mysql
*/

SELECT
            INFO.INGREDIENT_TYPE,
            SUM(HALF.TOTAL_ORDER) AS TOTAL_ORDER
FROM
            FIRST_HALF AS HALF
JOIN
            ICECREAM_INFO AS INFO
ON
            HALF.FLAVOR = INFO.FLAVOR
GROUP BY
            INFO.INGREDIENT_TYPE