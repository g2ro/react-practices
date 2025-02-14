import React, { useState, useEffect } from 'react';
import data from './assets/json/data.js';

function App() {
  const [order, setOrder] = useState(data);
  const [payment, setPayment] = useState(order.payment);
  const [goods, setGoods] = useState(order.goods);

  useEffect(() => {
    console.log('Order Updated');
  }, [order]);

  useEffect(() => {
    console.log('Payment Updated');
  }, [payment]);

  useEffect(() => {
    console.log('Goods Updated');
  }, [goods]);

  return (
    <div id="App">
      <button
        onClick={() => {
          // violation
          //   order.receive = '서울시 서초구 논현동...';
          //   setOrder(order); // reaect의 경우에는 동일성 비교를 진행 => 따라서 객체가 달라야지 랜더링이 진행된다. // 동질성 비교(내용까지 비교)는 고비용이기 때문

          // sol
          const orderUpdated = Object.assign({}, order, {
            receive: '서울시 서초구 논현동...',
          }); // 빈객체와 복사할 소스 객체(1depth)
          setOrder(orderUpdated);
        }}
      >
        {'배송지 수정'}
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          // violation // 불변성을 지켜야한다.
          //   const orderUpdated = Object.assign({}, order);
          //   orderUpdated.payment.method = 'Mobile';
          //   //   setOrder(orderUpdated); // 가능
          //   setPayment(orderUpdated.payment); // 얕은 copy

          // sol.
          const orderUpdated = Object.assign({}, order);
          orderUpdated.payment = Object.assign({}, order.payment, {
            method: 'Mobile',
          });
          setPayment(orderUpdated.payment);
        }}
      >
        {'결제수단 변경'}
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          //violation
          //   order.goods.push({
          //     no: 'd002-003',
          //     name: '블루양말',
          //     price: 2000,
          //     amount: 1,
          //   });
          //   setGoods(goods);

          // sol.1
          //   const goodsUpdate = goods.concat({
          //     no: 'd002-003',
          //     name: '블루양말',
          //     price: 2000,
          //     amount: 1,
          //   });
          //   setGoods(goodsUpdate);

          // sol.2
          const goodsUpdated = [
            {
              no: 'd002-003',
              name: '블루양말',
              price: 2000,
              amount: 1,
            },
            ...goods,
          ]; // 새로운 배열을 만들어서 배열을 복사함. [{}, {}, {}, ...goods], [goods.slice(0,1), {}, goods.slice(1)]
          setGoods(goodsUpdated);
        }}
      >
        {'상품 추가'}
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          // violation
          //   goods[2].name = '블루면티';
          //   setGoods(goods);

          const goodsUpdate = [
            ...goods.slice(0, 2),
            Object.assign({}, goods[2], { name: '블루면티' }),
            ...goods.slice(3),
          ];
          setGoods(goodsUpdate);
        }}
      >
        {'3rd 상품이름 변경'}
      </button>
      <br />
      <br />
      <hr />
      <p>{`배송지:${order.receive}`}</p>
      <p>{`결제수단:${payment.method}`}</p>{' '}
      {/* 왜 order.payment.method는 안됨? */}
      <p>{'상품'}</p>
      <ul>
        {goods.map((g, i) => (
          <li key={i}>{`${g.name}:${g.price}:${g.amount}`}</li>
        ))}
      </ul>
    </div>
  );
}

export { App };
