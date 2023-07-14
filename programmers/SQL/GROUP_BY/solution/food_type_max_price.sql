/*
    # 제목: 식품분류별 가장 비싼 식품의 정보 조회하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/131116?language=mysql
*/

SELECT
            A.CATEGORY,
            B.MAX_PRICE,
            A.PRODUCT_NAME
FROM
            FOOD_PRODUCT A,
            (SELECT
                        CATEGORY,
                        MAX(PRICE) AS MAX_PRICE
             FROM
                        FOOD_PRODUCT
             WHERE
                        CATEGORY IN ('과자', '국', '김치', '식용유')
             GROUP BY
                        CATEGORY
            ) B
WHERE
            A.CATEGORY = B.CATEGORY
AND
            A.PRICE = B.MAX_PRICE
ORDER BY
            B.MAX_PRICE DESC