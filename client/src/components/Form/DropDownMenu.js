import React, { DropDownMenu } from 'react';

class DropDownHear extends DropDownMenu {
    render() {
        return (
            <div>
                <select className="browser-default custom-select">
                    <option>How did you hear about CQKC?</option>
                    <option value="1">Kansas City Oasis</option>
                    <option value="2">Ethical Society of St. Louis</option>
                    <option value="3">From a Friend or Relative</option>
                </select>
            </div>
        );
    }
}

export default DropDownHear;