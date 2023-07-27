/*
    # 제목: 자동차 대여 기록 별 대여 금액 구하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/151141?language=mysql
*/

SELECT
            B.HISTORY_ID,
            TRUNCATE((B.DAILY_FEE * ((100 - B.DISCOUNT_RATE) / 100)), 0) * B.RENTAL_DATE AS FEE
FROM(
        SELECT
                    A.HISTORY_ID,
                    A.DAILY_FEE,
                    A.RENTAL_DATE,
                    IF(A.DURATION_TYPE IS NOT NULL, 
                           (SELECT DISCOUNT_RATE
                            FROM CAR_RENTAL_COMPANY_DISCOUNT_PLAN
                            WHERE CAR_TYPE = A.CAR_TYPE
                            AND DURATION_TYPE = A.DURATION_TYPE), 0) AS DISCOUNT_RATE
        FROM
                (
                    SELECT
                                HISTORY.HISTORY_ID,
                                HISTORY.CAR_ID,
                                DATEDIFF(HISTORY.END_DATE, HISTORY.START_DATE)+1 AS RENTAL_DATE,
                                CASE
                                WHEN DATEDIFF(HISTORY.END_DATE, HISTORY.START_DATE)+1 >= 90 THEN '90일 이상'
                                WHEN DATEDIFF(HISTORY.END_DATE, HISTORY.START_DATE)+1 >= 30 THEN '30일 이상'
                                WHEN DATEDIFF(HISTORY.END_DATE, HISTORY.START_DATE)+1 >= 7 THEN '7일 이상'
                                END AS DURATION_TYPE,
                                CAR.CAR_TYPE,
                                CAR.DAILY_FEE
                    FROM
                                CAR_RENTAL_COMPANY_RENTAL_HISTORY AS HISTORY,
                                CAR_RENTAL_COMPANY_CAR AS CAR
                    WHERE
                                HISTORY.CAR_ID = CAR.CAR_ID
                    AND
                                CAR.CAR_TYPE = '트럭'
                ) A
    ) B
ORDER BY
            FEE DESC, B.HISTORY_ID DESC