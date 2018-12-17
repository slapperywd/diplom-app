import React, { Component } from 'react';
import Categories from '../mock/categories';
import CategoryItem from './CategoryItem';
import {Input } from 'reactstrap';
import AddCategoryModal from './AddCategoryModal'

class Home extends Component {
    render() {
        return (
            <div className="categories-list container">      
            <AddCategoryModal/>
            <Input type="search" name="search" id="exampleSearch" placeholder="Поиск группы" />
            
            <div className="row">
              {Categories.map(categoryItem =>
                <CategoryItem category={categoryItem}></CategoryItem>
              )}  
            </div>
          </div>
        )
    }
}

export default Home;