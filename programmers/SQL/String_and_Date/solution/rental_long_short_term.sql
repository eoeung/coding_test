/*
    # 제목: 자동차 대여 기록에서 장기/단기 대여 구분하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/151138?language=mysql
*/

SELECT
            HISTORY_ID,
            CAR_ID,
            DATE_FORMAT(START_DATE, '%Y-%m-%d') AS START_DATE,
            DATE_FORMAT(END_DATE, '%Y-%m-%d') AS END_DATE,
            IF(DATEDIFF(END_DATE, START_DATE)+1 >= 30, '장기 대여', '단기 대여') AS RENT_TYPE -- +1을 해주지 않으면 동일 날짜에 대여하고 반납하면 0일 처리로 나오게 됨 → 날짜 처리를 위해서 +1을 해줘야 한다.
FROM
            CAR_RENTAL_COMPANY_RENTAL_HISTORY
WHERE
            DATE_FORMAT(START_DATE, '%Y%m') = '202209'
ORDER BY
            HISTORY_ID DESC