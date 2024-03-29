import { useNavigate } from 'react-router-dom';
import '../../assets/css/Home.css';
import homepage from '../../assets/images/homepage2.jpg';
import AdultsImage from '../../assets/images/adults.jpeg';
import BabyImage from '../../assets/images/babyimage1.jpeg';
import KidsImage from '../../assets/images/kidsimage.jpeg';

const home = () => {
  const navigate=useNavigate();
  const handlekids =()=>
  {
    navigate("/user/gender")
  }
  const handletoddler =()=>
  {
    navigate("/user/toddler")
  }
  const handleadults =()=>
  {
    navigate("/user/adults")
  }
  return (
    <div className="home_background">
    <div className='home_head'>WELCOME TO MOMENTOUS ENDEAVOURS</div>
    <div className='home_head_side'>YOUR`S TRULY BIRTHDAY PARTY ORGANIZER</div>
    <br />
    
    <img className="home_image" src={homepage} alt='Avatar' style={{height:"80vh",width:"80%"}}></img>
    <br />
    <br />
    <br />
    
    <div className='home_categories'>EXPLORE YOUR CATEGORIES</div>
    <div className="home_card" onClick={handletoddler}>
  <img src={BabyImage} alt="Avatar" style={{height:"50vh",width:"100%"}} />
  <div class="home_container">
    <h4><b>Toddler's Birthday Party</b></h4>
    <p>Age: 1-3 years</p>
    </div>
    </div>


    <div className="home1_card"  onClick={handlekids}>
  <img src={KidsImage} alt="Avatar" style={{height:"50vh",width:"100%"}} />
  <div class="home1_container">
    <h4><b>Kids Birthday Party</b></h4>
    <p>Age: 4-17 years</p>
    </div>
    </div>

    <div className="home2_card" onClick={handleadults}>
  <img src={AdultsImage} alt="Avatar" style={{height:"50vh",width:"100%"}} />
  <div class="home2_container">
    <h4><b>Adults Birthday Party</b></h4>
    <p>Age: 18+ years</p>
    </div>
    </div>
    <br />
    <br />
    </div>
    )
  }
  export default home

  // <Data />


// import React, { useState } from 'react';
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { RxDotFilled } from 'react-icons/rx';

// import { data } from '../../components/data.jsx';

// function home() {
//   const slides = [
//     {
//       url: 'https://i.pinimg.com/originals/4b/c4/96/4bc4966effa54683f0ffeabbe5bb73a1.jpg',
//     },
//     {
//       url: 'https://img.freepik.com/premium-photo/rabbit-child-happy_163305-217909.jpg?size=626&ext=jpg&ga=GA1.1.69025442.1710477098&semt=ais',
//     },
//     {
//       url: 'https://img.freepik.com/premium-photo/first-birthday-baby_108930-3555.jpg?size=626&ext=jpg&ga=GA1.1.69025442.1710477098&semt=ais',
//     },
//     {
//       url: 'https://img.freepik.com/free-photo/happy-multi-generation-family-surprising-senior-woman-with-party-her-birthday_637285-10326.jpg?w=996&t=st=1710693480~exp=1710694080~hmac=b11dbe29f24a480815e381a8d6c06bc999bb057647027a01843b5b9a409591c6',
//     },
//     {
//       url: 'https://img.freepik.com/free-photo/children-celebrating-birthday_23-2148155321.jpg?w=996&t=st=1710693515~exp=1710694115~hmac=ea0409f082f94a2b16d5d4b6b5d672e2aeb2347e41125a8a57801ea590b6afd4',
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   return (
//     <div>
//       <div className='text-center font-bold mt-7 text-4xl font-sans'>WELCOME TO BIRTHDAY BASH!!!!</div>
//       <div className='text-center font-semibold mt-3 text-extralight '>YOUR'S TRULY BIRTHDAY PARTY ORGANIZER</div>

//       <div className='max-w-[1150px] h-[680px] w-full m-auto py-16 px-4 relative group'>
//         <div
//           style={{ backgroundImage: url(${slides[currentIndex].url}) }}
//           className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
//         ></div>
//         {/* Left Arrow */}
//         <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//           <BsChevronCompactLeft onClick={prevSlide} size={30} />
//         </div>
//         {/* Right Arrow */}
//         <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//           <BsChevronCompactRight onClick={nextSlide} size={30} />
//         </div>
//         <div className='flex top-4 justify-center py-2'>
//           {slides.map((slide, slideIndex) => (
//             <div
//               key={slideIndex}
//               onClick={() => goToSlide(slideIndex)}
//               className='text-2xl cursor-pointer'
//             >
//               <RxDotFilled />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="menu bg-gray-100 mt-10 mx-auto">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-3 gap-3">
//             {data.map((items, index) => {
//               return (
//                 <div className="box bg-white border border-gray-200 p-6 relative z-10 transition duration-300 hover:bg-black hover:text-white" key={index}>
//                   <div className="id flex justify-between items-center mb-4">
//                     <span className="text-orange-500 text-3xl">{items.icon}</span>
//                     <h1 className="text-white text-3xl">{items.id}</h1>
//                   </div>
//                   <h3 className="text-xl font-semibold mb-2">{items.title}</h3>
//                   <p className="text-gray-600">{items.desc}</p>
//                   <img src={items.cover} alt={items.title} className="mt-4" />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default home;


// import React, { useState } from 'react';
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { RxDotFilled } from 'react-icons/rx';
// import { data } from '../../components/data.jsx';
// import '../../assets/css/Home.css'; // Import your CSS file

// function Home() {
//   const slides = [
//     {
//       url: 'https://i.pinimg.com/originals/4b/c4/96/4bc4966effa54683f0ffeabbe5bb73a1.jpg',
//     },
//     // Add other slide objects here
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   return (
//     <div>
//       <div className='text-center font-bold mt-7 text-4xl font-sans'>WELCOME TO BIRTHDAY BASH!!!!</div>
//       <div className='text-center font-semibold mt-3 text-extralight '>YOUR'S TRULY BIRTHDAY PARTY ORGANIZER</div>

//       <div className='max-w-1150 h-680 w-full m-auto py-16 px-4 relative group'>
//         <div
//           style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
//           className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
//         ></div>
//         {/* Left Arrow */}
//         <div className='hidden group-hover:block absolute top-1/2 -translate-x-0 transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//           <BsChevronCompactLeft onClick={prevSlide} size={30} />
//         </div>
//         {/* Right Arrow */}
//         <div className='hidden group-hover:block absolute top-1/2 -translate-x-0 transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//           <BsChevronCompactRight onClick={nextSlide} size={30} />
//         </div>
//         <div className='flex top-4 justify-center py-2'>
//           {slides.map((slide, slideIndex) => (
//             <div
//               key={slideIndex}
//               onClick={() => goToSlide(slideIndex)}
//               className='text-2xl cursor-pointer'
//             >
//               <RxDotFilled />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="menu bg-gray-100 mt-10 mx-auto">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-3 gap-3">
//             {data.map((items, index) => {
//               return (
//                 <div className="box bg-white border border-gray-200 p-6 relative z-10 transition duration-300 hover:bg-black hover:text-white" key={index}>
//                   <div className="id flex justify-between items-center mb-4">
//                     <span className="text-orange-500 text-3xl">{items.icon}</span>
//                     <h1 className="text-white text-3xl">{items.id}</h1>
//                   </div>
//                   <h3 className="text-xl font-semibold mb-2">{items.title}</h3>
//                   <p className="text-gray-600">{items.desc}</p>
//                   <img src={items.cover} alt={items.title} className="mt-4" />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

