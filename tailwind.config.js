<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
  <!-- Testimonial cards will stack vertically on mobile -->
  <div class="p-4 sm:p-8 text-sm sm:text-base">
    <!-- Mobile-friendly content -->
  </div>
</div>/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',     // Small mobile devices
      'sm': '640px',     // Larger mobile devices
      'md': '768px',     // Tablets
      'lg': '1024px',    // Laptops
      'xl': '1280px',    // Desktops
      '2xl': '1536px',   // Large desktops
    },
    extend: {
      transitionTimingFunction: {
        jump: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      colors: {
        brand: {
          primary: '#59e578',
          secondary: '#1788ae',
          accent: '#e5a759',
          dark: {
            100: '#1a1a1a',
            200: '#2a2a2a',
            300: '#3a3a3a',
          },
        },
      },
      fontSize: {
        'mobile-sm': ['0.75rem', '1rem'],     // Extra small mobile text
        'mobile-base': ['0.875rem', '1.25rem'], // Small mobile text
        'mobile-lg': ['1rem', '1.5rem'],      // Mobile large text
      },
      spacing: {
        'mobile-gutter': '1rem',  // Mobile-specific padding/margin
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'bounce-in': 'bounceIn 0.8s',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
          '70%': { transform: 'scale(0.9)', opacity: '0.9' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'brand-glow': '0 0 30px rgba(89, 229, 120, 0.3)',
        'accent-glow': '0 0 40px rgba(229, 167, 89, 0.4)',
      },
      borderRadius: {
        'brand': '1rem',
      },
    },
  },
  plugins: [],
};
