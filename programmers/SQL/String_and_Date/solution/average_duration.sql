/*
    # 제목: 자동차 평균 대여 기간 구하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/157342?language=mysql
*/

SELECT
            CAR_ID,
            ROUND(SUM(DATEDIFF(END_DATE, START_DATE)+1) / COUNT(CAR_ID), 1) AS AVERAGE_DURATION
FROM
            CAR_RENTAL_COMPANY_RENTAL_HISTORY
GROUP BY
            CAR_ID
HAVING
            AVERAGE_DURATION >= 7
ORDER BY
            AVERAGE_DURATION DESC, CAR_ID DESC