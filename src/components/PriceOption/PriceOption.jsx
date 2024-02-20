import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='flex flex-col bg-blue-500 text-white rounded-md p-4'>
            <h2>
                <span className='text-6xl'>{price}</span>
                <span className='text-3xl'>/mon</span>
            </h2>
            <h4 className='text-3xl my-6'>{name}</h4>
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index
                    } feature={feature}></Feature>)
                }
            </div>
            <button className='w-full mt-10 py-3 px-4 rounded-lg bg-blue-900'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;