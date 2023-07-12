/*
    # 제목: 대여 횟수가 많은 자동차들의 월별 대여 횟수 구하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/151139?language=mysql
*/

SELECT
            MONTH(START_DATE) AS MONTH,
            CAR_ID,
            COUNT(*) AS RECORDS
FROM
            CAR_RENTAL_COMPANY_RENTAL_HISTORY
WHERE
            DATE_FORMAT(START_DATE, '%Y%m') BETWEEN '202208' AND '202210'
AND
            CAR_ID IN 
              (
                SELECT
                        CAR_ID
                FROM
                        CAR_RENTAL_COMPANY_RENTAL_HISTORY
                WHERE
                        DATE_FORMAT(START_DATE, '%Y%m') BETWEEN '202208' AND '202210'
                GROUP BY
                        CAR_ID
                HAVING
                        COUNT(*) >= 5
            )
GROUP BY
            MONTH, CAR_ID
ORDER BY
            MONTH ASC, CAR_ID DESC


/*
# 다른 분의 풀이

# 윈도우 함수 활용
SELECT MONTH(start_date) AS month,car_id,COUNT(history_id) AS records
FROM (
    SELECT *, COUNT(history_id) OVER (PARTITION BY car_id) AS cnt
    FROM car_rental_company_rental_history
    WHERE start_date BETWEEN '2022-08-01' AND '2022-10-31'
          )AS sub
WHERE cnt>=5
GROUP BY month, car_id
ORDER BY month, car_id DESC

# from절을 제한하여 해당 데이터를 뽑아왔다.
# 내 코드는 where절에 날짜를 2번 비교하게 되는데, 이 부분에서 비효율적이라고 생각했다.
# 윈도우 함수는 group by랑 다르게 원하는 행을 추가해서 보여준다는 것을 배웠음
# MONTH()함수를 통해 월만 뽑아올 수 있다는 것을 배웠음
*/