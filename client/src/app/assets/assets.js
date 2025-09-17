import logo from './logo.svg'
import gmail_logo from './gmail_logo.svg'
import facebook_logo from './facebook_logo.svg'
import instagram_logo from './instagram_logo.svg'
import twitter_logo from './twitter_logo.svg'
import menu_icon from './menu_icon.svg'
import search_icon from './search_icon.svg'
import close_icon from './close_icon.svg'
import users_icon from './users_icon.svg'
import car_icon from './car_icon.svg'
import location_icon from './location_icon.svg'
import fuel_icon from './fuel_icon.svg'
import addIcon from './addIcon.svg'
import carIcon from './carIcon.svg'
import carIconColored from './carIconColored.svg'
import dashboardIcon from './dashboardIcon.svg'
import dashboardIconColored from './dashboardIconColored.svg'
import addIconColored from './addIconColored.svg'
import listIcon from './listIcon.svg'
import listIconColored from './listIconColored.svg'
import cautionIconColored from './cautionIconColored.svg'
import arrow_icon from './arrow_icon.svg'
import star_icon from './star_icon.svg'
import check_icon from './check_icon.svg'
import tick_icon from './tick_icon.svg'
import delete_icon from './delete_icon.svg'
import eye_icon from './eye_icon.svg'
import eye_close_icon from './eye_close_icon.svg'
import filter_icon from './filter_icon.svg'
import edit_icon from './edit_icon.svg'
import calendar_icon_colored from './calendar_icon_colored.svg'
import location_icon_colored from './location_icon_colored.svg'
import testimonial_image_1 from './testimonial_image_1.png'
import testimonial_image_2 from './testimonial_image_2.png'
import main_restaurant from './main_restaurant.jpg'
import banner_car_image from './banner_car_image.png'
import user_profile from './user_profile.png'
import upload_icon from './upload_icon.svg'
import car_image1 from './car_image1.png'
import car_image2 from './car_image2.png'
import car_image3 from './car_image3.png'
import car_image4 from './car_image4.png'
import restaurant_desert from './restaurant_desert.jpg'

export const cityList = ['New York', 'Los Angeles', 'Houston', 'Chicago']

export const assets = {
    logo,
    gmail_logo,
    facebook_logo,
    instagram_logo,
    twitter_logo,
    menu_icon,
    search_icon,
    close_icon,
    users_icon,
    edit_icon,
    car_icon,
    location_icon,
    fuel_icon,
    addIcon,
    carIcon,
    carIconColored,
    dashboardIcon,
    dashboardIconColored,
    addIconColored,
    listIcon,
    listIconColored,
    cautionIconColored,
    calendar_icon_colored,
    location_icon_colored,
    arrow_icon,
    star_icon,
    check_icon,
    tick_icon,
    delete_icon,
    eye_icon,
    eye_close_icon,
    filter_icon,
    testimonial_image_1,
    testimonial_image_2,
    main_restaurant,
    banner_car_image,
    car_image1,
    upload_icon,
    user_profile,
    car_image2,
    car_image3,
    car_image4,
    restaurant_desert
}

export const menuLinks = [
    { name: 'Home', path: '/' },
    { name: 'Booking', path: '/reservations' },
    { name: 'My Bookings', path: '/my-bookings' },
]

export const ownerMenuLinks = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: dashboardIcon, coloredIcon: dashboardIconColored },
    { name: 'Add Table', path: '/admin/add-table', icon: addIcon, coloredIcon: addIconColored },
    { name: 'Manage Tables', path: '/admin/manage-tables', icon: listIcon, coloredIcon: listIconColored },
    { name: 'Reservations', path: '/admin/reservations', icon: calendar_icon_colored, coloredIcon: calendar_icon_colored },
]

export const dummyUserData = {
    '_id': '6847f7cab3d8daecdb517095',
    'name': 'GreatStack',
    'email': 'admin@example.com',
    'role': 'owner',
    'image': user_profile,
}

