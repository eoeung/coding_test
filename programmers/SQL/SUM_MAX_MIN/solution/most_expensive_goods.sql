/*
    # 제목: 가장 비싼 상품 구하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/131697?language=mysql
*/

SELECT
            MAX(PRICE) AS MAX_PRICE
FROM
            PRODUCT