const breads = [
    {
        type: 'White',
        color: 'White',
        price: 10,
        id: '1'
    },
    {
        type: 'Wheat',
        color: 'Brown',
        price: 10,
        id: '2'
    },
    {
        type: 'Rye',
        color: 'Not-White',
        price: 10,
        id: '3'
    }
];

let selectedBreadId = '';

const setSelectedBread = (breadId) => {
    selectedBreadId = breadId;
    console.log('selectedBreadId', selectedBreadId);
  };

const getBread = () => {
    return breads;
}
export default { setSelectedBread, getBread }