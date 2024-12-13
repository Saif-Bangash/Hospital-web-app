/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef } from "react";
import { useTable } from "react-table";
import CountUp from "react-countup";
import Chart from "react-apexcharts";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import "./Dashboard.css";
import CardData from "../../Component/Imagecard/Cardimg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useSpring, animated } from 'react-spring';


ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  PointElement,
  Legend,
  LineElement
);

const Dashboard = () => {
  const swiperRef = useRef(null);
  const candleOptions = {
    chart: {
      type: "candlestick",
      toolbar: { show: false },
    },
    xaxis: {
      type: "datetime",
      labels: { style: { fontSize: "12px" }, offsetX: -10 },
      tickAmount: 6,
    },
  };

  const options = {
    series: [
      {
        name: "candle",
        data: [
          {
            x: new Date(1538778600000),
            y: [6629.81, 6650.5, 6623.04, 6633.33],
          },
          { x: new Date(1538780400000), y: [6632.01, 6643.59, 6620, 6630.11] },
          { x: new Date(1538784000000), y: [6635.65, 6651, 6629.67, 6638.24] },
          { x: new Date(1538785800000), y: [6638.24, 6640, 6620, 6624.47] },
          {
            x: new Date(1538787600000),
            y: [6624.53, 6636.03, 6621.68, 6624.31],
          },
          { x: new Date(1538789400000), y: [6624.61, 6632.2, 6617, 6626.02] },
          { x: new Date(1538791200000), y: [6627, 6627.62, 6584.22, 6603.02] },
          { x: new Date(1538793000000), y: [6605, 6608.03, 6598.95, 6604.01] },
          { x: new Date(1538794800000), y: [6604.5, 6614.4, 6602.26, 6608.02] },
          {
            x: new Date(1538796600000),
            y: [6608.02, 6610.68, 6601.99, 6608.91],
          },
          { x: new Date(1538798400000), y: [6612, 6615.13, 6605.09, 6612] },
          { x: new Date(1538802000000), y: [6612, 6624.12, 6608.43, 6622.95] },
          { x: new Date(1538805600000), y: [6618.69, 6618.74, 6610, 6610.4] },
          { x: new Date(1538807400000), y: [6611, 6622.78, 6610.4, 6614.9] },
          { x: new Date(1538809200000), y: [6614.9, 6626.2, 6613.33, 6623.45] },
        ],
      },
    ],
  };

  const patientData = [
    {
      name: "Jhon Kural",
      department: "Monte Carlo",
      date: "11/03/2020",
      serial: "MDC65454",
      Amount: "$ 29,192",
      image:
        "https://demo.dashboardpack.com/hospital-html/img/patient/pataint.png",
    },
    {
      name: "Jhon Kural",
      department: "Monte Carlo",
      date: "11/03/2020",
      serial: "MDC65454",
      Amount: "$ 29,192",
      image: "https://demo.dashboardpack.com/hospital-html/img/patient/2.png",
    },
    {
      name: "Jhon Kural",
      department: "Monte Carlo",
      date: "11/03/2020",
      serial: "MDC65454",
      Amount: "$ 29,192",
      image: "https://demo.dashboardpack.com/hospital-html/img/patient/3.png",
    },
    {
      name: "Jhon Kural",
      department: "Monte Carlo",
      date: "11/03/2020",
      serial: "MDC65454",
      Amount: "$ 29,192",
      image: "https://demo.dashboardpack.com/hospital-html/img/patient/4.png",
    },
    {
      name: "Jhon Kural",
      department: "Monte Carlo",
      date: "11/03/2020",
      serial: "MDC65454",
      Amount: "$ 29,192",
      image: "https://demo.dashboardpack.com/hospital-html/img/patient/5.png",
    },
    {
      name: "Jhon Kural",
      department: "Monte Carlo",
      date: "11/03/2020",
      serial: "MDC65454",
      Amount: "$ 29,192",
      image: "https://demo.dashboardpack.com/hospital-html/img/patient/6.png",
    },
  ];

  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Total Recover Report",
        data: [65, 59, 80, 81, 56, 55],
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: "top" },
    },
  };


  const progress = 95;
  const progress1 = 75;
  const progress2 = 55;
  const progress3 = 25;

  const props = useSpring({
    width: `${progress}%`,
    from: { width: '0%' },
    config: { duration: 2000 },
  });
  
  const percentageProps = useSpring({
    transform: `translatex(95%)`,
    opacity: 1,
    from: { transform: 'translatex(0%)', opacity: 0 },
    config: { duration: 2500 },
  });
  
  const percentageProps1 = useSpring({
    transform: `translateX(${progress1}%)`,
    opacity: 1,
    from: { transform: 'translateX(0%)', opacity: 0 },
    config: { duration: 2000 },
  });

  const percentageProps2 = useSpring({
    transform: `translateX(${progress2}%)`,
    opacity: 1,
    from: { transform: 'translateX(0%)', opacity: 0 },
    config: { duration: 2000 },
  });

  const percentageProps3 = useSpring({
    transform: `translateX(${progress3}%)`,
    opacity: 1,
    from: { transform: 'translateX(0%)', opacity: 0 },
    config: { duration: 2000 },
  });

  const props1 = useSpring({
    width: `${progress1}%`,
    from: { width: '0%' },
    config: { duration: 2000 },
  });

  const props2 = useSpring({
    width: `${progress2}%`,
    from: { width: '0%' },
    config: { duration: 2000 },
  });

  const props3 = useSpring({
    width: `${progress3}%`,
    from: { width: '0%' },
    config: { duration: 2000 },
  });

  return (
   <>
    <div className="container-fluid bg-light">
      <div className="row">
        {/* Stats Section */}
        <div className="col-md-6 mt-5">
          <div className="d-flex justify-content-center align-items-center bg-white w-100 rounded">
            <div className="count_content p-5">
              <h3><span style={{color:'#16BBE5'}} className="align-items-center"><CountUp end={520} duration={5} /></span></h3>
              <p style={{ color: "#B2B5C0", fontFamily: "Rajdhani, sans-serif" }}>Doctors</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mt-5">
          <div className="d-flex justify-content-center align-items-center  bg-white w-100 rounded">
            <div className="count_content pt-5">
               <h3><span style={{color: '#EA5D5D'}}><CountUp end={6969} duration={5} /></span></h3>
               <p style={{ color: "#B2B5C0", fontFamily: "Rajdhani, sans-serif" }}>Doctors</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-5">
          <div className="d-flex justify-content-center align-items-center  bg-white w-100 rounded">
            <div className="count_content pt-5">
              <h3><span style={{color: '#FCAD73' }}><CountUp end={4054} duration={5} /></span></h3>
              <p style={{ color: "#B2B5C0", fontFamily: "Rajdhani, sans-serif" }}>Doctors</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-5">
          <div className="d-flex justify-content-center align-items-center  bg-white w-100 rounded">
                <div className="count_content pt-5">
                <h3><span style={{color:'#2DAAB8'}}><CountUp end={1139} duration={5} /></span></h3>
              <p style={{ color: "#B2B5C0", fontFamily: "Rajdhani, sans-serif" }}>Doctors</p>
            </div>
          </div>
        </div>

        {/* Candlestick Chart */}
        <div className="col-lg-12 bg-white mt-4">
          <Chart options={candleOptions} series={options.series} type="candlestick" height={400}/>
        </div>

        {/* Patients Table */}
        <div className="col-lg-7 bg-white rounded-4 mt-5">
          <div className="main-title pt-5 mx-3">
            <form className="d-flex align-items-center">
              <h4 className="me-3 mb-0">Patients</h4>
               <button type="button" className="border-0 rounded-pill d-none d-sm-none d-md-block" >
                <span className="input-group">
                  <img src="https://demo.dashboardpack.com/hospital-html/img/icon/icon_search.svg" alt="Search Icon" className="me-3"/>
                  <div className="search_field w-100">
                    <input type="text" placeholder="Search here..." />
                  </div>
                </span>
              </button>
            </form>
            {/* table data */}
            <table className="tabledata">
              <thead style={{ backgroundColor: "#2DAAB8", color: "#ffffff" }}>
                <tr>
                  <th style={{ padding: "10px", textAlign: "left" }}>
                    Patient Name
                  </th>
                  <th style={{ padding: "10px", textAlign: "left" }}>
                    Department
                  </th>
                  <th style={{ padding: "10px", textAlign: "left" }}>
                    Appointment Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {patientData.map((patient, index) => (
                  <tr
                    key={index} style={{ borderBottom: "1px solid #ddd", color: "#555" }}>
                    <td
                      style={{padding: "10px",display: "flex",alignItems: "center",}}>
                      <img src={patient.image} alt="Patient" style={{ borderRadius: "50%", marginRight: "10px" }} />
                      {patient.name}
                    </td>
                    <td style={{ padding: "25px" }}>{patient.department}</td>
                    <td style={{ padding: "25px" }}>{patient.date}</td>
                  </tr> ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Charts */}
        <div className="col-lg-4">
          <div className="linedata rounded-4 mt-5 mx-2">
            <Line data={chartData} options={chartOptions} />
              </div>
                 <div className="linedata rounded-4 mt-3 mx-2"> 
              <Line data={chartData} options={chartOptions} />
          </div>
        </div>
        {/* Hospital Staff Section */}
        <div className="main-title bg-white mt-4">
          <h5 className="mt-3 px-3">Hospital Staff</h5>
           <div className="d-flex justify-content-end align-items-center mt-3">
              <button className="swiper-button-prev"
                  onClick={() => swiperRef.current.swiper.slidePrev()}>&lt;</button>
                <button className="swiper-button-next ms-3"
              onClick={() => swiperRef.current.swiper.slideNext()}>&gt;</button>
        </div>
      <Swiper ref={swiperRef} spaceBetween={-20} slidesPerView={3} loop={true} navigation={false} autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{ 320: { slidesPerView: 2 }, 375: { slidesPerView: 2 }, 425: { slidesPerView: 2 }, 768: { slidesPerView: 3 },1024: { slidesPerView: 4 },}}style={{ paddingBottom: "0" }}>
           {CardData.map((item, index) => (
               <SwiperSlide key={index}>
                   <div className="card mt-5 d-flex justify-content-center align-items-center border-0"
                        style={{width: "12rem",height: "18rem",marginBottom: "20px",boxShadow: "0 7px 15px rgba(80, 143, 244, 0.15)",}}>
                           <img src={item.image}className="card-img-top mt-5"alt="ff"style={{ width: "50%", height: "auto", objectFit: "cover" }}/>
                         <div className="card-body text-center">
                       <h6 className="card-title">{item.title}</h6>
                      <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
           {/* Recent Activity and progressbar */}
        <div className="col-lg-6 bg-white mt-5 rounded-4 mx-2">
          <div className="min-title">
            <h5 className="pt-5 px-4">Recent Activity</h5>
          </div>
          <hr />

          <div class="Activity_timeline">
            <ul className="unstyled">
              <li className="d-flex align-items-center mb-2">
                <div class="activity_bell me-3"></div>
                  <div class="activity_wrap mx-2">
                     <h6>5 min ago</h6>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque scelerisque</p>
                </div>
              </li>
              <li className="d-flex align-item-center ">
                <div class="activity_bell me-3 mt-5"></div>
                  <div class="activity_wrap mt-2  mx-2">
                      <h6>5 min ago</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque scelerisque</p>
                  </div>
              </li>
              <li className="d-flex align-item-center ">
                <div class="activity_bell me-3 mt-5"></div>
                  <div class="activity_wrap mt-2  mx-2">
                   <h6>5 min ago</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque scelerisque</p>
                </div>
              </li>
              <li className="d-flex align-item-center ">
                <div class="activity_bell me-3 mt-5"></div>
                   <div class="activity_wrap mt-2 mx-2">
                    <h6>5 min ago</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque scelerisque</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/*  progressbar */}
        <div className="col-lg-5 mt-5 bg-white rounded-4 h-75 mx-2">
           <div className="min-title">
             <h5 className="pt-5 px-4">Recent Activity</h5>
               </div>
                 <hr />
                  <animated.div className="animated-progress-bar"
                     style={{
                    ...percentageProps,
                        fontWeight: 'bold',
                        marginBottom: '5px', 
                         width:'20px'  }} >
                        {progress}%
                  </animated.div>
            <div style={{ padding: '0', margin: '0' }}>
                   <animated.div
                     style={{
                      ...props,
                       height: '10px',
                       borderRadius: '5px',
                      background:' rgb(8, 155, 171)',
                      marginBottom: '5px',}}/>
                    </div>
              <div className="mt-5">
                  <animated.div style={{...percentageProps1,fontWeight: 'bold',fontSize: '18px',marginBottom: '-5px',width:'20px'}}>
                    {progress1}%
                   </animated.div>
               </div>
           <animated.div 
               style={{
               ...props1, height: '10px', 
                  borderRadius: '5px',
                   background:' rgb(40, 167, 69)',
                   marginBottom: '-5px',}}
                    />
        <div className="mt-5">
          <animated.div
             style={{...percentageProps2,
              fontWeight: 'bold',
              fontSize: '18px',
              marginBottom: '-5px',
              width:'20px', }}>
               {progress2}%
               </animated.div>
             </div>
         <animated.div
            style={{
            ...props2,
            height: '10px',
            borderRadius: '5px',
            background:' rgb(255, 193, 7)',
          }}
        />
     

      {/* Progress Bar 3 - 25% */}
      <div className="mt-4">
        <animated.div
          style={{
            ...percentageProps3,
            fontWeight: 'bold',
            fontSize: '18px',
            marginBottom: '-5px',
            width:'20px'}}
        >
          {progress3}%
        </animated.div>
      </div>
     
     <animated.div
          style={{
            ...props3,
            height: '10px',
            borderRadius: '5px',
            marginBottom: '35px',
            background:' rgb(220, 53, 69)',}}
         />
            </div>
         </div>
       <div className="d-flex flex-column mt-5 ">
    <div className="content flex-grow-1 ">
</div>
{/* footer */}
  <div className="footer mt-auto bg-white mb-5">
    <div className="container mb-3 rounded-3 ">
      <div className="row">
        <div className="col-lg-12">
          <div className="footer_iner d-flex justify-content-center align-items-center mt-4">
            <p>2020 © Influence - Designed by <a href="/"> <i className="ti-heart"></i> </a><a href="/"> Dashboard</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 </div>
   </>
  );
};

export default Dashboard;
