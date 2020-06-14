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
            id: 1,
            linkUrl: 'accs'
          },
          {
            title: 'memorabilia',
            imageUrl: 'https://blog.barrystickets.com/wp-content/uploads/2013/01/Miami-Heat-Championship-Rings-.jpg',
            id: 2,
            linkUrl: 'sw'
          },
          {
            title: 'snkrs',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'snkrs'
          },
          {
            title: 'womens',
            imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bb-lead3-1562610613.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'womens'
          },
          {
            title: 'mens',
            imageUrl: 'https://pmcwwd.files.wordpress.com/2019/12/unknwn-close-up.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'mens'
          }
        ]
      };
    }
  
    render() {
      return (
        <div className='directory-menu'>
          {this.state.sections.map(({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps}/>
          ))}
        </div>
      );
    }
  }
  
  export default Directory;