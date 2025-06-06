
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter (item => item.category === 'popular');




    return (
        <section className='mb-10'>
         <SectionTitle
          heading="From Our menu"
          subHeading="Popular Item"
         >

         </SectionTitle>


         <div className='grid md: grid-cols-2 gap-10 '>

                {
                    popular.map(item =>  <MenuItem
                    
                    key={item._id}
                    item={item}
                    >

                    </MenuItem> 

                    ) 

            }

         </div>

         <button className='btn btn-outline border-0 border-b-4 mt-10 mx-auto block text-center'>View More Menu</button>


        </section>
    );
};

export default PopularMenu;