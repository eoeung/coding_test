/*
    # 제목: 상품 별 오프라인 매출 구하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/131533?language=mysql
*/

SELECT
                PRODUCT.PRODUCT_CODE,
                PRODUCT.PRICE * SUM(OFFLINE_SALE.SALES_AMOUNT) AS SALES
FROM
                PRODUCT, OFFLINE_SALE
WHERE
                PRODUCT.PRODUCT_ID = OFFLINE_SALE.PRODUCT_ID
GROUP BY
                PRODUCT_CODE
ORDER BY
                SALES DESC, PRODUCT.PRODUCT_CODE ASC