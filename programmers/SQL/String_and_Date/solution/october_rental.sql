/*
    # 제목: 대여 기록이 존재하는 자동차 리스트 구하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/157341?language=mysql
*/

SELECT
            CAR_ID
FROM
            CAR_RENTAL_COMPANY_CAR
WHERE
            CAR_TYPE = '세단'
AND
            CAR_ID IN   (
                            SELECT DISTINCT(CAR_ID)
                            FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
                            WHERE MONTH(START_DATE) = '10'
                        )
ORDER BY
            CAR_ID DESC