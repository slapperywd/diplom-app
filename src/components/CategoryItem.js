import React, { Component } from 'react';
import folderIcon from '../icons/folder-icon.png';

class CategoryItem extends Component {
    render() {
        return (
            <div className="hero col-sm-3">
                <a href="#">
                <img src={folderIcon} className="App-logo" alt="logo" height="120px" width="120px"/>
                <p className="text-center">{this.props.category.name}</p>  
                </a>
            </div>
        )
    }
}

export default CategoryItem;