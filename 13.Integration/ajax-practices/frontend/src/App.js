import React, { useEffect, useState, useRef } from 'react';

import Modal from 'react-modal';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import serialize from 'form-serialize';
import axios from 'axios';
import update from 'react-addons-update';
import './assets/scss/App.scss';
import * as stylesModal from './assets/scss/Modal.scss';
// import data from './assets/json/data.js';

const CreateForm = styled.form``;
const UpdateForm = styled.form``;
const ItemList = styled.ul``;
const Item = styled.li``;

ReactModal.setAppElement('body');

function App() {
  const refCreateForm = useRef(null);
  const [items, setItems] = useState(null);
  // const [modalOpen, setModalOpen] = useState(false);
  // const [updateItem, setUpdateItem] = useState({ type: '', name: '' });

  const [modalData, setModalData] = useState({
    modalOpen: false,
    itemId: 0,
    itemType: '',
    itemName: '',
  });
  const addItemWithImage = async (item) => {
    try {
      // const formData = new FormData();
      // formData.append("name", item.name);
      // formData.append("type", item.type);
      // formData.append("file", item.file);

      const formData = Object.keys(item).reduce((formData, key) => {
        formData.append(key, item[key]);
        return formData;
      }, new FormData()); // 요소들이 여러개 존재할 때 다음 같은 방법으로 진행하는 것이 더 좋을 거 같음

      const result = await axios.post('/item', formData, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      });
      const jsonResult = result.data;
      setItems([jsonResult.data, ...items]);
    } catch (err) {
      console.error(
        err.response
          ? `${err.response.status} ${err.response.data.message}`
          : err,
      );
    }
  };
  const addItem = async (item) => {
    try {
      const response = await fetch('/item', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });

      const jsonResult = await response.json();

      // http 통신 에러
      if (!response.ok || jsonResult.result === 'fail') {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      setItems([jsonResult.data, ...items]);

      refCreateForm.current.reset();
    } catch (err) {
      console.error(err);
    }
  };

  const fetchItems = async () => {
    try {
      const response = await fetch('/item', {
        method: 'get',
        headers: {
          Accept: 'application/json',
        },
        body: null,
      });

      const jsonResult = await response.json();

      // http 통신 에러
      if (!response.ok || jsonResult.result === 'fail') {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      setItems(jsonResult.data);
    } catch (err) {
      console.error(err);
    }
  };
  const clickItemName = async (id) => {
    try {
      const response = await axios.get(`/item/${id}`);
      const jsonResult = response.data; //한단계 밑에 있다 생각하기

      setModalData(
        update(modalData, {
          open: { $set: true },
          itemId: { $set: jsonResult.data.id },
          itemType: { $set: jsonResult.data.type },
          itemName: { $set: jsonResult.data.name },
        }),
      );
    } catch (err) {
      console.error(
        err.response
          ? `${err.response.status} ${err.response.data.message}`
          : err,
      );
    }
  };

  const updateItem = async (id, item) => {
    console.log(id, item);
    try {
      const response = await axios.put(
        `/item/${id}`,
        new URLSearchParams(item).toString(),
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );
      const jsonResult = response.data;
      const index = items.findIndex((item) => item.id === jsonResult.data.id);

      setItems([
        ...items.slice(0, index),
        jsonResult.data,
        ...items.slice(index + 1),
      ]);
      setModalData(
        update(modalData, {
          open: { $set: false },
          itemId: { $set: 0 },
          itemType: { $set: '' },
          itemName: { $set: '' },
        }),
      );
    } catch (err) {
      console.error(
        err.response
          ? `${err.response.status} ${err.response.data.message}`
          : err,
      );
    }
  };

  const deleteItem = async (id) => {
    try {
      const response = await axios.delete(`/item/${id}`);
      const jsonResult = response.data; //한단계 밑에 있다 생각하기

      setItems(items.filter((e) => e.id != jsonResult.data));
    } catch (err) {
      console.error(
        err.response
          ? `${err.response.status} ${err.response.data.message}`
          : err,
      );
    }
  };
  useEffect(() => {
    // 마운트될 때 함수를 호출한다.
    fetchItems();
  }, []);

  return (
    <div id="App">
      <h1>AJAX: Restful API</h1>

      <div>
        <form
          ref={refCreateForm}
          onSubmit={(e) => {
            e.preventDefault();

            try {
              /*
              const item = Array.from(e.target, (el) => {
                if (el.name !== '' && el.value === '') {
                  throw new Error(`validation ${el.name} is empty`);
                }

                return { name: el.name, value: el.value };
              })
                .filter(({ name }) => name !== '')
                .reduce((res, o) => {
                  res[o.name] = o.value;
                  return res;
                }, {});
                */
              Array.from(e.target, (el) => {
                if (el.name !== '' && el.value === '') {
                  throw new Error(`validation ${el.name} is empty`);
                }

                return null;
              });
              //   const queryString = serialize(e.target);
              const item = serialize(e.target, { hash: true });
              addItem(item);
              e.target.reset();
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <select name={'type'}>
            <option>BOOK</option>
            <option>CLOTHE</option>
            <option>MUSIC</option>
            <option>CAR</option>
            <option>BEAUTY</option>
            <option>MOVIE</option>
            <option>FOOD</option>
          </select>{' '}
          <input type={'text'} name={'name'} placeholder={'name'} />
          <input type={'submit'} value={'[C]reate (post)'} />
        </form>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            Array.from(e.target, (el) => {
              if (el.name !== '' && el.value === '') {
                throw new Error(`validation ${el.name} is empty`);
              }

              return null;
            });

            const item = serialize(e.target, { hash: true });
            item['file'] = e.target['file'].files[0];

            addItemWithImage(item);
            console.log(item);
          }}
        >
          <select name={'type'}>
            <option>BOOK</option>
            <option>CLOTHE</option>
            <option>MUSIC</option>
            <option>CAR</option>
            <option>BEAUTY</option>
            <option>MOVIE</option>
            <option>FOOD</option>
          </select>{' '}
          <input type={'text'} name={'name'} placeholder={'name'} />
          <input type={'file'} name={'file'} />
          <input type={'submit'} value={'[C]reate (post)'} />
        </form>
      </div>

      <h2 title={'[R]ead (get)'} onClick={() => fetchItems()}>
        Items
      </h2>

      <ItemList>
        {items?.map((item, index) => (
          <Item key={item.id}>
            <h4>
              <b title={'[R]ead (get)'} onClick={() => clickItemName(item.id)}>
                {item.name}
              </b>
              <button
                onClick={() => {
                  deleteItem(item.id);
                }}
              >
                {'[D]elete (delete)'}
              </button>
            </h4>
            <div>
              <span>
                <b>{index + 1}</b>
                <i>{item.type}</i>
              </span>
              <ins
                style={{
                  backgroundImage: `url(${
                    item.image || '/assets/images/no-image.png'
                  })`,
                }}
              />
            </div>
          </Item>
        ))}
      </ItemList>

      <Modal
        isOpen={modalData.open}
        onRequestClose={() => {
          setModalData(update(modalData, { open: { $set: false } }));
        }}
        className={stylesModal.Modal}
        overlayClassName={stylesModal.Overlay}
        style={{ content: { width: 280 } }}
      >
        <h3>Update Item</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            const item = serialize(e.target, { hash: true });
            updateItem(modalData.itemId, item);
          }}
        >
          <label>TYPE</label>{' '}
          <select
            name={'type'}
            value={modalData.itemType}
            onChange={(e) => {
              setModalData(
                update(modalData, {
                  itemType: {
                    $set: e.target.value,
                  },
                }),
              );
            }}
          >
            <option>BOOK</option>
            <option>CLOTHE</option>
            <option>MUSIC</option>
            <option>CAR</option>
            <option>BEAUTY</option>
            <option>MOVIE</option>
            <option>FOOD</option>
          </select>
          <br />
          <br />
          <label>NAME</label>{' '}
          <input
            type={'text'}
            name={'name'}
            value={modalData.itemName}
            onChange={(e) => {
              setModalData(
                update(modalData, {
                  itemName: {
                    $set: e.target.value,
                  },
                }),
              );
            }}
          />
          <hr />
          <input type={'submit'} value={'[U]pdate (update)'} />
        </form>
      </Modal>
    </div>
  );
}

export { App };
