import React from "react"
import './controller.css'

function Controller({ itemCount, increamentItem, decreamentItem, price, name }) {
    return (
        <div className="controller">
            <div>
                <button className="btn btn-add-item" onClick={increamentItem}>
                    Add
                </button>
            </div>
            <div>
                <h4 className="item-name">
                    {name} ({price})
                </h4>
            </div>
            <div>
                <button className="btn btn-remove-item"
                    onClick={decreamentItem}
                    disabled={itemCount === 0}>
                    Remove
                </button>
            </div>
        </div>
    )
}

export default Controller
