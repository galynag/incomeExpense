/**
 * Created by Galina on 13.09.2017.
 */
import React from 'react';
import { observer, inject } from 'mobx-react';

import CategoryForm from './category-form';


const Component = inject('categoryStore')(observer(({ categoryStore }) => {
    return (
        <CategoryForm
            categories={categoryStore.getCategories()}
            delCategory={() => categoryStore.delCategory()}
            editCategory={() => categoryStore.editCategory()}
            newCategory={() => categoryStore.newCategory()}
            toggleCategory={() => categoryStore.toggleCategory()}/>
    );
}));

Component.displayName = 'LoginForm';
export default Component;