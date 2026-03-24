# 🏋️‍♂️ Gym Membership Dashboard

A modern gym membership management dashboard with pricing cards and interactive charts. Track membership growth, revenue, retention rates, and student performance all in one place.

![Dashboard Preview](./src/assets/gym.avif)
()

## ✨ Features

- **Pricing Plans** - Starter Pulse, Pro Elite, Black Card membership options
- **Interactive Charts** - Membership growth, revenue tracking, retention rates
- **Student Marks Chart** - Performance tracking for students/athletes
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Data** - Dynamic charts updated with latest metrics
- **Beautiful UI** - Modern design with smooth animations

## 📊 Charts Included

| Chart Type | Description |
|------------|-------------|
| Membership Growth | Monthly member count (Jan - Dec) |
| Revenue Tracking | Monthly revenue analysis |
| Retention Rate | Member retention percentage |
| Student Marks | Individual student performance comparison |

## 🚀 Tech Stack

- **Frontend Framework**: React.js 18
- **Charting Library**: Recharts
- **Styling**: CSS3 / Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/djriad157764-creator/gym-membership-dashboard.git

# Navigate to project directory
cd gym-membership-dashboard

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
📈 Data Structure
Membership Data
javascript
const gymMembershipData = [
  { month: "Jan", members: 245, revenue: 12250, retention: 92 },
  { month: "Feb", members: 278, revenue: 13900, retention: 93 },
  // ... up to December
];
Student Marks Data
javascript
const studentMarksData = [
  { name: "Alice", marks: 85, average: 83 },
  { name: "Bob", marks: 72, average: 81 },
  // ... and more
];
🎯 Usage
View Pricing Plans - Compare membership tiers and features

Analyze Charts - Hover over data points for detailed information

Track Growth - Monitor membership and revenue trends

Export Data - Click on legend to toggle data visibility

🗂️ Project Structure

gym-membership-dashboard/
├── .vscode/
├── node_modules/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── pricingData.json
├── src/
│   ├── assets/
│   │   ├── food.png
│   │   ├── gym.avif
│   │   └── gym.jpg
│   ├── components/
│   │   ├── ChartCard/
│   │   │   ├── ChartCard.jsx
│   │   │   └── GymChart.jsx
│   │   ├── Nav/
│   │   │   └── Nav.jsx
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx
│   │   ├── PricingCard/
│   │   │   └── PricingCard.jsx
│   │   └── PricingOptions/
│   │       └── PricingOptions.jsx
│   ├── style/
│   │   └── Animations.css
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js


## 🌐 Live Demo

[![Live Demo](https://img.shields.io/badge/🚀_View_Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://gym-membership-dashboard.vercel.app)


Note: After deployment, replace the URL above with your actual live link.

🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📝 License
MIT License

Copyright (c) 2024 Md. Riad Shekh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

👨‍💻 Author
Md. Riad Shekh

GitHub: @djriad157764-creator

Email: djriad157764@gmail.com

Project Link: [https://gym-membership-dashboard.vercel.app/]

🙏 Acknowledgments
Recharts for amazing charting library

React for the awesome framework

Vercel for deployment platform

