/*
    # 제목: 중복 제거하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/59408?language=mysql
*/

SELECT
            COUNT(A.name)
FROM(
        SELECT
                    *
        FROM
                    ANIMAL_INS
        WHERE
                    NAME IS NOT NULL
        GROUP BY
                    NAME
    ) A


/*
# 다른 분의 풀이
1) FROM절에서 서브쿼리 이용
SELECT COUNT(NAME)
FROM (SELECT DISTINCT NAME 
      FROM ANIMAL_INS) AS A;

# DISTINCT를 사용해서 중복을 제거
# → DISTINCT는 null을 제외하고 조회한다.

2) 다른 분의 풀이를 한 줄로 변경
SELECT COUNT(DISTINCT NAME)
FROM ANIMAL_INS
-- WHERE NAME IS NOT NULL # 해당 코드는 필요하지 않음
# → DISTINCT에서 null값을 계산하지 않기 때문
*/