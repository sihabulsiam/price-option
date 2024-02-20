import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

  const priceOptions =  [
        {
          "id": 1,
          "name": "Basic",
          "price": "29.99",
          "features": [
            "Access to cardio area",
            "Limited access to weightlifting area",
            "Access to group fitness classes"
          ]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": "49.99",
          "features": [
            "Full access to cardio area",
            "Full access to weightlifting area",
            "Access to all group fitness classes",
            "Locker rental"
          ]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": "79.99",
          "features": [
            "24/7 gym access",
            "Personal trainer sessions twice a month",
            "Access to sauna and spa facilities",
            "Free smoothie bar"
          ]
        }
      ]
      

    return (
        <div className="w-11/12 mx-auto mt-8">
            <h2 className="text-4xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-5">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;