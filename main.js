// // Dark Mode Functionality
// document.addEventListener('DOMContentLoaded', function() {
//   const darkModeToggle = document.getElementById('darkModeToggle');
//   const body = document.body;

//   // تحميل الإعداد المحفوظ
//   const savedTheme = localStorage.getItem('theme') || 'light';
  
//   if (savedTheme === 'dark') {
//     body.classList.add('dark-mode');
//     darkModeToggle.textContent = '☀️';
//   }

//   // عند الضغط على الزر
//   darkModeToggle.addEventListener('click', function() {
//     body.classList.toggle('dark-mode');
    
//     if (body.classList.contains('dark-mode')) {
//       darkModeToggle.textContent = '☀️';
//       localStorage.setItem('theme', 'dark');
//     } else {
//       darkModeToggle.textContent = '🌙';
//       localStorage.setItem('theme', 'light');
//     }
//   });
// });
