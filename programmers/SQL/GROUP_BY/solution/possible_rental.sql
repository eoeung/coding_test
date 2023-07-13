/*
    # 제목: 자동차 대여 기록에서 대여중 / 대여 가능 여부 구분하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/157340?language=mysql
*/

SELECT
            CAR_ID,
            IF(CAR_ID IN
                (SELECT CAR_ID
                 FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
                 WHERE DATE_FORMAT(START_DATE, '%Y%m%d') <= '20221016'
                 AND DATE_FORMAT(END_DATE, '%Y%m%d') >= '20221016'),
                 '대여중', '대여 가능') AS AVAILABILITY
FROM
            CAR_RENTAL_COMPANY_RENTAL_HISTORY
GROUP BY
            CAR_ID
-- GROUP BY 대신 위에서 작성한 스칼라 서브쿼리에서, (SELECT CAR_ID → SELECT DISTINCT CAR_ID)로 변경해주면 더 좋을 듯
ORDER BY
            CAR_ID DESC
