const servicesData = [
    {
        title: "Airtime TopUp",
        description: "Making an Online recharge has become very easy and safe on ASBDATA.COM.",
        image: "images/call.png",
        link: "./airtime.html"
    },
    {
        title: "Buy Data",
        description: "Start enjoying this very low rate dataplan for your internet browsing Databundle.",
        image: "images/wireless.png",
        link: "./buydata.html"
    },
    {
        title: "Cable Subscription",
        description: "Instantly Activate Cable Subscription with favorable discounts compared to others.",
        image: "images/tv.png",
        link: "./cable.html"
    },
    {
        title: "Airtime To Cash",
        description: "Convert your airtime easily to cash here at ASBDATA.COM with less charges.",
        image: "images/cash.png",
        link: "./airtimetocash.html"
    },
    {
        title: "Utility Bill Payment",
        description: "Because we understand your needs, we have made bill and utilities payment more convenient.",
        image: "images/light.png",
        link: "./utility.html"
    },
    {
        title: "Bulk SMS",
        description: "Get your SMS in bulk at convient rates, all you have to do is SIGN UP NOW.",
        image: "images/sms.png",
        link: "./bulksms.html"
    },
    // Your services data here
];


const cableData = {
    dstv: [
        { value: "plan1", label: "Plan 1" },
        { value: "plan2", label: "Plan 2" }
    ],
    gotv: [
        { value: "plan3", label: "Plan 3" },
        { value: "plan4", label: "Plan 4" }
    ],
    startimes: [
        { value: "plan5", label: "Plan 5" },
        { value: "plan6", label: "Plan 6" }
    ]
};

const dataOptions = {
    mtn: [
        { value: "500mb", label: "500MB - ₦117" },
        { value: "1gb", label: "1GB - ₦218" },
        { value: "2gb", label: "2GB -  ₦436" },
        { value: "3gb", label: "3GB - ₦654" },
        { value: "5gb", label: "5GB -  ₦1090" },
        { value: "10gb", label: "10GB - ₦2180" }
    ],
    airtel: [
        { value: "500mb", label: "500MB - ₦117" },
        { value: "1gb", label: "1GB - ₦218" },
        { value: "2gb", label: "2GB -  ₦436" },
        { value: "3gb", label: "3GB - ₦654" },
        { value: "5gb", label: "5GB -  ₦1090" },
        { value: "10gb", label: "10GB - ₦2180" }
    ],
    nmobile: [
        { value: "500mb", label: "500MB - ₦117" },
        { value: "1gb", label: "1GB - ₦218" },
        { value: "2gb", label: "2GB -  ₦436" },
        { value: "3gb", label: "3GB - ₦654" },
        { value: "5gb", label: "5GB -  ₦1090" },
        { value: "10gb", label: "10GB - ₦2180" }
    ],
    glo: [
        { value: "500mb", label: "500MB - ₦117" },
        { value: "1gb", label: "1GB - ₦218" },
        { value: "2gb", label: "2GB -  ₦436" },
        { value: "3gb", label: "3GB - ₦654" },
        { value: "5gb", label: "5GB -  ₦1090" },
        { value: "10gb", label: "10GB - ₦2180" }
    ],
};

const testimonialData = [
    {
        name: "John Smith",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta consectetur ipsum ab fugiat rerum. Tempora corporis ea minus iure cum quisquam rerum quae aliquam. Id, velit? Accusantium, pariatur. Aperiam, numquam!",
    },
    {
        name: "John Smith",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta consectetur ipsum ab fugiat rerum. Tempora corporis ea minus iure cum quisquam rerum quae aliquam. Id, velit? Accusantium, pariatur. Aperiam, numquam!",
    },
    {
        name: "John Smith",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta consectetur ipsum ab fugiat rerum. Tempora corporis ea minus iure cum quisquam rerum quae aliquam. Id, velit? Accusantium, pariatur. Aperiam, numquam!",
    },
    // Your testimonial data here
];


document.addEventListener("DOMContentLoaded", function() {
    const dataInfo = [
      {
        title: "MTN",
        image: "images/mtn.png",
        link: "./buydata.html?network=mtn"
      },
      {
        title: "AIRTEL",
        image: "images/airtel.png",
        link: "./buydata.html?network=airtel"
      },
      {
        title: "9 MOBILE",
        image: "images/9mobile.png",
        link: "./buydata.html?network=9mobile"
      },
      {
        title: "GLO",
        image: "images/glo.png",
        link: "./buydata.html?network=glo"
      },
      // Add more data here
    ];
  
    const tableBody = document.getElementById("data-table-body");
  
    // Loop through the dataInfo array and create table rows
    dataInfo.forEach(data => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${data.title}</td>
        <td>30-Days</td>
        <td>${data.price}</td>
        <td><a href="${data.link}">Buy Now</a></td>
      `;
      tableBody.appendChild(row);
    });
});
  