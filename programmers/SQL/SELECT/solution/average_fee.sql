/*
    # 제목: 평균 일일 대여 요금 구하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/151136?language=mysql
*/

SELECT
            ROUND(SUM(DAILY_FEE) / COUNT(*)) AS AVERAGE_FEE
FROM
            CAR_RENTAL_COMPANY_CAR
WHERE
            CAR_TYPE = 'SUV'