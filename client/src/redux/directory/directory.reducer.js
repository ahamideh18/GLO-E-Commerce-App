const INITIAL_STATE = {
    sections: [
        {
            title: 'accs',
            imageUrl: 'https://images.solecollector.com/complex/images/c_fill,dpr_2.0,f_auto,fl_lossy,q_auto,w_680/cdemjrypformyd2fdrbp/kelly-oubre-jr-wearing-supreme-shooting-sleeve',
            id: 1,
            linkUrl: 'shop/accs'
        },
        {
            title: 'memorabilia',
            imageUrl: 'https://blog.barrystickets.com/wp-content/uploads/2013/01/Miami-Heat-Championship-Rings-.jpg',
            id: 2,
            linkUrl: 'shop/memorabilia'
        },
        {
            title: 'snkrs',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'shop/snkrs'
        },
        {
            title: 'womens',
            imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bb-lead3-1562610613.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://pmcwwd.files.wordpress.com/2019/12/unknwn-close-up.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;