/*
    # 제목: 그룹별 조건에 맞는 식당 목록 출력하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/131124?language=mysql
*/

SELECT
            PROFILE.MEMBER_NAME,
            REVIEW.REVIEW_TEXT,
            DATE_FORMAT(REVIEW.REVIEW_DATE, '%Y-%m-%d') AS REVIEW_DATE
FROM
            MEMBER_PROFILE AS PROFILE, REST_REVIEW AS REVIEW
WHERE
            PROFILE.MEMBER_ID = REVIEW.MEMBER_ID
AND
            REVIEW.MEMBER_ID IN (
                                    SELECT A.MEMBER_ID
                                    FROM(
                                            SELECT MEMBER_ID, COUNT(*) AS CNT_REV, MAX(COUNT(*)) OVER () AS MAX_REV
                                            FROM REST_REVIEW
                                            GROUP BY MEMBER_ID
                                        ) A
                                    WHERE A.CNT_REV = A.MAX_REV
                                )
ORDER BY
            REVIEW_DATE ASC, REVIEW.REVIEW_TEXT ASC