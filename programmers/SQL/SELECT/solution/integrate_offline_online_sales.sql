/*
    # 제목: 오프라인/온라인 판매 데이터 통합하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/131537?language=mysql
*/

(
    SELECT
                DATE_FORMAT(SALES_DATE, '%Y-%m-%d') AS SALES_DATE,
                PRODUCT_ID,
                USER_ID,
                SALES_AMOUNT
    FROM
                ONLINE_SALE AS ONLINE
    WHERE
                DATE_FORMAT(SALES_DATE, '%Y%m') = '202203'
)
            
UNION

(
    SELECT
                DATE_FORMAT(SALES_DATE, '%Y-%m-%d') AS SALES_DATE,
                PRODUCT_ID,
                NULL AS USER_ID,
                SALES_AMOUNT
    FROM
                OFFLINE_SALE AS OFFLINE
    WHERE
                DATE_FORMAT(SALES_DATE, '%Y%m') = '202203'
)
ORDER BY
            SALES_DATE ASC, PRODUCT_ID ASC, USER_ID ASC