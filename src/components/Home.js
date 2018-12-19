import React, { Component } from 'react';
import Categories from '../mock/categories';
import CategoryItem from './CategoryItem';
import { Input } from 'reactstrap';
import AddCategoryModal from './AddCategoryModal'
import MainNavbar from './Navbar';

class Home extends Component {
  render() {
    return (
      <div>
        <MainNavbar />

        <div className="categories-list container">
          <AddCategoryModal />
          <Input type="search" name="search" id="exampleSearch" placeholder="Поиск группы" />

          <div className="row">
            {Categories.map(categoryItem =>
              <CategoryItem category={categoryItem}></CategoryItem>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home;