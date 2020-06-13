import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
      super();
  
      this.state = {
        sections: [
          {
            title: 'accs',
            imageUrl: 'https://images.solecollector.com/complex/images/c_fill,dpr_2.0,f_auto,fl_lossy,q_auto,w_680/cdemjrypformyd2fdrbp/kelly-oubre-jr-wearing-supreme-shooting-sleeve',
            id: 1
          },
          {
            title: 'SW',
            imageUrl: 'https://blog.barrystickets.com/wp-content/uploads/2013/01/Miami-Heat-Championship-Rings-.jpg',
            id: 2
          },
          {
            title: 'snkrs',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3
          },
          {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4
          },
          {
            title: 'mens',
            imageUrl: 'https://pmcwwd.files.wordpress.com/2019/12/unknwn-close-up.jpg',
            size: 'large',
            id: 5
          }
        ]
      };
    }
  
    render() {
      return (
        <div className='directory-menu'>
          {this.state.sections.map(({title, imageUrl, id, size}) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
          ))}
        </div>
      );
    }
  }
  
  export default Directory;