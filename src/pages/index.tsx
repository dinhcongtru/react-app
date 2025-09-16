import React from 'react';
import { useCounterDispatch, useCounterSelector } from '@/hooks/useCounter';
import { decrement, increment, setAmount } from '@/store/modules/counter/counter';
import { useFetchProduct, useFetchProductById } from '@/hooks/useFetchProduct';
import { useFetchUser, useFetchUserById } from '@/hooks/useFetchUser';
import { useDebounce } from '@/hooks/useDebounce';
import { images } from '@/utils/images';
import './index.scss';

const HomePage: React.FC = () => {
  const dispatch = useCounterDispatch();
  const count = useCounterSelector(state => state.counter.value);
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleInputChange = useDebounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setAmount(Number(value)));
  }, 500);
  // call apis
  const { products, loading } = useFetchProduct();
  console.log('products', products, 'loading', loading);
  const { product, loading: loadingProduct } = useFetchProductById('1');
  console.log('product', product, 'loadingProduct', loadingProduct);
  const { users, loading: loadingUsers } = useFetchUser();
  console.log('users', users, 'loadingUsers', loadingUsers);
  const { user, loading: loadingUser } = useFetchUserById('1');
  console.log('user', user, 'loadingUser', loadingUser);

  return (
    <>
      <div className="wrp-container page-home">
        <section className="hero-section">
          <h1 className="hero-title">Dynamic Layout System {count}</h1>
          <p className="hero-description">
            This is a dynamic layout system that allows you to switch between different layouts and
            components.
          </p>
        </section>

        <section className="controls-section">
          <div className="controls-grid">
            <div className="control-group">
              <h3>Counter</h3>
              <div className="button-group">
                <button className="btn" onClick={handleIncrement}>
                  +
                </button>
                <button className="btn" onClick={handleDecrement}>
                  -
                </button>
              </div>
            </div>
            <figure>
              <img src={images['logo.svg']} alt="logo-react" />
            </figure>
            <div className="form-group">
              <input
                type="text"
                id="text"
                className="input-control"
                placeholder="Enter counter text"
                onChange={handleInputChange}
              />
            </div>
            <div className="control-group">
              <h3>Components</h3>
              <div className="checkbox-group">
                <label className="checkbox-item">
                  <input type="checkbox" />
                  <span>Show Header</span>
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" />
                  <span>Show Footer</span>
                </label>
              </div>
            </div>
          </div>
        </section>

        <section className="demo-content">
          <h2>Demo Content</h2>
          <div className="content-grid">
            <div className="content-card">
              <h3>Card 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore.
              </p>
            </div>
            <div className="content-card">
              <h3>Card 2</h3>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo.
              </p>
            </div>
            <div className="content-card">
              <h3>Card 3</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2>Current Layout Info</h2>
          <div className="info-display">
            <div className="info-item">
              <strong>Layout Type:</strong>
            </div>
            <div className="info-item">
              <strong>Header:</strong>
            </div>
            <div className="info-item">
              <strong>Footer:</strong>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
