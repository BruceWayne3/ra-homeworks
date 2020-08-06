const Menu = function({items, opened}) {
	if(opened === true) {
    const result = items.map((item) => <li><a href={item.href}>{item.title}</a></li>);
		return (
		<div className="menu menu-open">
  <div className="menu-toggle"><span></span></div>
  <nav>
  		<ul>
      {result}
    </ul>
  </nav>
</div>)
	} else {
    return (
      <div className="menu">
  <div className="menu-toggle"><span></span></div>
</div>
    )
	}
}
