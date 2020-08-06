const FontSelector = ({fonts, selected, onSelect}) => {
    return (
        <div className="font-picker">
        {fonts.map((font, i) => <div className="grid center font-item">
  <input type="radio" name="font" value={font.name} id={font.name} onClick={() => onSelect(fonts[i])}/>
  <label htmlFor={font.name} className="grid-1">
    <PictureFont text="abc" path={font.path}/>
  </label>
</div>)}
        </div>
    )
}
