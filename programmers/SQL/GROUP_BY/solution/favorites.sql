/*
    # 제목: 즐겨찾기가 가장 많은 식당 정보 출력하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/131123?language=mysql
*/

SELECT
            FOOD_TYPE,
            REST_ID,
            REST_NAME,
            FAVORITES
FROM
            REST_INFO
WHERE
            (FOOD_TYPE, FAVORITES) IN 
            (SELECT
                        FOOD_TYPE,
                        MAX(FAVORITES) AS MAX_FAV
            FROM
                        REST_INFO
            GROUP BY
                        FOOD_TYPE
            )
ORDER BY
            FOOD_TYPE DESC

/*
    # 가장 풀기 어려웠던 문제였다.
    # 즐겨찾기 최대 수와 GROUP BY절에 있는 FOOD_TYPE만 가져오는 것은 쉬웠지만,
      다른 정보(REST_ID, REST_NAME)을 가져올 때 GROUP BY에서 맨 위에 있는 임의의 정보를 가져오는 부분을 해결하지 못했다.
    # FROM절에서 조인하는 방법, window function, ROU_NUMBER() 사용, WHERE절에서 조건 비교 등 다양한 방법을 찾아서 해보려 했으나 모두 실패했다.
    # WHERE절에서 IN 조건을 (A,B) IN (두 컬럼) 이렇게 비교할 수 있는 것을 찾았고, 적용해서 성공했다.
    → 원래 서브쿼리는 하나의 값만 리턴해야해서 아예 생각도 못하고 있었다.

    # 다른 분의 풀이 (FROM절 조인 사용)
    SELECT B.FOOD_TYPE, B.REST_ID, B.REST_NAME, B.FAVORITES
    FROM (SELECT FOOD_TYPE, MAX(FAVORITES) FAVORITES
          FROM REST_INFO
          GROUP BY FOOD_TYPE) A, REST_INFO B
    WHERE A.FOOD_TYPE = B.FOOD_TYPE
    AND A.FAVORITES = B.FAVORITES
    ORDER BY FOOD_TYPE DESC;

    # [풀이]
    1)
    SELECT *
    FROM (SELECT FOOD_TYPE, MAX(FAVORITES) FAVORITES
          FROM REST_INFO
          GROUP BY FOOD_TYPE) A, REST_INFO B
    
    - 이 쿼리 결과값을 보면 기존에 있던 B값과 A의 값이 그냥 섞여있다.
    Ex) 중식	20	00001	은돼지식당	한식	1150345	734	N	서울특별시 중구 다산로 149	010-4484-8751

    - A테이블은 '중식 20'이라는 값을, B는 원래 테이블에 있던 내용('한식 734') 그대로 가지고 왔다. → 전혀 매칭되지 않는 것을 볼 수 있다.


    2) WHERE A.FOOD_TYPE = B.FOOD_TYPE

    - 조인을 통해서 FOOD_TYPE을 매핑시킨다.
    Ex) 한식	734	00001	은돼지식당	한식	1150345	734	N	서울특별시 중구 다산로 149	010-4484-8751

    - 중식 20 → 한식 734로 변경된 것을 볼 수 있다. → A테이블 값은 단순히 FOOD_TYPE과 MAX값이므로, B테이블에 있던 FOOD_TYPE만을 매핑시킨 것이다.

    - 한식은 매핑이 된 것 처럼 보이나, 일식의 경우 아직 즐겨찾기 수가 같지 않다.
    Ex) 일식	230	00002	하이가쯔네	일식	120034	112	N	서울시 중구 신당동 375-21

    - 일식 230 / 일식 112라는 값을 볼 수 있다.


    3) AND A.FAVORITES = B.FAVORITES

    - 즐겨찾기 수가 가장 많은, A테이블에서 가져온 MAX(FAVORITES)값과 B테이블에 있던 즐겨찾기 수 중에서 일치하는 것만을 골라 가져온다.
*/