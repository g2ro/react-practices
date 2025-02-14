import React, { useState, useEffect } from 'react';
import update from 'react-addons-update';
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
          // sol
          //   const orderUpdated = Object.assign({}, order, {
          //     receive: '서울시 서초구 논현동...',
          //   });
          //   setOrder(orderUpdated);

          // sol.recommended: 프로터피 변경
          const orderUpdated = update(order, {
            receive: {
              $set: '서울시 서초구 논현동...',
            },
          });
          setOrder(orderUpdated);
        }}
      >
        {'배송지 수정'}
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          // sol.
          //   const orderUpdated = Object.assign({}, order);
          //   orderUpdated.payment = Object.assign({}, order.payment, {
          //     method: 'Mobile',
          //   });
          //   setPayment(orderUpdated.payment);

          // sol.recommended: nest 객체 프로퍼티 수정
          const orderUpdated = update(order, {
            payment: {
              method: {
                $set: 'Mobile',
              },
            },
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
          // sol.
          //   const goodsUpdated = [
          //     {
          //   no: 'd002-003',
          //   name: '블루양말',
          //   price: 2000,
          //   amount: 1,
          //     },
          //     ...goods,
          //   ]; // 새로운 배열을 만들어서 배열을 복사함. [{}, {}, {}, ...goods], [goods.slice(0,1), {}, goods.slice(1)]
          //   setGoods(goodsUpdated);

          //sol.recommended: 배열요소 추가
          const goodsUpdated = update(goods, {
            $unshift: [
              { no: 'd002-003', name: '블루양말', price: 2000, amount: 1 },
            ], // [{}, {}] => 여러개도 가능함.
          });
          setGoods(goodsUpdated);
        }}
      >
        {'상품 추가'}
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          //sol
          //   const goodsUpdate = [
          //     ...goods.slice(0, 2),
          //     Object.assign({}, goods[2], { name: '블루면티' }),
          //     ...goods.slice(3),
          //   ];
          //   setGoods(goodsUpdate);

          // sol.recomended: 배열요소 수정
          const goodsUpdate = update(goods, {
            2: {
              name: {
                $set: '블루면티',
              },
            },
          });
          setGoods(goodsUpdate);
        }}
      >
        {'3rd 상품이름 변경'}
      </button>
      <br />
      <br />
      <hr />
      <p>{`배송지:${order.receive}`}</p>
      <p>{`결제수단:${payment.method}`}</p> <p>{'상품'}</p>
      <ul>
        {goods.map((g, i) => (
          <li key={i}>{`${g.name}:${g.price}:${g.amount}`}</li>
        ))}
      </ul>
    </div>
  );
}

export { App };