export const dummyTableData = [
    {
        '_id': '67ff5bc069c03d4e45f30b77',
        'number': 'T01',
        'capacity': 4,
        'section': 'Main Hall',
        'image': car_image1,
        'type': 'Standard',
        'isWindow': true,
        'pricePerSlot': 50,
        'location': 'Ground Floor',
        'description': 'Beautiful window-side table perfect for couples and small groups, with a scenic view of the garden.',
        'isAvailable': true,
        'createdAt': '2025-04-16T07:26:56.215Z',
    },
    {
        '_id': '67ff6b758f1b3684286a2a65',
        'number': 'T02',
        'capacity': 6,
        'section': 'Main Hall',
        'image': car_image2,
        'type': 'Family',
        'isWindow': false,
        'pricePerSlot': 80,
        'location': 'Ground Floor',
        'description': 'Spacious family table in a quiet corner, ideal for family gatherings and group dining.',
        'isAvailable': true,
        'createdAt': '2025-04-16T08:33:57.993Z',
    },
    {
        '_id': '67ff6b9f8f1b3684286a2a68',
        'number': 'T03',
        'capacity': 2,
        'section': 'Terrace',
        'image': car_image3,
        'type': 'Premium',
        'isWindow': true,
        'pricePerSlot': 100,
        'location': 'Rooftop',
        'description': 'Exclusive rooftop table with panoramic city views, perfect for romantic dinners.',
        'isAvailable': true,
        'createdAt': '2025-04-16T08:34:39.592Z',
    },
    {
        '_id': '68009c93a3f5fc6338ea7e34',
        'number': 'T04',
        'capacity': 8,
        'section': 'Private Room',
        'image': car_image4,
        'type': 'VIP',
        'isWindow': false,
        'pricePerSlot': 150,
        'location': 'First Floor',
        'description': 'Private dining room with dedicated service, perfect for business meetings or special celebrations.',
        'isAvailable': true,
        'createdAt': '2025-04-17T06:15:47.318Z',
    }
]

export const dummyReservationsData = [
    {
        '_id': '68482bcc98eb9722b7751f70',
        'table': dummyTableData[0],
        'user': '6847f7cab3d8daecdb517095',
        'customerName': 'John Smith',
        'customerPhone': '+1234567890',
        'numberOfGuests': 3,
        'date': '2025-06-13T19:00:00.000Z',
        'duration': 2, // hours
        'specialRequests': 'Birthday celebration, window seat preferred',
        'status': 'confirmed',
        'price': 100,
        'createdAt': '2025-06-10T12:57:48.244Z',
    },
    {
        '_id': '68482bb598eb9722b7751f60',
        'table': dummyTableData[1],
        'user': '6847f7cab3d8daecdb517095',
        'customerName': 'Sarah Johnson',
        'customerPhone': '+1234567891',
        'numberOfGuests': 5,
        'date': '2025-06-12T18:30:00.000Z',
        'duration': 2.5,
        'specialRequests': 'Vegetarian menu options needed',
        'status': 'pending',
        'price': 200,
        'createdAt': '2025-06-10T12:57:25.613Z',
    },
    {
        '_id': '684800fa0fb481c5cfd92e56',
        'table': dummyTableData[2],
        'user': '6847f7cab3d8daecdb517095',
        'customerName': 'Michael Brown',
        'customerPhone': '+1234567892',
        'numberOfGuests': 2,
        'date': '2025-06-11T20:00:00.000Z',
        'duration': 1.5,
        'specialRequests': 'Anniversary celebration',
        'status': 'pending',
        'price': 150,
        'createdAt': '2025-06-10T09:55:06.379Z',
    },
    {
        '_id': '6847fe790fb481c5cfd92d94',
        'table': dummyTableData[3],
        'user': '6847f7cab3d8daecdb517095',
        'customerName': 'Emily Davis',
        'customerPhone': '+1234567893',
        'numberOfGuests': 7,
        'date': '2025-06-11T19:30:00.000Z',
        'duration': 3,
        'specialRequests': 'Business dinner, need projector setup',
        'status': 'confirmed',
        'price': 450,
        'createdAt': '2025-06-10T09:44:25.410Z',
    }
]

export const dummyDashboardData = {
    'totalTables': 4,
    'totalReservations': 8,
    'pendingReservations': 2,
    'availableTables': 3,
    'recentBookings': [
        dummyReservationsData[0],
        dummyReservationsData[1]
    ],
    'monthlyRevenue': 2500
}