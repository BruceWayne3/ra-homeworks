'use strict';
const handleColor = (type) => {
  switch(type) {
        case 'unisex':
          return "black";
        case 'male':
          return "blue";
        case 'female':
          return "orange";
      }
}

const App = ({items}) => (
  <main>
    {items.map(item => {
      return <Item color={handleColor(item.type)} item={item} />
    })}
  </main>
);
