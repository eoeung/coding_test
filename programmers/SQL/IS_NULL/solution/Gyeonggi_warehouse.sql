/*
    # 제목: 경기도에 위치한 식품창고 목록 출력하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/131114?language=mysql
*/

SELECT
            WAREHOUSE_ID,
            WAREHOUSE_NAME,
            ADDRESS,
            IF(FREEZER_YN IS NOT NULL, FREEZER_YN, 'N') AS FREEZER_YN
FROM
            FOOD_WAREHOUSE
WHERE
            ADDRESS LIKE '경기도%'
ORDER BY
            WAREHOUSE_ID ASC