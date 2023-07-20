/*
    # 제목: 5월 식품들의 총매출 조회하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/131117?language=mysql
*/

SELECT
            FP.PRODUCT_ID,
            FP.PRODUCT_NAME,
            FP.PRICE * A.SUM_AMOUNT AS TOTAL_SALES
FROM
            FOOD_PRODUCT AS FP
JOIN
            (
                SELECT PRODUCT_ID, SUM(AMOUNT) AS SUM_AMOUNT
                FROM FOOD_ORDER
                WHERE DATE_FORMAT(PRODUCE_DATE, '%Y%m') = '202205'
                GROUP BY PRODUCT_ID
            ) A
ON
            FP.PRODUCT_ID = A.PRODUCT_ID
ORDER BY
            TOTAL_SALES DESC, FP.PRODUCT_ID ASC