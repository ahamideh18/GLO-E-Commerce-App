import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.components';

// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match, fetchCollectionsStart, isCollectionFetching, isCollectionLoaded }) => {
    useEffect(() => {
        fetchCollectionsStart();
    },[fetchCollectionsStart]);

    // state = {
    //     loading: true
    // }
    // unsubscribeFromSnapshot = null;

    // componentDidMount() {
    //     const { updateCollections } = this.props;
    //     const collectionRef = firestore.collection('collections');

    //     // fetch('https://firestore.googleapis.com/v1/projects/glo-reactapp/databases/(default)/documents/collections')
    //     // .then(res => res.json())
    //     // .then(collections => console.log(collections))
    //     this.unsubscribeFromSnapshot = collectionRef.get().then((snapshot => {
    //         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //         updateCollections(collectionsMap);
    //         this.setState({ loading: false });
    //     }))
    // }

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props) => < CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={(props) => < CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
    // updateCollections: collectionsMap => (dispatch(updateCollections(collectionsMap)))

    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);