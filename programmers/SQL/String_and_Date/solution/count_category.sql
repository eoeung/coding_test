/*
    # 제목: 카테고리 별 상품 개수 구하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/131529?language=mysql
*/

SELECT
            LEFT(PRODUCT_CODE, 2) AS CATEGORY, -- 왼쪽에서 n개수 만큼 문자열을 자른다.
            COUNT(*) AS PRODUCTS
FROM
            PRODUCT
GROUP BY
            CATEGORY
ORDER BY
            CATEGORY ASC