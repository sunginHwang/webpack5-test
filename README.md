# webpack5-test
study for webpack5

알아보아야 할 대상

* multi entries output 설정
* entries 별 depenency 설정
* 중첩 트리쉐이킹 동작 여부 확인
* commonjs 트리쉐이킹 동작 여부 확인

## 이슈 사항.
1. 중첩된 트리쉐이킹
공식 문서의 중첩된 트리쉐이킹 예제 처럼 a,b 에 대한 중첩 처리 후 a 만 사용. b 가 제거되었을것으로 예상되었으나 실제로 b는 참조만 안할뿐 사용은 동일하게 진행.
의심되는 것으로는 4버전 처럼 object에 값을 직접 추가 넣는 케이스를 없앤것을 표현한건지 설정 이슈인것인지 궁금하여 현재 issue 에 문의 중 상황

* issue : https://github.com/webpack/webpack/issues/11821
* 해답 : 옵션중 minimize 의 비활성화로 인한것 minimize 가 활성화 되어야 해당 트리쉐이킹이 적용 된다.

2. commonJS 트리 쉐이킹
commonJS 는 기존 5 이전 버전에서는 트리쉐이킹 미지원 -> 이후 5부터 정식 지원
* issue: 4버전에서도 트리쉐이킹이 정상 작동
* 해답 :  module 의 export 하는 방법 및 require 조건제약이 몇개 존재한다. 확장 지원은 추후 게속 지원 해준다고 한 상태

