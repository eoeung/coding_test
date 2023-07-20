/*
    # 제목: 특정 기간동안 대여 가능한 자동차들의 대여비용 구하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/157339?language=mysql
*/

SELECT
            CAR.CAR_ID,
            CAR.CAR_TYPE,
            TRUNCATE((CAR.DAILY_FEE - (CAR.DAILY_FEE * (PLAN.DISCOUNT_RATE / 100))) * 30, 0) AS FEE
FROM
            CAR_RENTAL_COMPANY_CAR AS CAR
JOIN
            CAR_RENTAL_COMPANY_DISCOUNT_PLAN AS PLAN
ON
            CAR.CAR_TYPE = PLAN.CAR_TYPE
WHERE
            CAR.CAR_TYPE IN ('세단', 'SUV')
AND
            CAR.CAR_ID NOT IN (
                                SELECT CAR_ID
                                FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
                                WHERE DATE_FORMAT(START_DATE, '%Y%m%d') BETWEEN '20221101' AND '20221130'
                                OR DATE_FORMAT(END_DATE, '%Y%m%d') >= '20221101'
                              )
AND
            PLAN.DURATION_TYPE LIKE '30%'
AND
            TRUNCATE((CAR.DAILY_FEE - (CAR.DAILY_FEE * (PLAN.DISCOUNT_RATE / 100))) * 30, 0) BETWEEN 500000 AND 1999999
ORDER BY
            FEE DESC, CAR.CAR_TYPE ASC, CAR.CAR_ID DESC