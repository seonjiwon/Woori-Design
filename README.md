## 컴포넌트 개요
Card 컴포넌트는 카드 메타 정보(selectedCard)와 해당 카드의 사용 내역(histories)을 입력으로 받아, 카드 앞/뒤 UI 및 거래 내역을 렌더링한다.


## 프로젝트 구조
```
src/
 ├─ App.jsx
 └─ components/
    ├─ card/
    │  ├─ Card.jsx                // 전체 컨테이너 컴포넌트
    │  ├─ CardBack.jsx            // 카드 뒷면 컴포넌트
    │  ├─ CardFront.jsx           // 카드 앞면 컴포넌트
    │  ├─ CardHistoryList.jsx     // 카드 사용 내역 리스트 컴포넌트
    │  └─ CardHistoryItem.jsx     // 단일 카드 사용 내역 컴포넌트
    └─ ui/
       ├─ CardBadge.jsx
       ├─ CardInfo.jsx
       └─ FlipButton.jsx
```

## 컴포넌트 계층
<img width="500" height="500" alt="component" src="https://github.com/user-attachments/assets/b3d306c1-7ad6-49c7-8c6d-fbe9306e12e5" />


## 사용법
### npm 설치
```
npm i 02_woori-component
```

### 컴포넌트 사용법
```
<Card selectedCard={selectedCard} histories={histories}/>
```

## Card 명세

### selectedCard Props

| 필드명                                 | 타입                     | 설명                    |
| ----------------------------------- | ---------------------- | --------------------- |
| `cardId`                            | string                 | 카드 고유 ID (히스토리 매핑 기준) |
| `cardName`                          | string                 | 카드 상품명                |
| `company`                           | string                 | 카드사 이름                |
| `cardType`                          | `"CREDIT \| CHECK"`      | 카드 유형                 |
| `imageUrl`                          | string                 | 카드 이미지 경로             |
| `maskedCardNumber`                  | string                 | 마스킹된 카드 번호            |
| `linkedAccount.bankName`            | string                 | 연결 계좌 은행              |
| `linkedAccount.maskedAccountNumber` | string                 | 마스킹된 계좌 번호            |
| `payon`                             | boolean                | PayOn(간편결제) 여부        |
| `overseasPayment`                   | `"visa \| master"`  | 해외 결제 브랜드             |


### histories Props

| 필드명            | 타입                          | 설명    |
| -------------- | --------------------------- | ----- |
| `id`           | number                      | 내역 ID |
| `merchantName` | string                      | 가맹점명  |
| `time`         | string                      | 거래 시각 |
| `price`        | number                      | 결제 금액 |

