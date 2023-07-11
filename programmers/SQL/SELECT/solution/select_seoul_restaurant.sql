/*
    # 제목: 서울에 위치한 식당 목록 출력하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/131118?language=mysql
*/

SELECT
            INFO.REST_ID,
            INFO.REST_NAME,
            INFO.FOOD_TYPE,
            INFO.FAVORITES,
            INFO.ADDRESS,
            ROUND(SUM(REVIEW.REVIEW_SCORE) / COUNT(*), 2) AS SCORE
FROM
            REST_INFO AS INFO
JOIN
            REST_REVIEW AS REVIEW
ON
            INFO.REST_ID = REVIEW.REST_ID
WHERE
            INFO.ADDRESS LIKE '서울%'
GROUP BY
            INFO.REST_ID
ORDER BY
            SCORE DESC, INFO.FAVORITES DESC