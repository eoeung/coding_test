/*
    # 제목: 상품을 구매한 회원 비율 구하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/131534?language=mysql
*/

SELECT
            YEAR,
            MONTH,
            YM_CNT AS PURCHASED_USERS,
            ROUND((YM_CNT / 2021_USER_CNT), 1) AS PURCHASED_RATIO
FROM(
        SELECT
                    YEAR(SALE.SALES_DATE) AS YEAR,
                    MONTH(SALE.SALES_DATE) AS MONTH,
                    COUNT(DISTINCT SALE.USER_ID) AS YM_CNT, -- 같은 달에 2번 이상 구매한 유저의 수 → 중복 → 1로 체크
                    (SELECT COUNT(*)
                    FROM USER_INFO
                    WHERE YEAR(JOINED) = '2021') AS 2021_USER_CNT
        FROM
                    USER_INFO AS INFO, ONLINE_SALE AS SALE
        WHERE
                    YEAR(JOINED) = '2021'
        AND
                    INFO.USER_ID = SALE.USER_ID
        GROUP BY
                    YEAR, MONTH
    ) A
ORDER BY
            YEAR ASC, MONTH ASC