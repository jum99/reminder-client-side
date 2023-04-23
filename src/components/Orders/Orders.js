import React from 'react';

const Orders = () => {
    return (
        <div>
            <h1>Orders</h1>
        </div>
    );
};

export default Orders;

// import { Container, Grid, Typography } from '@mui/material';
// import React from 'react';
// import Navigation from '../../Pages/Shared/Navigation/Navigation';
// import Order from './Order';

// const orders = [
//     {
//         id: 1,
//         name: 'Teeth Orthodonics',
//         time: '08.00 AM - 09.00 AM',
//         space: 10,
//     },
//     {
//         id: 2,
//         name: 'Cosmetic Dentistry',
//         time: '09.00 AM - 10.00 AM',
//         space: 8,
//     },
//     {
//         id: 3,
//         name: 'Teeth Cleaning',
//         time: '10.00 AM - 11.00 AM',
//         space: 9,
//     },
//     {
//         id: 4,
//         name: 'Cavity Protection',
//         time: '11.00 AM - 12.00 PM',
//         space: 5,
//     },
//     {
//         id: 5,
//         name: 'Pediatric Dental',
//         time: '06.00 PM - 07.00 PM',
//         space: 10,
//     },
//     {
//         id: 6,
//         name: 'Oral Surgery',
//         time: '07.00 PM - 08.00 PM',
//         space: 10,
//     },
// ]

// const Orders = () => {

//     return (
//         <>
//             <Navigation />
//             <Container>
//                 <Typography variant="h4" sx={{ color: 'info.main', mb: 3 }}>Orders</Typography>
//                 <Grid container spacing={2}>
//                     {
//                         orders.map(order => <Order
//                             key={order.id}
//                             order={order}
//                         >
//                         </Order>)
//                     }
//                 </Grid>
//             </Container>
//         </>
//     );
// };

// export default Orders;