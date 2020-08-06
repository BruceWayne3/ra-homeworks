'use strict';

const Stars = ({count}) => {
  const stars = [];
  for(let i = 0; i < count; i++) {
    stars[i] = <Star/>
  }
  return (
  <ul className="card-body-stars u-clearfix">
  <li>
    {(count < 1 || count > 5 || typeof(count) !== 'number') ? '' : stars}
  </li>
</ul>
  )
}

Stars.defaultProps = {
count: 0
};
