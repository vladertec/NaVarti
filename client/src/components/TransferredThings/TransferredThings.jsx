import React from "react"

const TransferredThings = ({ items }) => {
  return (
    <div className="transferred-things">
      <h2 className="transferred-things__title">Вже передали</h2>
      <p className="transferred-things__description">
        Перед тим як сфокусуватися на основних 4 напрямках ми встигли передати:
        fdkhkfjndsg kdgfn dgskgb jfdg kdsfb fgd js gb djbhfbfdshjgdfjh fdbg jsdg
        bdfjgb jfbnd lkvfskfjd ndfk kfdbg egfdk kfgbkgdfsjl kgbekb ekg fk bkt
        bgbds fd gfdsiubfjkbn dfkg bigfdb kjb dfks fdkgb ldsg gdfl sgfb
        fgfkjdsgdfg dfkb fdgfgdsk gkj gfdlkbfgd gfdgf kgfbkfdgs dfgb
        fsdkfdbgdbkjfbgfd sf kgfdb gds gfs
      </p>
      <div className="transferred-things__items items-container">
        {items.map((item, index) => (
          <div key={index} className="items-container__item">
            <span className="items-container__item-name">{item.name}</span>
            <span className="items-container__item-quantity">
              {item.quantity}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TransferredThings
