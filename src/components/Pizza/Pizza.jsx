import React from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from '../../redux/slices/cartSlice';

import { ReactComponent as PlusIcon } from '../../assets/img/plus.svg';

const Pizza = ({ id, title, imageUrl, species, types }) => {
  const dispatch = useDispatch();

  const typeNames = ['традиционное', 'тонкое'];

  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(0);
  const [price, setPrice] = React.useState(species[0].price);

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: typeNames[activeType],
      size: species[activeSize].size,
    };
    dispatch(addItem(item));
  };

  const onClickSize = index => {
    setActiveSize(index);
    setPrice(species[index].price);
  };

  return (
    <div className="pizza-block" key={title}>
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types?.map(typeId => (
            <li
              key={typeId}
              className={activeType === typeId ? 'active' : ''}
              onClick={() => setActiveType(typeId)}
            >
              {typeNames[typeId]}
            </li>
          ))}
        </ul>
        <ul>
          {species?.map(({ size }, i) => (
            <li
              key={size}
              className={activeSize === i ? 'active' : ''}
              onClick={() => onClickSize(i)}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{price} ₴</div>
        <div className="button button--outline button--add" onClick={onClickAdd}>
          <PlusIcon />
          <span>Добавить</span>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
