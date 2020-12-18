import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { fetchItems } from './store/item.actions';
import Button from '@material-ui/core/Button';
import ItemComponent from './Item';
import './itemList.css';

interface Item {
  name: string;
  url: string;
}
interface Props {
  items: Item[];
  fetchItems: any;
}

const ItemList = ({ items, fetchItems }: Props): any => {
  return (
    <div className="item-list">
      <div className="item-list__actions">
        <Button
          className="item-list__fetch-cta"
          variant="contained"
          color="primary"
          onClick={fetchItems}
        >
          Mostrar todos
        </Button>
      </div>
      <div>
        <Grid container spacing={3}>
          {items.map(item => (
            <Grid item xs={12} sm={10} md={3} lg={4}>
              <ItemComponent key={item.name} {...item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  items: state.marketPlace.results,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchItems: () => dispatch(fetchItems),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
